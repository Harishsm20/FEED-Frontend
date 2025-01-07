import React, { useEffect, useState } from "react";
import { login1 } from "../assets";
import { Bio, Follow, SocialLinks } from "../components";
import axios from "axios";
import Edit from "../components/ProfileComponents/Edit";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profile/me", { withCredentials: true });
        const { user, profile } = response.data;
        
        setUserData(user);
        setProfileData(profile);
        setFormData({
          userName: profile.userName,
          bio: profile.bio,
          snapchat: profile.socialLinks.snapchat || "",
          linkedin: profile.socialLinks.linkedin || "",
          twitter: profile.socialLinks.twitter || "",
          instagram: profile.socialLinks.instagram || "",
        });
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        "/api/profile/me",
        { bio: formData.bio, socialLinks: formData },
        { withCredentials: true }
      );
      setProfileData(response.data.profile);
      setIsEditing(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : "An error occurred while saving");
    }
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
          formData={formData}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
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
