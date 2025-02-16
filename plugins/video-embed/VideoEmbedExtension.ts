import { Node, mergeAttributes } from "@tiptap/core";

export const VideoEmbedExtension = Node.create({
  name: "videoEmbed",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      src: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe",
        getAttrs: (dom: any) => ({
          src: dom.getAttribute("src"),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["iframe", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ({ node }) => {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("width", "500");
      iframe.setAttribute("height", "400");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.src = node.attrs.src;

      const container = document.createElement("div");
      container.className = "video-embed";
      container.appendChild(iframe);

      return {
        dom: container,
      };
    };
  },
});
