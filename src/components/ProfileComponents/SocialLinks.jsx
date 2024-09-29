const SocialLinks = ({ snapchat, linkedin, twitter, instagram }) => {
    return (
      <div className="mt-4 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Social Links</h3>
  
        {/* Social Links Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Conditionally Render Each Social Link Only If It's Provided */}
          
          {/* Snapchat */}
          {snapchat && (
            <a
              href={`https://www.snapchat.com/add/${snapchat}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white p-3 rounded-lg shadow hover:bg-gray-100"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg"
                alt="Snapchat"
                className="w-8 h-8 mr-3"
              />
              <span className="text-gray-800">@{snapchat}</span>
            </a>
          )}
  
          {/* LinkedIn */}
          {linkedin && (
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white p-3 rounded-lg shadow hover:bg-gray-100"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-8 h-8 mr-3"
              />
              <span className="text-gray-800">@{linkedin}</span>
            </a>
          )}
  
          {/* Twitter */}
          {twitter && (
            <a
              href={`https://www.twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white p-3 rounded-lg shadow hover:bg-gray-100"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
                alt="Twitter"
                className="w-8 h-8 mr-3"
              />
              <span className="text-gray-800">@{twitter}</span>
            </a>
          )}
  
          {/* Instagram */}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white p-3 rounded-lg shadow hover:bg-gray-100"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 mr-3"
              />
              <span className="text-gray-800">@{instagram}</span>
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default SocialLinks;
  