const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_SERVER_URL)
        console.log('connected to DB')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB