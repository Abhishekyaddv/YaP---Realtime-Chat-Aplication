import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  allContacts: [],
  chats: [],
  messages: [],
  activeTab: "chats",
  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,
  isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,


  toggleSound: () => {
    localStorage.setItem("isSoundEnabled", !get().isSoundEnabled) //this for Updating the local storage 
    set({ isSoundEnabled: !get().isSoundEnabled }) // this is for the UI updates
  },

  setActiveTab: (tab) => set({ activeTab: tab}),
  setSelectedUser: (selectedUser) => set({ selectedUser }),

  getAllContacts: async() => {
    set({isUserLoading: true});
    try {
      const res = await axiosInstance.get("/messages/contacts");
      set({ allContacts: res.data }) //update the state after getting data from the backend
      console.log(res.data);
      
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({isUserLoading: false})
    }
  },
  getMyChatPartners: async() => {
    set({isUserLoading: true});
    try {
      const res = await axiosInstance.get("/messages/chats")
      set({chats: res.data})
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({isUserLoading: false})
    }

  },

  getMessagesByUserId: async (userId) => {
    set({isMessagesLoading: true})
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({messages: res.data})
    } catch (error) {
        toast.error(error.response?.data?.message || "something went wrong")
    } finally{
      set({isMessagesLoading: false})
    }
  },
  sendMessage: async (messageData) => {
    const {selectedUser, messages} = get(); //here we lifited the state 
    const {authUser} = useAuthStore.getState(); //using austand package we can access the state value from one page to another

    const tempId = `temp-${Date.now()}`

    const optimisticMessage = {
      _id: tempId,
      senderId: authUser._id,
      reciverId: selectedUser._id,
      text: messageData.image,
      createdAt: new Date().toISOString(),
      isOptimistic: true
    }

    // immediately update the UI by adding temporary data then change it to original one
    set({messages: [...messages, optimisticMessage]})
    try {
      const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData)
      set({messages: messages.concat(res.data)})
    } catch (error) {
      // remove optimistic message on faliure
        set({messages: messages})
        toast.error(error.response?.data?.message || "Something went wrong")
    }
  }
}))