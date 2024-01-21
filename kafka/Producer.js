/** @format */

const { kafka } = require("./client");

async function producerInit(topic_name, message) {
  const producer = kafka.producer();
  await producer.connect();

  // Convert the message to an array of message objects
  const serializedMessage =
    typeof message === "string" ? message : JSON.stringify(message);

  const messages = [
    {
      value: serializedMessage,
    },
  ];

  console.log({
    topic: topic_name,
    messages: messages,
  });

  await producer.send({
    topic: topic_name,
    messages: messages,
  });
}

module.exports = { producerInit };
