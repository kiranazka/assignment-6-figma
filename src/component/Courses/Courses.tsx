
import React from "react";
import Image from "next/image";
const courses = [
  {
    title: "UX/UI Design 201",
    category: "Design",
    description: "Learn the essentials of UX/UI design.",
    price: "$400",
    image: "/Image/course1.png",
  },
  {
    title: "Introduction to Python",
    category: "Programming",
    description: "Learn the fundamentals of Python programming.",
    price: "$400",
    image: "/Image/course2.png",
  },
  {
    title: "Data Analysis for Beginners",
    category: "Business",
    description: "Master data analysis from scratch.",
    price: "$400",
    image: "/Image/course3.png",
  },
  {
    title: "Art Specialization",
    category: "Art",
    description: "Explore and refine your artistic skills.",
    price: "$400",
    image: "/Image/course4.png",
  },
  {
    title: "Rule of Law",
    category: "Law",
    description: "Understand the foundations of legal systems.",
    price: "$400",
    image: "/Image/course5.png",
  },
  {
    title: "Introduction to Webflow",
    category: "Tech",
    description: "Learn how to build websites using Webflow.",
    price: "$400",
    image: "/Image/course6.png",
  },
];

const Courses = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Courses</h1>
      <p className="text-center text-gray-900 text-2xl">
        Your Ultimate Guide to Learning
      </p>

      <div className="flex justify-center gap-10 mt-10">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Popular
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Recommended
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Best Price
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            {/* Image Size */}
            <Image
              src={course.image}
              alt={course.title}
              width={416}
              height={300}
              className="object-cover w-full h-40"
              priority
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-900">{course.category}</p>
              <p className="text-gray-900 mt-2">{course.description}</p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {course.price}
                </span>
                <button className="px-6 py-2 border border-gray-400 text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-2 border border-gray-400 text-black rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
 
