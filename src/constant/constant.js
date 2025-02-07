import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";
import { SiUnsplash, SiPexels } from "react-icons/si";
import { MdShoppingCart } from "react-icons/md";

export const ABOUT_ME = {
  name: "Harsh Raghavani",
  description:
    "Web Developer, React JS, Next JS | Photographer, Creative Editor",
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshraghavani",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/harahraghavani",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/justaclick.24",
    icon: FaInstagram,
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/@justaclick_24",
    icon: SiUnsplash,
  },
  {
    name: "Pinterest",
    url: "https://in.pinterest.com/justaclick_24",
    icon: FaPinterest,
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com/@justaclick",
    icon: SiPexels,
  },
  {
    name: "Behance",
    url: "https://www.behance.net/harshraghvani",
    icon: FaBehance,
  },
  {
    name: "Digital Product",
    url: "https://filtergrade.com/product/dark-green-leaves-lightroom-preset-mobile-desktop",
    icon: MdShoppingCart,
  },
];
