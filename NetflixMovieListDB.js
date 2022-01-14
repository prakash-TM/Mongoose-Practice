const Mongoose = require("mongoose")
const ObjectId = Mongoose.Schema.ObjectId;
const initialSchema = () => {
    const movieSchema = new Mongoose.Schema({
        _id: { type: Object },
        title: { type: String, required: true },
        year: { type: Number },
        genre: { type: String },
        budget: { type: String }
    })
    const movieModel = Mongoose.model("Movie-List", movieSchema)
    const movieList = new movieModel({
        _id: ObjectId,
        title: "Iron Man",
        year: "2008",
        genre: "action",
        budget: "$120M"
    })
    movieList.save((err, data) => {
        console.log({ data, err })
    })
}
const initialCon = async() => {
    await Mongoose.connect("mongodb://localhost:27017/NetflixTask")
    initialSchema()
}
initialCon()