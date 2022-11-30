import express from "express";
import complaints from "./routes/complaints.routes";
import bodyParser from "body-parser";
import { memphisConnect } from "./producers";

const app = express();

memphisConnect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
	res.send("This is an api for customer-complaints");
});

app.use("/complaints", complaints);

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
