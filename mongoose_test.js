const mongoose = require('mongoose');
const { Schema } = mongoose;

// mongodb 연결
mongoose.connect('mongodb://localhost/test', {
   useNewUrlParser: true
});


// user 스키마 정의
const userSchema = new Schema( {
   name : String,
   age : Number,
   married : Boolean,
   comment: String,
   createdAt : Date
});

const User = mongoose.model('user', userSchema);

User.find({}, function(err, docs) {
   if(err) {
       console.log(err);
   } else {
       console.log(docs);
   }
})

// Data insert
const user = new User({
   name: 'hong',
   age: 20,
   married : false
});
user.save((err, result) => {
   if(err)
       console.log(err);
   else {
       console.log(result);
   }

})