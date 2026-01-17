import express from 'express'
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login)
router.post('/logout', logout)

router.put('/update-profile', protectRoute, updateProfile) // Here we will call the protectRoute function first to identify and validate the user if it exists or not then only after that the updateProfile will be called 

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user))

export default router;