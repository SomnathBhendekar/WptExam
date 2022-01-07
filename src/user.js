const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const addRecord = async (recordgen) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  const sql = ` insert into message( sender, receiver, msg) values (? ,?, ?)`;
  await connection.queryAsync(sql, [
    recordgen.sender,
    recordgen.receiver,
    recordgen.msg,
  ]);

  await connection.endAsync();

  console.log("Record Added");
};

const recordgen = {
  sender: "Mannath",
  receiver: "person",
  msg: "record add ho gaya",
};

//addRecord(recordgen);

const showRecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  const sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);

  await connection.endAsync();

  console.log("Records!!");
  return list;
};

showRecord();

module.exports = { addRecord, showRecord };
