import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { userRoutes } from "./routes/userRoutes";
const app = express();
// default port to listen
const port: string = process.env.SERVER_PORT || "3000";

// set up dot env config
dotenv.config();


// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

app.use(bodyParser.json());

app.use('/api/user', userRoutes)