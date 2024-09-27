import React from 'react'

const Follow = ({postCount,followers, following}) => {
  return (
    <>
    {/*Followers and Following contents */}
    <div className='grid grid-cols-3 justify-items-center text-center mt-6 mb-5'>
        <div className=''>
        <div>
            {postCount}
        </div>
        
        <div>
            Posts
        </div>
        </div>

        <div className=''>
        <div>
            {followers}
        </div>

        <div>
            Followers
        </div>
        </div>

        <div className=''>
        <div>
            {following}
        </div>

        <div>
            Following
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Follow
