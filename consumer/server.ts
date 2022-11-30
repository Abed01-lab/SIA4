import memphis from "memphis-dev";
import { Memphis, Message } from "memphis-dev/types";
import { logger } from "./logger";

(async function () {
	let memphisConnection: Memphis = {} as Memphis;

	try {
		memphisConnection = await memphis.connect({
			host: "localhost",
			username: "test",
			connectionToken: "memphis",
		});

		const consumer = await memphisConnection.consumer({
			stationName: "customer-support",
			consumerName: "Frontend",
			consumerGroup: "",
		});

		consumer.on("message", (message: Message) => {
			console.log(message.getData().toString());
			message.ack();
			logger();
			const headers = message.getHeaders();
		});

		consumer.on("error", (error) => {
			console.log(error);
		});
	} catch (ex) {
		console.log(ex);
		if (memphisConnection) memphisConnection.close();
	}
})();
