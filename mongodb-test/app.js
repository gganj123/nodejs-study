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
  //   const updateStudent = await students.updateOne(
  //     { _id: 3 },
  //     { $set: { test3: 98 } }
  //   );
  //   console.log(updateStudent);

  //문제 12. updateMany
  //모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가해라
  //   const updateStudent = await students.updateMany(
  //     {},
  //     {
  //       $set: { test1: 0, status: "modified" },
  //     }
  //   );
  //   console.log(updateStudent);

  //문제13. test2점수가 92점인 학생을 삭제하자
  //   const deleteStudent = await students.deleteOne({ test2: 92 });
  //   console.log(deleteStudent);

  //문제 14. deleteMany .test1의 점수가 0인 학생들을 삭제하자
  const deleteStudent = await students.deleteMany({ test1: 0 });
  console.log(deleteStudent);
}

run();
