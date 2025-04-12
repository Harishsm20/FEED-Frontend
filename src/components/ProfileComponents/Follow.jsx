// components/Follow.jsx
import React from 'react';
import PostCard from '../post/PostCard'; 
import { BlogPost } from '../../pages';

const Follow = ({ postCount, followers, following, posts }) => {
  console.log(posts)
  return (
    <>
      {/* Followers / Following counts */}
      <div className='grid grid-cols-3 justify-items-center text-center p-2 mb-5 border-4 border-[#f0e6df]'>
        <div>
          <div>{postCount}</div>
          <div>Posts</div>
        </div>
        <div>
          <div>{followers}</div>
          <div>Followers</div>
        </div>
        <div>
          <div>{following}</div>
          <div>Following</div>
        </div>
      </div>

      {/* Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            headImg={post.headImageUrl}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      {/* BlogPost Modal
      {selectedPost && (
        <BlogPost
          title={selectedPost.title}
          description={selectedPost.description}
          headImg={selectedPost.headImageUrl}
          onClose={() => setSelectedPost(null)}
        />
      )} */}
    </>
  );
};

export default Follow;
