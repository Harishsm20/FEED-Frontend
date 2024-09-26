import { login1 } from "../assets";
import { Bio } from "../components";

const Profile = () => {
  return (
    <>
      <Bio profileImg={login1} bioContent={"Hello and welcome! I'm Harish, your guide through the realms of content creation and storytelling. Join me on a journey of creativity where ideas come to life."} />
    </>
  )
}

export default Profile;
