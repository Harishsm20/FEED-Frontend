const SocialLinks = ({ snapchat, linkedin, twitter, instagram }) => {
  return (
    <div className="flex space-x-4 bg-[#b5ab58] pb-6 pl-5">
      {/* Snapchat */}
      {snapchat && (
        <a
          href={`https://www.snapchat.com/add/${snapchat}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center"
        >
          <div className="group flex items-center">
            {/* Icon */}
            <img
              src="https://img.icons8.com/?size=100&id=KrtKMa6Fduil&format=png&color=000000"
              alt="Snapchat"
              className="w-8 h-8"
            />
            {/* Hover Effect: Card Display with Snapchat ID */}
            <div className="absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 w-max pointer-events-none">
              <img
                src="https://img.icons8.com/?size=100&id=KrtKMa6Fduil&format=png&color=000000"
                alt="Snapchat"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-semibold">@{snapchat}</span>
            </div>
          </div>
        </a>
      )}

      {/* LinkedIn */}
      {linkedin && (
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center"
        >
          <div className="group flex items-center">
            {/* Icon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            {/* Hover Effect: Card Display with LinkedIn ID */}
            <div className="absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 w-max pointer-events-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-semibold">@{linkedin}</span>
            </div>
          </div>
        </a>
      )}

      {/* Twitter */}
      {twitter && (
        <a
          href={`https://www.twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center"
        >
          <div className="group flex items-center">
            {/* Icon */}
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--x-new-sign-logos-pack-icons-7651211.png?f=webp&w=256"
              alt="Twitter"
              className="w-8 h-8"
            />
            {/* Hover Effect: Card Display with Twitter ID */}
            <div className="absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 w-max pointer-events-none">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--x-new-sign-logos-pack-icons-7651211.png?f=webp&w=256"
                alt="Twitter"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-semibold">@{twitter}</span>
            </div>
          </div>
        </a>
      )}

      {/* Instagram */}
      {instagram && (
        <a
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center"
        >
          <div className="group flex items-center">
            {/* Icon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
            {/* Hover Effect: Card Display with Instagram ID */}
            <div className="absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 w-max pointer-events-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8"
              />
              <span className="text-gray-800 font-semibold">@{instagram}</span>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
