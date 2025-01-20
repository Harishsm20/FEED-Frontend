import React, { useEffect, useState } from "react";
import { login1 } from "../assets";
import { Follow, SocialLinks, Bio } from "../components";
import { fetchProfile } from "../service/profileService.js";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setUserData(data.user);
        setProfileData(data.profile);
        // console.log(data)
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSave = (updatedProfile) => {
    setProfileData(updatedProfile);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Bio
        profileImg={login1}
        header = {profileData?.header || "Let's explore and create together!"}
        bioContent={profileData?.bio || "Welcome to my profile!"}
        initialFormData={{
          userName: profileData.userName || "",
          bio: profileData.bio || "",
          header : profileData.header || "",
          snapchat: profileData.socialLinks?.snapchat || "",
          linkedin: profileData.socialLinks?.linkedin || "",
          twitter: profileData.socialLinks?.twitter || "",
          instagram: profileData.socialLinks?.instagram || "",
        }}
        onSave={handleSave}
      />
      <SocialLinks
        snapchat={profileData?.socialLinks?.snapchat || ""}
        linkedin={profileData?.socialLinks?.linkedin || ""}
        twitter={profileData?.socialLinks?.twitter || ""}
        instagram={profileData?.socialLinks?.instagram || ""}
      />
      <Follow
        postCount={profileData?.postCount || 0}
        followers={profileData?.followers?.length || 0}
        following={profileData?.following?.length || 0}
      />
    </>
  );
};

export default Profile;
