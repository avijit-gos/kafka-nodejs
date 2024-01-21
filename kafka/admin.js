/** @format */
const { kafka } = require("./client");

async function adminInit() {
  // create an Kafka admin
  const admin = kafka.admin();
  console.log("Kafka ADMIN connecting...");

  // connecting kafka admin
  await admin.connect();
  console.log("Kafka ADMIN connected");

  await admin.createTopics({
    topics: [
      {
        topic: "TestTopicTwo",
        numPartitions: 1,
      },
    ],
  });
  console.log("Topic created");

  await admin.disconnect();
}
adminInit();
