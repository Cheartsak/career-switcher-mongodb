import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import multer from "multer";
import { ObjectId } from "mongodb";
import databaseClient from "./services/database.mjs";
import { checkMissingField } from "./utils/requestUtils.js";

const HOSTNAME = process.env.SERVER_IP || "127.0.0.1";
const PORT = process.env.SERVER_PORT || 3000;

// setting initial configuration for upload file, web server (express), and cors
const upload = multer({ dest: "uploads/" });
dotenv.config();
const webServer = express();
webServer.use(cors());
webServer.use(express.json());

// HEALTH DATA
const HEALTH_DATA_KEYS = [
  "duration",
  "distance",
  "average_heart_rate",
  "user_id",
];

// server routes

webServer.get("/company", async (req, res) => {
  // writing code here
  const company = await databaseClient
    .db()
    .collection("company")
    .find()
    .toArray();
  res.json(company);
});

webServer.post("/company", async (req, res) => {
  // writing code here
  const company = req.body;
  await databaseClient.db().collection("company").insertOne(company);
  res.send("Create Company Success");
});

webServer.post("/company/employee", async (req, res) => {
  // writing code here
  const { company_id, user_id } = req.body;
  // const companyId = body.company_id;
  // const userId = body.user_id;
  await databaseClient
    .db()
    .collection("company")
    .updateOne(
      { _id: new ObjectId(company_id) },
      { $push: { employees: new ObjectId(user_id) } }
    );
  res.send("Add employee to company");
});

// initilize web server
const currentServer = webServer.listen(PORT, HOSTNAME, () => {
  console.log(
    `DATABASE IS CONNECTED: NAME => ${databaseClient.db().databaseName}`
  );
  console.log(`SERVER IS ONLINE => http://${HOSTNAME}:${PORT}`);
});

const cleanup = () => {
  currentServer.close(() => {
    console.log(
      `DISCONNECT DATABASE: NAME => ${databaseClient.db().databaseName}`
    );
    try {
      databaseClient.close();
    } catch (error) {
      console.error(error);
    }
  });
};

// cleanup connection such as database
process.on("SIGTERM", cleanup);
process.on("SIGINT", cleanup);
