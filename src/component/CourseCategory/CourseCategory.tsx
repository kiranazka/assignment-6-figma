import React from "react";
import Image from "next/image";

const courses = [
  { image:"../Image/frame1.svg", title: "Design & Development", description: "50+ Courses Available" },
  { image:"../Image/frame2.svg", title: "Digital Marketing", description: "50+ Courses Available" },
  { image:"../Image/frame3.svg", title: "Self & Development", description: "50+ Courses Available" },
  { image:"../Image/frame4.svg",title: "Marketing", description: "50+ Courses Available" },
  { image:"../Image/frame5.svg", title: "Development", description: "50+ Courses Available" },
  { image:"../Image/frame6.svg",title: "Communication", description: "50+ Courses Available" },
  { image:"../Image/frame7.svg",title:"Business", description: "50+ Courses Available" },
  { image:"../Image/frame8.svg", title: "Finance", description: "50+ Courses Available" },
  { image:"../Image/frame9.svg", title: "Consulting", description: "50+ Courses Available" },
  
];

const CourseCategory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-36">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-bold text-[#000000]">Explore Courses By Category</h2>
        <p className="text-[18px] text-gray-600 mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center gap-[32px] p-6 bg-[#F7F7F7] rounded-lg transition-all hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="category-image">
              <Image
                src={course.image}
                alt={course.title}
                width={60}
                height={100}
                className="mb-4"
              />
            </div>

            {/* Text Section */}
            <div className="category-text">
              <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* All Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-gray-200">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseCategory;