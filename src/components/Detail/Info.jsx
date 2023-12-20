import { Star } from "@mui/icons-material";
import React from "react";
import Testimonials from "./Testimonal";
import { Divider } from "@mui/joy";

const dummyData = {
  listing: {
    title: "Cozy Beachfront Studio Apartment",
    location: "Santa Monica, California",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 150,
    description:
      "Enjoy the ocean breeze and stunning sunsets from this charming studio apartment, just steps from the beach. Relax on the private balcony, cook in the fully equipped kitchen, and explore the vibrant Santa Monica scene.",
    host: {
      name: "Sarah Jones",
      avatarUrl: "https://picsum.photos/50/50",
    },
    photos: [
      "https://picsum.photos/600/300?image=100",
      "https://picsum.photos/600/300?image=101",
      "https://picsum.photos/600/300?image=102",
    ],
  },
  reviews: [
    {
      author: "John Doe",
      rating: 5,
      text: "Amazing place! The view was breathtaking and Sarah was a wonderful host.",
    },
    {
      author: "Jane Smith",
      rating: 4,
      text: "Great location and clean apartment. Would definitely recommend!",
    },
  ],
};

export default function Info() {
  const { listing } = dummyData;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mt-2"></div>
      <div className="md:flex md:space-x-6 mt-4">
        <div className="md:w-1/2">
          <h4 className="text-2xl font-bold">{listing.title}</h4>
          <div className="flex items-center mt-1 text-gray-600">
            <span className="mr-1">{listing.location}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p>{listing.description}</p>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Guests</p>
              <p className="text-md">{listing.guests} people</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Bedrooms</p>
              <p className="text-md">{listing.bedrooms}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Bathrooms</p>
              <p className="text-md">{listing.bathrooms}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
