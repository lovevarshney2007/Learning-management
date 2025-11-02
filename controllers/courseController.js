import Course from "../models/courseModel.js";

// ✅ Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      message: "All courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};

// ✅ Create new course
export const createCourse = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    if (!title || !description || !videoUrl) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, description and videoUrl",
      });
    }

    const newCourse = new Course({
      title,
      description,
      videoUrl,
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({
      success: false,
      message: "Error creating course",
      error: error.message,
    });
  }
};
