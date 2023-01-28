const express = require('express');
const monggose = require('mongoose');
const userRouter = require("./routes/UserRoutes");
const authRouter = require("./routes/AuthRoutes");
const { authenticateJWT } = require("./controllers/AuthControllers");

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mongodbURI = "mongodb+srv://calvintorsa:2rALUuWbXkYS0vCj@cluster0.mdtfbmm.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", authenticateJWT, userRouter);
app.use("/api/jwt", authRouter)

//configure mongoose
monggose.connect(
    process.env.MONGODB_URI || mongodbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = app;
