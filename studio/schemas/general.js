import { FiSettings } from "react-icons/fi";
export default {
  name: "general",
  type: "document",
  title: "General",
  icon: FiSettings,
  fields: [
    {
      name: "big_logo",
      title: "Big Logo",
      type: "image",
    },
    {
      name: "small_logo",
      title: "Small Logo",
      type: "image",
    },
  ],
};
