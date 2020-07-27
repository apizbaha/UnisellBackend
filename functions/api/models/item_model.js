const database = require("../database");

class ItemModel {
  constructor() {
    if (this.instance) return this.instance;
    ItemModel.instance = this;
  }

  get() {
    return database.getList("items");
  }
  getById(id) {
    return database.get("items", id);
  }

  create(item) {
    return database.create("items", item);
  }

  delete(id) {
    return database.delete("items", id);
  }

  update(id, item) {
    return database.set("items", id, item);
  }
}

module.exports = new ItemModel();
