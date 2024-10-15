const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const inventory = database.collection("inventory");

  //   const userData = await users.insertOne({ name: "dony", age: 17 });
  //   console.log("result", userData);

  //   const userList = [
  //     { name: "철수", age: 30 },
  //     { name: "jessica", age: 25 },
  //   ];
  //   const userListResult = await users.insertMany(userList);
  //   console.log("result", userListResult);

  //   const findUser = await users.findOne({ age: { $gt: 20 } });
  //   console.log("result", findUser);

  //   const UpdateUser = await users.updateOne(
  //     { name: "dony" },
  //     { $set: { age: 18 } }
  //   );
  //   console.log("result", UpdateUser);

  //   const DeleteUser = await users.deleteOne({ name: "dony" });
  //   console.log("result", DeleteUser);

  //   const userData = await users
  //     .find({ age: { $gt: 20 } })
  //     .project({ name: 1 })
  //     .toArray();
  //   console.log("userdata", userData);

  //문제4 inventory에 해당데이터를 먼저 넣고
  //   const goods = await inventory.insertMany([
  //     {
  //       item: "journal",
  //       qty: 25,
  //       size: { h: 14, w: 21, uom: "cm" },
  //       status: "A",
  //     },
  //     {
  //       item: "notebook",
  //       qty: 50,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "A",
  //     },
  //     {
  //       item: "paper",
  //       qty: 100,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "D",
  //     },
  //     {
  //       item: "planner",
  //       qty: 75,
  //       size: { h: 22.85, w: 30, uom: "cm" },
  //       status: "D",
  //     },
  //     {
  //       item: "postcard",
  //       qty: 45,
  //       size: { h: 10, w: 15.25, uom: "cm" },
  //       status: "A",
  //     },
  //   ]);
  //   console.log("result", goods);

  //문제4-2 status가 D인 데이터를 찾아라
  //   const findGoods = await inventory.find({ status: "D" }).toArray();
  //   console.log(findGoods);

  //문제5 status가 'A’이고 qty가 50인 데이터를 찾아라
  //   const findGoods = await inventory.find({ status: "A", qty: 50 }).toArray();
  //   console.log(findGoods);

  //문제 6. 쿼리 $in 사용해보기
  //   const findGoods = await inventory
  //     .find({ status: { $in: ["A", "B"] } })
  //     .toArray();
  //   console.log(findGoods);

  //문제 7. $lt
  //   const findGoods = await inventory
  //     .find({ status: "A", qty: { $lt: 30 } })
  //     .toArray();
  //   console.log(findGoods);

  //문제 8. $or
  //   const findGoods = await inventory
  //     .find({ $or: [{ status: "A", qty: { $lt: 30 } }] })
  //     .toArray();
  //   console.log(findGoods);

  // 문제 9. nested field
  // size 에 uom이 in 인 데이터를 찾자
  //   const findGoods = await inventory.find({ "size.uom": "in" }).toArray();
  //   console.log(findGoods);

  //문제 10.size에 h가 10을 초과하는 데이터를 찾자
  const findGoods = await inventory.find({ "size.h": { $gt: 10 } }).toArray();
  console.log(findGoods);
}

run();
