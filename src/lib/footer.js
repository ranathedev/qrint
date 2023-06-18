import FacebookIcon from "assets/facebook.svg";
import TwitterIcon from "assets/twitter.svg";
import LinkedInIcon from "assets/linkedIn.svg";
import GithubIcon from "assets/github.svg";
import LinktreeIcon from "assets/linktree.svg";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/ranathedev",
    icon: <FacebookIcon />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ranathedev/",
    icon: <LinkedInIcon />,
  },
  {
    name: "twitter",
    link: "https://twitter.com/ranathedev",
    icon: <TwitterIcon />,
  },
  {
    name: "github",
    link: "https://github.com/ranaintizar",
    icon: <GithubIcon />,
  },
  {
    name: "linktree",
    link: "https://linktr.ee/ranaintizar",
    icon: <LinktreeIcon />,
  },
];

const links = [
  { name: "Home", path: "/" },
  { name: "Reader", path: "/reader" },
  { name: "Generator", path: "/generator" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export { socials, links };
