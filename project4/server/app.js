// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//middle ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));
app.use(express.static("uploads"));

// datebase
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
.then(()=> console.log('Connectd to the database!'))
.catch(err => console.log(err));

//router prefix
app.use("/api/post", require("./routes/routes"))


// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));
