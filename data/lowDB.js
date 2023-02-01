const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/** SETTING UP LOWDB */
const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({ records: [] }).write();

exports.lowDB = db;
