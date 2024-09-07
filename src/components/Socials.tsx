import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import soundcloud from "../assets/soundcloud.svg";
import bandcamp from "../assets/bandcamp.svg";
import youtube from "../assets/youtube.svg";
import spotify from "../assets/spotify.svg";

const Socials = ({
  socials,
}: {
  socials: { link: string; type: string }[];
}) => {
  const getSVG = (type: string) => {
    switch (type) {
      case "instagram":
        return instagram;
      case "facebook":
        return facebook;
      case "soundcloud":
        return soundcloud;
      case "bandcamp":
        return bandcamp;
      case "youtube":
        return youtube;
      case "spotify":
        return spotify;
      default:
        return "";
    }
  };

  return (
    <div className="flex space-x-3 justify-center items-center my-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={getSVG(social.type)}
            alt={social.type}
            className="hover:scale-[.95] transition duration-200"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
