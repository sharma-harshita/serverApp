const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/students"

mongoose.connect(url, (err, connection)=>{
    if (err) console.log(err);
    else console.log("Connection successful");
})

const studentSchema = mongoose.Schema({
    name:String,
    age : Number,
    batch : String
})

const Student = mongoose.model("Stucollection",studentSchema)

var student1 = new Student({
    name : "John",
    age : 20,
    batch : "Elevation"
})

var student2 = new Student({
    name : "Doe",
    age : 24,
    batch : "Elevation"
})

var student3 = new Student({
    name : "Rick",
    age : 30,
    batch : "Elevation"
})

// student1.save((err, result)=>{
//     if (err) console.log(err);
//     else console.log(result);
// })

// Student.insertMany([student1,student2,student3],(err, result)=>{
//     if (err) console.log(err);
//     else console.log(result);
// })

Student.find({age : {$lt : 24}},(err, result)=>{
    if (err) console.log(err);
    else console.log(result);
})