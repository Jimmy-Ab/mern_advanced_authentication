const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        // useCreatIndex: true ,
        useUnifiedTopology: true,
        // useFindAndModify: true
    });

    console.log("MongoDB connected");
}

module.exports = connectDB; 