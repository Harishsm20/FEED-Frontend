import React, { useEffect, useState } from "react";
import { login1 } from "../assets";
import { Bio, Follow, SocialLinks } from "../components";
import Edit from "../components/ProfileComponents/Edit";
import { fetchProfile } from "../service/profileService.js";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setUserData(data.user);
        setProfileData(data.profile);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = (updatedProfile) => {
    setProfileData(updatedProfile);
    setIsEditing(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <button
        onClick={handleEditToggle}
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
      >
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>

      {isEditing ? (
        <Edit
          initialFormData={{
            userName: profileData.userName || "",
            bio: profileData.bio || "",
            snapchat: profileData.socialLinks?.snapchat || "",
            linkedin: profileData.socialLinks?.linkedin || "",
            twitter: profileData.socialLinks?.twitter || "",
            instagram: profileData.socialLinks?.instagram || "",
          }}
          onSave={handleSave}
        />
      ) : (
        <>
          <Bio profileImg={login1} bioContent={profileData?.bio || "Welcome to my profile!"} />
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
      )}
    </>
  );
};

export default Profile;
