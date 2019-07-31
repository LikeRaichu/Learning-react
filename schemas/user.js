const mongoose = require('mongoose');
const { Schema } = mongoose;

// user 스키마 정의
const userSchema = new Schema({
   name: {
       type: String,
       required: true,
       unique: true
   },
   age: {
       type: Number,
       required: true
   },
   married: {
       type: Boolean
   },
   comment: {
       type: String
   },
   createdAt: {
       type: Date,
       default: Date.now
   }
});

module.exports = mongoose.model('User', userSchema);