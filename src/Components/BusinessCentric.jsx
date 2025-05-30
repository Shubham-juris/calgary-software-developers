import React from "react";

const data = [
  {
    img: "/Business-Centric-pics/7655685.png",
    title: "Enterprise Software for Calgary Businesses",
  },
  {
    img: "/Business-Centric-pics/12372208.png",
    title: "Custom Software Development",
  },
  {
    img: "/Business-Centric-pics/5608615.png",
    title: "Mobile App Development",
  },
  {
    img: "/Business-Centric-pics/2103751.png",
    title: "QA Automation",
  },
  {
    img: "/Business-Centric-pics/9732077.png",
    title: "Cloud Optimization",
  },
  {
    img: "/Business-Centric-pics/4744315.png",
    title: "Cybersecurity Solutions",
  },
  {
    img: "/Business-Centric-pics/4529976.png",
    title: "AI-Powered Applications",
  },
  {
    img: "/Business-Centric-pics/6974613.png",
    title: "Blockchain Integration",
  },
];

function BusinessCentric() {
  return (
    <div className="bg-slate-50 text-slate-800 px-4 sm:px-10 py-14">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Over <span className="text-indigo-600">5 Years</span> of Business-Centric Tech Expertise in Calgary
        </h2>
        <p className="text-base sm:text-xl mt-4 text-gray-600">
          Building reliable, scalable software solutions tailored to Calgary's unique business environment.
        </p>
      </div>

      {/* Service Cards */}
      <div className="py-16 flex flex-wrap justify-center items-center gap-12 sm:gap-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="group h-64 w-48 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 duration-300 flex flex-col justify-center items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <p className="font-semibold text-slate-700">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="bg-white mt-12 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-6 sm:p-12">
        <div className="sm:w-1/2">
          <h3 className="text-3xl font-extrabold text-indigo-700 mb-4">Digital Transformation</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Calgary is evolving into a digital-first city, with local businesses seeking smarter and faster ways to grow. Our team specializes in enabling digital transformation by integrating AI, cloud, mobile, and analytics into your business model. We help you modernize your technology stack and future-proof your operations—whether you're a startup or an established enterprise.
          </p>
        </div>
        <div className="sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
          <img
            src="/Business-Centric-pics/images-3.jpg"
            alt="Digital Transformation"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessCentric;
