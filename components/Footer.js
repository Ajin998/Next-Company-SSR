import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className="social-media-links">
      <p>Copyright @2021 Ajin Varghese</p>
      <a href="https://twitter.com/contentstack">
        <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> <YouTubeIcon />
      </a>
      <style jsx>{`
        .social-media-links {
          display: flex;
          flex-direction: column;
          width: 50%;
          margin: auto;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Footer;
