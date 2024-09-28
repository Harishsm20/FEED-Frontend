import React, { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editImage, setEditImage] = useState(null);

  // Function to handle adding a new post
  const addPost = () => {
    if (newPost.trim() || newImage) {
      setPosts([...posts, { text: newPost, image: newImage }]);
      setNewPost('');
      setNewImage(null);
    }
  };

  // Function to handle deleting a post
  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  // Function to handle editing a post
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(posts[index].text);
    setEditImage(posts[index].image);
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      const updatedPosts = posts.map((post, i) =>
        i === editIndex ? { text: editText, image: editImage } : post
      );
      setPosts(updatedPosts);
      setEditIndex(null);
      setEditText('');
      setEditImage(null);
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

  // Function to handle image edit
  const handleEditImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-[#beb243] bg-opacity-90 rounded-2xl shadow-lg">
        <h1 className="text-2xl text-white font-bold mb-4">CREATE FEED</h1>

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
          {posts.map((post, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              {editIndex === index ? (
                <div>
                  <textarea
                    className="w-full p-2 border rounded"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <input type="file" onChange={handleEditImageUpload} />
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <p className="border-4 p-1 text-[#f9f1cb] border-[#f9f1cb]">{post.text}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="mt-2 max-w-full h-auto rounded"
                    />
                  )}
                  <button
                    className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded text-sm font-semibold"
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 bg-opacity-80 text-white rounded size-fit font-semibold text-sm"
                    onClick={() => deletePost(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
