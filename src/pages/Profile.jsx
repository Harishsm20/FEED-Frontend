import React, { useEffect, useState } from "react";
import { login1 } from "../assets";
import { Follow, SocialLinks, Bio } from "../components";
import { fetchProfile } from "../service/profileService.js";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setUserData(data.user);
        setProfileData(data.profile);
        setProfileImage(data.imageUrl);

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
    <div className="flex flex-col lg:flex-row justify-between w-full p-6 bg-gray-100">
      {/* Left Section: Social Links */}
      <div className="lg:w-[30%] flex flex-col  p-4 bg-white rounded-lg shadow">
      <Bio
          profileImg={profileImage}
          header={profileData?.header || "Let's explore and create together!"}
          bioContent={profileData?.bio || "Welcome to my profile!"}
          initialFormData={{
            userName: profileData.userName || "",
            bio: profileData.bio || "",
            header: profileData.header || "",
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


      </div>

      {/* Right Section: Bio */}
      <div className="mt-6 lg:mt-0 lg:w-[60%] bg-white rounded-lg shadow p-4 lg:ml-6">
      <Follow
          postCount={profileData?.posts || 0}
          followers={profileData?.followers || 0}
          following={profileData?.following || 0}
        />
      </div>
    </div>
  );
};

export default Profile;
