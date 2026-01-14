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
import { PiNewspaperClippingBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

export const iconMap: Record<string, IconType> = {
  user: FaUser,
  users: FaUsers,
  file: FaFileAlt,
  handshake: FaHandshake,
  newspaper: FaNewspaper,
  newspaperclipping: PiNewspaperClippingBold,
  bookreader: FaBookReader,
  phone: FaPhone,
  email: IoMdMail,
  location: FaLocationArrow,
  worker: GrUserWorker,
  document: IoDocumentTextOutline,
  people: BsPeopleFill,
};
