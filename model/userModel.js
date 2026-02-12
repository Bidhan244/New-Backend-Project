const mongoose = require('mongoose');
import { is } from './../node_modules/@types/whatwg-url/lib/URL.d';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', userSchema);

