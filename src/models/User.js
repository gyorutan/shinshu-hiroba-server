const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        sei: {
            type: String,
            required: true,
        },
        mei: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        studentId: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
