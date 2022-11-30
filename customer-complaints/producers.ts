import memphis from "memphis-dev";

let producer: any;

export const memphisConnect = async () => {
	const memphisConnection = await memphis.connect({
		host: "localhost",
		username: "customerApi",
		connectionToken: "memphis",
	});

	producer = await memphisConnection.producer({
		stationName: "customer-support",
		producerName: "customerApi",
	});
};

export const publishToStation = async (complaint: any) => {
	await producer.produce({ message: Buffer.from(JSON.stringify(complaint)) });
	console.log(`Memphis - message is sent`);
};
