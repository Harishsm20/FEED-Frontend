import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Edit from "./Edit";

const Bio = ({ bioContent, header, profileImg, initialFormData, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  if (isEditing) {
    return (
      <Edit
        initialFormData={initialFormData}
        profileImg={profileImg}
        onSave={(updatedProfile) => {
          onSave(updatedProfile);
          setIsEditing(false);
        }}
      />
    );
  }

  return (
    <div className="mt-2 flex flex-col bg-gradient-to-b from-[#4a4737] to-[#b5ab58] p-8 rounded-t-lg">
      {/* Profile Image */}
      <div
        className="relative mx-auto mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-[#f9f1cb] lg:hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
          onClick={handleEditToggle}
        />
        {isHovered && (
          <FaEdit
            onClick={handleEditToggle}
            className="absolute bottom-2 right-2 text-grey-500 p-2 rounded-full shadow cursor-pointer"
            size={24} // Icon size
          />
        )}
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        {header}
      </h1>

      {/* Bio */}
      <p className="text-white text-lg text-center">{bioContent}</p>
    </div>
  );
};

export default Bio;
