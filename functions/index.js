const functions = require("firebase-functions");
const express = require("express");
const itemRouter = require("./api/controller/item_controller");
const notificationRouter = require("./api/controller/notification_controller");
const userRouter = require("./api/controller/user_controller");
const app = express();

app.use(express.json());
app.use("/items", itemRouter);
app.use("/notifications", notificationRouter);
app.use("/users", userRouter);

exports.api = functions.https.onRequest(app);

exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});
