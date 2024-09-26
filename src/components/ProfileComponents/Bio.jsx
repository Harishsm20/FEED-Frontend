
const Bio = ({bioContent, profileImg}) => {
  return (
    <div className='mt-2 flex flex-col bg-gradient-to-b from-[#4a4737] to-[#b5ab58] p-8 rounded-lg'>

      {/* Bio content with header */}
      <div className='flex flex-row justify-between items-center'>
        {/* Left Side: Description */}
        <div className='flex-1 space-y-4'>
          <h1 className='text-4xl font-bold text-white'>
            Let's <span className='text-[#f9f1cb]'>explore</span> and <span className='text-[#f9f1cb]'>create</span> together!
          </h1>
          <p className='text-white text-lg'>
            {bioContent}
          </p>
        </div>

        {/* Right Side: Profile Image */}
        <div className='ml-8'>
          <img src={profileImg} alt='Profile' className='rounded-full w-40 h-40 border-4 border-[#f9f1cb] lg:hover:-translate-y-3 transition-transform duration-500' />
        </div>
      </div>

      {/* Follower/Following Section */}
      <div className='mt-6 grid grid-cols-3 gap-4 text-center text-white'>
        <div>
          <h3 className='text-xl font-semibold'>0</h3>
          <p>Posts</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>0</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>0</h3>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}

export default Bio
