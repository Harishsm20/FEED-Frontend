const SocialLinks = ({ snapchat, linkedin, twitter, instagram }) => {
  return (
    <div className="flex space-x-4 bg-[#b5ab58] pb-6">
      {/* Snapchat */}
      {snapchat && (
        <a
          href={`https://www.snapchat.com/add/${snapchat}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Icon */}
          <img
            src="https://img.icons8.com/?size=100&id=KrtKMa6Fduil&format=png&color=000000"
            alt="Snapchat"
            className="w-6 h-6"
          />
          {/* Hover Effect: Card Display with Snapchat ID */}
          <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
            <img
              src="https://img.icons8.com/?size=100&id=KrtKMa6Fduil&format=png&color=000000"
              alt="Snapchat"
              className="w-8 h-8"
            />
            <span className="text-gray-800">@{snapchat}</span>
          </div>
        </a>
      )}

      {/* LinkedIn */}
      {linkedin && (
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
          {/* Hover Effect: Card Display with LinkedIn ID */}
          <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <span className="text-gray-800">@{linkedin}</span>
          </div>
        </a>
      )}

      {/* Twitter */}
      {twitter && (
        <a
          href={`https://www.twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Icon */}
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--x-new-sign-logos-pack-icons-7651211.png?f=webp&w=256"
            alt="Twitter"
            className="w-6 h-6"
          />
          {/* Hover Effect: Card Display with Twitter ID */}
          <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--x-new-sign-logos-pack-icons-7651211.png?f=webp&w=256"
              alt="Twitter"
              className="w-8 h-8"
            />
            <span className="text-gray-800">@{twitter}</span>
          </div>
        </a>
      )}

      {/* Instagram */}
      {instagram && (
        <a
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-6 h-6"
          />
          {/* Hover Effect: Card Display with Instagram ID */}
          <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
            <span className="text-gray-800">@{instagram}</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
