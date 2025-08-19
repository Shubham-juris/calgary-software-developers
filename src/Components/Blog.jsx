import React, { useEffect } from "react";
import Footer from "./Footer";

const card = [
  {
    img: "/Blog-jpg/01-1.png",
    topText: "Top Programming Languages in 2025",
    bottomText:
      "As Calgary’s tech ecosystem evolves, developers are embracing languages like Rust, Go, and TypeScript to build scalable, modern applications.",
  },
  {
    img: "/Blog-jpg/01.png",
    topText: "Why Calgary Is a Hotspot for Software Startups",
    bottomText:
      "Discover why tech entrepreneurs are choosing Calgary, with its skilled workforce, growing VC interest, and innovation-friendly policies.",
  },
  {
    img: "/Blog-jpg/10-Information-Technology-Audit-Report-Samples-Templates-PDF-Word.jpg",
    topText: "Scaling Agile Teams: A Developer’s Guide",
    bottomText:
      "Learn how our Calgary-based teams use Agile methodologies to ship high-quality software faster and foster better team collaboration.",
  },
  {
    img: "/Blog-jpg/about-1.jpg",
    topText: "How to Get Hired at a Top Software Company",
    bottomText:
      "Tips from our recruiters and developers on how to land a role at leading software companies in Alberta’s growing tech industry.",
  },
  {
    img: "/Blog-jpg/banner-finance.jpg",
    topText: "Cost-Effective DevOps Practices for Small Teams",
    bottomText:
      "DevOps doesn't have to be expensive. Here’s how Calgary-based teams are implementing CI/CD pipelines on a budget.",
  },
  {
    img: "/Blog-jpg/banner2.jpg",
    topText: "Building with AI: Practical Use Cases in 2025",
    bottomText:
      "AI isn’t just hype. From customer support to code generation, here’s how software firms in Calgary are making AI work.",
  },
  {
    img: "/Blog-jpg/Requirement.png",
    topText: "Cloud Migration Pitfalls & How to Avoid Them",
    bottomText:
      "If you're planning to migrate to the cloud, learn from these common mistakes we’ve seen with companies across Western Canada.",
  },
  {
    img: "/Blog-jpg/service-detail.jpg",
    topText: "Crafting Better User Experiences in SaaS",
    bottomText:
      "UX is critical to software success. Discover how our Calgary team uses Figma, user testing, and design systems to get it right.",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px]">
        <img
          src="/Blog-jpg/Our-Blog (2).jpg"
          className="w-full h-full object-cover brightness-75"
          alt="Blog Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold">Our Blog</h1>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300 flex flex-col"
          >
            <img
              className="rounded-t-lg h-52 w-full object-cover"
              src={post.img}
              alt={`Blog ${i}`}
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-indigo-800">
                {post.topText}
              </h2>
              <p className="text-sm text-gray-600 mt-3 flex-grow">
                {post.bottomText}
              </p>
              <hr className="my-4" />
              
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-800 text-white py-12 px-6 text-center hover:bg-cyan-700 transition-all duration-700">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">
            Have a Question About Software Solutions?
          </h3>
          <p className="mt-2">
            Our Calgary team is here to help. Reach out at{" "}
            <a href="tel:(403) 409-9268" className="underline">
              (403) 409-9268
            </a>{" "}
            or send us a message.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
