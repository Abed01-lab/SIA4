import axios from "axios";
import { IComplaint } from "./interface/complaint.interface";

export async function logger() {
	const res = await axios.get("http://localhost:3000/complaints");
	const complaints = await res.data;
	console.log(complaints);

	console.log(`Total complaints: ${complaints.length}, Pending complaints: ${pending(complaints)}, Resolved complaints ${resolved(complaints)}`);
}

const pending = (complaints: IComplaint[]) => {
	let sum = 0;
	complaints.forEach((complaint) => {
		if (complaint.status === "pending") sum++;
	});
	return sum;
};

const resolved = (complaints: IComplaint[]) => {
	let sum = 0;
	complaints.forEach((complaint) => {
		if (complaint.status === "resolved") sum++;
	});
	return sum;
};
