const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    "name": {
        type: String,
        trim: true,
        maxlength: [30, "Character limit is 20"],
        required: [true, "Provide name"]
    },
    "completed": {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);