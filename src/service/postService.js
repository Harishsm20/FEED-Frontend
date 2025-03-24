// src/service/postService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api/blog';

// Create Blog / Post
export const createBlog = async (blogData) => {
    try {
      const response = await axios.post(`${API_URL}/create`, blogData, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };
  
// Delete blog
export const deleteBlog = async (blogId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/delete/${blogId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || "Failed to delete blog";
    }
  };
  

// Get blogs by Tag
export const getBlogsByTag = async (tagName) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/search/tag/${tagName}`);
        return response.data;
    }
    catch (error){
        throw error.response?.data || "Failed to fetch by Tag"
    }
}