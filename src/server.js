import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import usersRouter from "./api/users/index.js";
import accommodationRouter from "./api/accommodations/index.js";
import {
  forbiddenErrorHandler,
  genericErroHandler,
  notFoundErrorHandler,
  unauthorizedErrorHandler,
} from "./errorHandlers.js";
const server = express();
const port = process.env.PORT || 3001;

//...........................middlewares......................
server.use(cors());
server.use(express.json());
//............................endpoints.......................
server.use("/user", usersRouter);
server.use("/accommondation", accommodationRouter);
//..............................errorhandlers................
server.use(notFoundErrorHandler);
server.use(unauthorizedErrorHandler);
server.use(forbiddenErrorHandler);
server.use(genericErroHandler);

mongoose.connect(process.env.MONGOOSE_URL);

mongoose.connection.on("connected", () => {
  console.log("successfuly connected to mongodb");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("server running on port", port);
  });
});
