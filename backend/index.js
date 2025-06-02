//index.js
import Express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import cors from "cors";
import orderRouter from "./routes/order.js";
import authenticationRouter from "./routes/authentication.js";
const app = Express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
  }));

app.use(Express.json());

app.use(orderRouter);
app.use(authenticationRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8800, () => {
    console.log("Connected to backend1!")
})