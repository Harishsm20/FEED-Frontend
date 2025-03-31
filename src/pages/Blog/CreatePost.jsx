import React, { useState, useEffect } from 'react';
import { createBlog, deleteBlog, getBlogsByTag } from '../../service/blogService';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editImage, setEditImage] = useState(null);
  const [tag, setTag] = useState('');

  // Fetch posts by tag when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (tag) {
          const fetchedPosts = await getBlogsByTag(tag);
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [tag]);

  // Function to handle adding a new post
  const addPost = async () => {
    if (newPost.trim() || newImage) {
      try {
        const blogData = {
          title: 'New Blog Post', // You can replace this with a dynamic title
          description: newPost,
          headImage: newImage,
          subImages: [],
          tags: tag ? [tag] : []
        };
        const createdPost = await createBlog(blogData);
        setPosts([...posts, createdPost]);
        setNewPost('');
        setNewImage(null);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  // Function to handle deleting a post
  const handleDeletePost = async (postId) => {
    try {
      await deleteBlog(postId);
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-[#beb243] bg-opacity-90 rounded-2xl shadow-lg">
        <h1 className="text-2xl text-white font-bold mb-4">CREATE FEED</h1>

        {/* Select Tag */}
        <input
          type="text"
          placeholder="Enter tag to filter posts..."
          className="w-full p-2 mb-4 border rounded-xl"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        {/* Add New Post */}
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded-xl"
            placeholder="Add a new post..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <input type="file" onChange={handleImageUpload} />
          <button
            className="mt-2 px-4 py-2 bg-white text-[#beb243] rounded-2xl hover:bg-[#beb243] hover:text-white transition duration-500"
            onClick={addPost}
          >
            Add Post
          </button>
        </div>

        {/* Display Posts */}
        <div>
          {posts.map((post) => (
            <div key={post._id} className="mb-4 p-4 border rounded">
              <div>
                <p className="border-4 p-1 text-[#f9f1cb] border-[#f9f1cb]">{post.description}</p>
                {post.headImage && (
                  <img
                    src={post.headImage}
                    alt="Post"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
                <button
                  className="px-4 py-2 bg-red-500 bg-opacity-80 text-white rounded size-fit font-semibold text-sm"
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
