const { Schema, model } = require('mongoose');
// const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model("User", userSchema);
module.exports = User;