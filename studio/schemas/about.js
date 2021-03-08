import { FiUser } from "react-icons/fi";
export default {
  name: "about",
  type: "document",
  title: "About",
  icon: FiUser,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profile_picture",
      title: "Profile Picture",
      type: "image",
    },
    {
      name: "bio",
      title: "About Me",
      type: "body",
    },
  ],
};
