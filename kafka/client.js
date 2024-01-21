/** @format */

const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "my-test-app",
  brokers: ["localhost:9092"],
});
module.exports = { kafka };
