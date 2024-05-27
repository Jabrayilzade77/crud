import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRoute } from "./src/routes/UserRoute.js";
import "dotenv/config";
// import { myLoggerBySecond } from "./src/middleware/myLoggerBySecond.js";
// import { myLoggerByYear } from "./src/middleware/myLoggerByYear.js";
// import { fakeAuth } from "./src/middleware/fakeAuth.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// app.use(myLoggerBySecond);
// app.use(fakeAuth);
//wordlist

app.use("/api/users", userRoute);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

