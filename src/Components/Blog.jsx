import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import Nabbar from "./Nabbar";
import Footer from "./Footer";

// Blog content tailored to Calgary-based software development topics
const card = [
  {
    img: "/Blog-jpg/01-1.png",
    topText: "Top Programming Languages in 2025",
    bottomText: "As Calgary’s tech ecosystem evolves, developers are embracing languages like Rust, Go, and TypeScript to build scalable, modern applications.",
  },
  {
    img: "/Blog-jpg/01.png",
    topText: "Why Calgary Is a Hotspot for Software Startups",
    bottomText: "Discover why tech entrepreneurs are choosing Calgary, with its skilled workforce, growing VC interest, and innovation-friendly policies.",
  },
  {
    img: "/Blog-jpg/10-Information-Technology-Audit-Report-Samples-Templates-PDF-Word.jpg",
    topText: "Scaling Agile Teams: A Developer’s Guide",
    bottomText: "Learn how our Calgary-based teams use Agile methodologies to ship high-quality software faster and foster better team collaboration.",
  },
  {
    img: "/Blog-jpg/about-1.jpg",
    topText: "How to Get Hired at a Top Software Company",
    bottomText: "Tips from our recruiters and developers on how to land a role at leading software companies in Alberta’s growing tech industry.",
  },
  {
    img: "/Blog-jpg/banner-finance.jpg",
    topText: "Cost-Effective DevOps Practices for Small Teams",
    bottomText: "DevOps doesn't have to be expensive. Here’s how Calgary-based teams are implementing CI/CD pipelines on a budget.",
  },
  {
    img: "/Blog-jpg/banner2.jpg",
    topText: "Building with AI: Practical Use Cases in 2025",
    bottomText: "AI isn’t just hype. From customer support to code generation, here’s how software firms in Calgary are making AI work.",
  },
  {
    img: "/Blog-jpg/Requirement.png",
    topText: "Cloud Migration Pitfalls & How to Avoid Them",
    bottomText: "If you're planning to migrate to the cloud, learn from these common mistakes we’ve seen with companies across Western Canada.",
  },
  {
    img: "/Blog-jpg/service-detail.jpg",
    topText: "Crafting Better User Experiences in SaaS",
    bottomText: "UX is critical to software success. Discover how our Calgary team uses Figma, user testing, and design systems to get it right.",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800">
      <Nabbar />

      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src="/Blog-jpg/Our-Blog (2).jpg"
          className="w-full h-full object-cover brightness-75"
          alt="Blog Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Our Blog</h1>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="px-6 sm:px-14 py-20 flex flex-wrap justify-center gap-6">
        {card.map((post, i) => (
          <div
            key={i}
            className="w-80 sm:w-96 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300"
          >
            <img
              className="rounded-lg h-52 w-full object-cover mb-4"
              src={post.img}
              alt={`Blog ${i}`}
            />
            <h2 className="text-lg font-semibold text-indigo-800">{post.topText}</h2>
            <div className="flex items-center text-gray-500 text-sm mt-2 mb-4">
              
            </div>
            <p className="text-sm text-gray-600">{post.bottomText}</p>
            <hr className="my-4" />
            <div className="flex justify-start items-center text-cyan-600 font-medium hover:underline cursor-pointer">
             
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-800 text-white py-12 text-center px-6 hover:bg-cyan-700 transition-all duration-700">
        <h3 className="text-2xl font-semibold">Have a Question About Software Solutions?</h3>
        <p className="mt-2">
          Our Calgary team is here to help. Reach out at <a href="tel:(403) 409-9269" className="underline">(403) 409-9269</a> or send us a message.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
