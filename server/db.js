const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://lucho:15987412365l@sporty.qlu2zlw.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to DB')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB