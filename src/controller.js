/** @format */

const { createPostModal } = require("./model");

class Controller {
  constructor() {}

  async createPost(req, res, next) {
    try {
      const result = await createPostModal(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new Controller();
