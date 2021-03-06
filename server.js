require('dotenv').config({path: "./config.env"});

const ErrorHandler = require('./middleware/error');
const express = require("express");
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(ErrorHandler);
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`logged error: ${err}`);
    server.close(() => process.exit(1));
})