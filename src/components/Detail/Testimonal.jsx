import React from "react";

const dummyTestimonials = [
  {
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    name: "Stevie Tifft",
    avatar: "https://i.pravatar.cc/100?img=2",
    content:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
  },
  {
    name: "Stevie Tifft",
    avatar: "https://i.pravatar.cc/100?img=2",
    content:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
  },
  {
    name: "Stevie Tifft",
    avatar: "https://i.pravatar.cc/100?img=2",
    content:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
  },
];

const TestimonialCard = ({ name, avatar, content }) => (
  <div className="w-full mx-auto rounded-lg bg-white  p-5 text-gray-800 font-light  h-full">
    <div className="w-full flex mb-4 items-center">
      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
        <img src={avatar} alt={name} />
      </div>
      <div className="flex-grow pl-3">
        <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
      </div>
    </div>
    <div className="w-full">
      <p className="text-sm leading-tight">
        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
        {content}
        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="  flex items-center justify-start py-5">
      <div className="w-full  mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 items-start">
          {dummyTestimonials.map((testimonial, index) => (
            <div className=" w-full h-full" key={index}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
