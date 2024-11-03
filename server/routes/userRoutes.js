import express from 'express';
import { clerkWebHooks, paymentRazorpay, userCredits } from '../controllers/UserController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebHooks);

userRouter.get('/credits', authUser, userCredits)

userRouter.post('/pay-razor', authUser, paymentRazorpay)


export default userRouter;