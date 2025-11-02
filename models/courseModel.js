import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  category: {
    type: String, // 👈 Add this field
    required: [true, "Category is required"],
  },
  videoUrl: {
    type: String,
    required: [true, "Video URL is required"],
  },
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;
