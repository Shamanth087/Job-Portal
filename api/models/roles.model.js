const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const rolesSchema = new Schema ({
    jobtype: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
}, {
    timestamps:true,
});

const Roles = mongoose.model('Roles',rolesSchema);

module.exports = Roles;