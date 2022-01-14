const Mongoose = require("mongoose");

// Step 2
const initSchema = () => {
    const employeeSchema = new Mongoose.Schema({
        employeeName: { type: String, required: true },
        employeeCity: { type: String, required: true },
        employeeContact: { type: String },
        backgroundCheck: {
            isProcessCompleted: { type: Boolean },
            backgroundProcessingState: { type: Boolean },
        },
        employeeWorkExperience: [{
            org: { type: String },
            started: { type: Date },
            ended: { type: Date },
        }, ],
    }, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "modified_at",
        },
        strict: true,
    });

    const EmployeeModel = Mongoose.model("Employee", employeeSchema);

    const employeeRecord = new EmployeeModel({
        employeeName: "prakash",
        employeeCity: "tirupur",
        contact: "9634523745",
    });

    employeeRecord.save((err, data) => {
        console.log({ err, data });
    });
};

// Step 1
const initConnection = async() => {
    await Mongoose.connect("mongodb://localhost:27017/vss-mongoose-demo");

    initSchema();
};

initConnection();