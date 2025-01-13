// backend.js
import express from "express"; // import express

const app = express(); // create an instance of express
const port = 8000; // constant of port 

app.use(express.json()); // process incoming data in JSON format

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
