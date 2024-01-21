/** @format */

const { kafka } = require("./client");

async function ConsumerInit() {
  const consumer = kafka.consumer({ groupId: "test-1" });
  await consumer.connect();

  await consumer.subscribe({ topics: ["post-test"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log("Getting message in consumer from topic ", topic);

      // Convert the Buffer to a string
      const messageValue = message.value.toString();

      try {
        // Parse the string as JSON
        const parsedMessage = JSON.parse(message.value.toString());
        console.log("Message in consumer", parsedMessage);
      } catch (error) {
        console.error("Error parsing message as JSON:", error);
      }
    },
  });
}

ConsumerInit();
