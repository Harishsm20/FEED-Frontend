// components/BlogPost.jsx
import React,{useEffect, useState} from "react";
import { motion } from "framer-motion";

const BlogPost = ({ postId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [headImg, setHeadImg] = useState("");
  // const [subImages, setSubImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white dark:bg-[#0b1727] p-6 rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="text-black dark:text-white text-lg font-bold float-right"
        >
          ✕
        </button>

        <img
          src={headImg}
          alt="Blog Banner"
          className="w-full max-h-[300px] object-cover rounded mb-4"
        />

        <h2 className="text-[32px] font-bold mb-2">{title}</h2>
        <p className="text-lg opacity-80 whitespace-pre-line">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
