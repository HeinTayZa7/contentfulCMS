import {
  FaUser,
  FaUsers,
  FaFileAlt,
  FaHandshake,
  FaNewspaper,
  FaBookReader,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { IoMdMail } from "react-icons/io";

export const iconMap: Record<string, IconType> = {
  user: FaUser,
  users: FaUsers,
  file: FaFileAlt,
  handshake: FaHandshake,
  newspaper: FaNewspaper,
  newspaperclipping: FaNewspaper,
  bookreader: FaBookReader,
  phone: FaPhone,
  email: IoMdMail,
  location: FaLocationArrow,
};
