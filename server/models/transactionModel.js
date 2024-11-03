import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true
    },

    plan: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    credits: {
        type: Number,
        required: true
    },

    payments: {
        type: Boolean,
        default: false
    },

    date: {
        type: Number
    }
})


const transactionModel = mongoose.model.transaction || mongoose.model('transaction', transactionModel)

export default transactionModel;