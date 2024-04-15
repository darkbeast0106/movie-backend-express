import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routes/movies.js";

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());

app.use("/movies", movieRoutes);
app.get("/", (request, response) => {
    response.send("Hello world!")
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})