const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const students = database.collection("students");

  //문제 11. updateOne
  //students 컬렉션에 해당 데이터를 넣자

  //   const insertStudent = await students.insertMany([
  //     {
  //       _id: 1,
  //       test1: 95,
  //       test2: 92,
  //       test3: 90,
  //       modified: new Date("01/05/2020"),
  //     },
  //     {
  //       _id: 2,
  //       test1: 98,
  //       test2: 100,
  //       test3: 102,
  //       modified: new Date("01/05/2020"),
  //     },
  //     { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  //   ]);
  //문제 11-1. id가 3인 학생에게 test3 의 점수를 98로 세팅하자
  const updateStudent = await students.updateOne(
    { _id: 3 },
    { $set: { test3: 98 } }
  );
  console.log(updateStudent);
}

run();
