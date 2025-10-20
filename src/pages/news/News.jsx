import React from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Bookmark, BookMarked } from 'lucide-react';
const News = ({ data }) => {
  const {
    title,
    image_url,
    details,
    author,
    rating,
    total_view,
    tags,
  } = data;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="border rounded-2xl shadow-sm p-4 mb-6 bg-white hover:shadow-lg transition">
      {/* Author + Share */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-4">
             <button className="text-gray-500 hover:text-blue-500 ">
        
           <Bookmark /> 
        </button>
            <button className="text-gray-500 hover:text-blue-500 ">
        
          <FaShareAlt />
        </button>
       
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-2">
        {title}
      </h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 object-cover rounded-xl mb-3"
      />

      {/* Details */}
      <p className="text-gray-600 text-sm mb-3">
        {details.slice(0, 200)}...
        <span className="text-blue-500 cursor-pointer ml-1 hover:underline">
          Read More
        </span>
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer: Rating + Views */}
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "fill-current" : "opacity-30"} />
          ))}
          <span className="text-gray-600 ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
