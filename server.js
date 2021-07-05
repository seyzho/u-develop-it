const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        //your mysql user
        user: "root",
        //your mysql pass
        password: "Ultimate8!",
        database: "election"
    },
    console.log("connected to teh election database")
);


//default response for any other requerst (not found)
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});