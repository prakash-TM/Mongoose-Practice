const { MongoClient } = require("mongodb");

const mongoDBURL = "mongodb://localhost:27017";
const client = new MongoClient(mongoDBURL);

const dbName = "vssApp";

const mainApp = async() => {
    await client.connect();
    console.log("DB connected successfully");

    const db = client.db(dbName);
    const docCollection = db.collection("mydoc");
    const insertResult = await docCollection.insertMany([
        { a: 1, b: 50 },
        { a: 2 },
        { a: 3 },
    ]);
    console.log("Inserted documents =>", insertResult);
    console.log({ docCollection });
    return docCollection;
};

mainApp()
    .then((data) => {
        console.log({ data });
    })
    .catch(console.error)
    .finally(() => {
        client.close();
    });