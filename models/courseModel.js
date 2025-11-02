import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:String,
    url: String
});

const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    instructor : String,
    videos : [videoSchema],
     createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Course", courseSchema);
