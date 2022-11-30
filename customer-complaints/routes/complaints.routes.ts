import express from "express";
import { IComplaint } from "../interface/complaint.interface";
import { publishToStation } from "../producers";

const complaints: IComplaint[] = [];
const router = express.Router();

router.get("/", async (req, res) => {
	res.json(complaints);
});

router.put("/", async (req, res) => {
	complaints[req.body.id] = {
		id: req.body.id,
		description: req.body.description,
		category: req.body.category,
		status: req.body.status,
	};
	await publishToStation(complaints[req.body.id]);
	res.status(200).json({ msg: "ok" });
});

router.post("/", async (req: any, res: any) => {
	const complaint = {
		id: complaints.length + 1,
		category: req.body.category,
		description: req.body.description,
		status: "pending",
	};
	complaints.push(complaint);
	await publishToStation(complaint);
	res.status(200).json({ msg: "ok" });
});

export default router;
