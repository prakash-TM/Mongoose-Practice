const Mongoose = require("mongoose")
const ObjectId = Mongoose.Schema.ObjectId;

const initialSchema = () => {
    const userSchema = new Mongoose.Schema({
        _id: { type: Object },
        userName: { type: String, required: true },
        Email: { type: String },
        country: { type: String },
        DOJ: { type: String }

    })


    const userModel = Mongoose.model("Users", userSchema)

    const userRecords = new userModel({
        _id: ObjectId,
        userName: "Prakash",
        Email: "prakash@gmail.com",
        country: "India",
        DOJ: "21.09.2020"
    }, {
        _id: ObjectId,
        userName: "vignesh",
        Email: "vignesh@gmail.com",
        country: "India",
        DOJ: "23.10.2020"
    }, {
        _id: ObjectId,
        userName: "Anand",
        Email: "Anand@gmail.com",
        country: "Srilanka",
        DOJ: "11.09.2019"
    }, {
        _id: ObjectId,
        userName: "Guru",
        Email: "Guru@gmail.com",
        country: "Dhubai",
        DOJ: "05.05.2021",
    }, {
        _id: ObjectId,
        userName: "Kumar",
        Email: "Kumar@gmail.com",
        country: "India",
        DOJ: "21.09.2020",
    })

    userRecords.save((err, data) => {
        console.log({ data, err })
    })
}

const initialCon = async() => {
    await Mongoose.connect("mongodb://localhost:27017/NetflixTask")
    initialSchema()
}

initialCon()