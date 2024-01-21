/** @format */

const createError = require("http-errors");
const { producerInit } = require("../kafka/Producer");

class Model {
  constructor() {}

  async createPostModal(data) {
    try {
      await producerInit("post-test", data);
    } catch (error) {
      throw createError.BadRequest(error.message);
    }
  }
}
module.exports = new Model();
