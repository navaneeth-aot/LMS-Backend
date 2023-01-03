const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRoutes")
const bodyParser = require('body-parser');

const app = express();

//middleware
app.use(bodyParser.json());
app.use("/api/student",studentRouter);
// app.use(express.urlencoded());


mongoose.connect(
    "mongodb+srv://navaneeth:K1CNUwhWPyoGUIYO@cluster0.qcg2cmj.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
)

app.listen(8080, () => {
    console.log("server is running on port 3000");
});

// app.get('/', async (req,res) => {
//     const student = new studentSchema({name: Navaneeth,
//         password : 1234  })
    
// })

module.exports = app;