import Instagram from "../assets/instagram";
import Facebook from "../assets/facebook";
import SoundCloud from "../assets/soundcloud";
import BandCamp from "../assets/bandcamp";
import YouTube from "../assets/youtube";
import Spotify from "../assets/spotify";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Socials = ({
  socials,
}: {
  socials: { link: string; type: string }[];
}) => {
  const { getComponentStyles } = useContext(ThemeContext);
  const getSVG = (type: string) => {
    switch (type) {
      case "instagram":
        return Instagram;
      case "facebook":
        return Facebook;
      case "soundcloud":
        return SoundCloud;
      case "bandcamp":
        return BandCamp;
      case "youtube":
        return YouTube;
      case "spotify":
        return Spotify;
      default:
        return () => null;
    }
  };

  const ThemeStyles = getComponentStyles("socials");

  return (
    <div className="flex space-x-3 justify-center items-center my-4">
      {socials.map((social, index) => {
        const SVG = getSVG(social.type);
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <SVG className={`${ThemeStyles} transition duration-200`} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
