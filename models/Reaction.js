const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Types;

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        deafault: Date.now,
        get: (timesstamp) => dateFormat(timestamp),
    },
});

module.exports = reactionSchema;