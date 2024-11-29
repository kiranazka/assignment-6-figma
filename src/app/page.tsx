
import Achievement from "@/component/Achivement/Achivement";
import CourseCategory from "@/component/CourseCategory/CourseCategory";
import Courses from "@/component/Courses/Courses";
import CustomerTestimonial from "@/component/CustomerTestimomial/CustomerTestimomial";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Hero from "@/component/Hero/Hero";
import Navbar from "@/component/Navbar/Navbar";
import OurTeam from "@/component/Our Team/OurTeam";



export default function Home() {
  return (
    <div>
     <Header/>
      <Navbar/>
     <Hero/>
     <CourseCategory/>
   <Achievement/>
   <Courses/>
   <OurTeam/>
   <CustomerTestimonial/>
     <Footer/>
    </div>
    

  )
}