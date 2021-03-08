import { FiFile } from "react-icons/fi";
export default {
  name: "project",
  type: "document",
  title: "Project",
  icon: FiFile,
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "bio",
      title: "Project Information",
      type: "body",
    },
    {
      name: "image_gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ name: "image", type: "image" }],
    },
  ],
};
