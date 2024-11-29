import React from "react";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import Image from "next/image";
const OurTeam = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              name: "James Nduku",
              role: "Marketing Coordinator",
              image: "/Image/team1.png",
            },
            {
              name: "Joseph Munyambu",
              role: "Nursing Assistant",
              image: "/Image/team2.png",
            },
            {
              name: "Joseph Ngumbau",
              role: "Medical Assistant",
              image: "/Image/team3.png",
            },
            {
              name: "Erick Kipkemboi",
              role: "Web Designer",
              image: "/Image/team4.png",
            },
            {
              name: "Stephen Kerubo",
              role: "President of Sales",
              image: "/Image/team5.png",
            },
            {
                name: "John Leboo",
                role: "Dog Trainer",
                image: "/Image/team6.png",
              },
            
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-gray-950">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4 text-gray-900">
                <a
                  href="#"
                  className="hover:text-gray-900"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-900"
                  aria-label={`Twitter profile of ${member.name}`}
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-900"
                  aria-label={`Dribbble profile of ${member.name}`}
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;