import { login1 } from "../assets";
import { Bio, Follow, SocialLinks } from "../components";

const Profile = () => {
  return (
    <>
      <Bio profileImg={login1} bioContent={"Hello and welcome! I'm Harish, your guide through the realms of content creation and storytelling. Join me on a journey of creativity where ideas come to life."} />
      <SocialLinks
        snapchat="johnhenry"
        linkedin="johnhenry123"
        twitter="johnhenry_tw"
        instagram="johnhenry_ig"
      />      
      <Follow postCount={0} followers={100} following={100}/>
    </>
  )
}

export default Profile;
