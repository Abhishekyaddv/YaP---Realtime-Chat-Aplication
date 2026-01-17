import express from 'express'
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';

const router = express.Router()

router.use(arcjetProtection) // Here instead of checking each route singularly we can just use arcjet on router method, by which each request can only be run if it passes the arcjet test

router.post('/signup', signup);
router.post('/login', login)
router.post('/logout', logout)

router.put('/update-profile', arcjetProtection, protectRoute, updateProfile) // Here we will call the protectRoute function first to identify and validate the user if it exists or not then only after that the updateProfile will be called 

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user))

export default router;