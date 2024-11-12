import React, { useState, useEffect } from 'react';
import './Home.css';
import Banner from './Banner';
import Blog from './Blog';
import axios from './axios';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/');
        if (response.status === 200) {
          setBlogs(response.data.data); // Assuming the response contains 'data' with the blogs
        } else {
          setError(response.data.message || 'An error occurred');
        }
      } catch (err) {
        // If the Axios request fails (e.g., network issue, 500 server error, etc.)
        console.error('Error fetching data:', err);
        setError(err.message || 'Something went wrong while fetching data');
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="home">
      <Banner />
      <div className="home__blogs">
        {blogs?.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
