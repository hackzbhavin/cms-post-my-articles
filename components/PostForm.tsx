import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { BUTTON, LABEL } from "../constants";
import { Button } from "./Button";
import PostPreview from "./PostPreview";
import { VideoEmbedExtension } from "../plugins/video-embed/VideoEmbedExtension";
import { getEmbedUrl } from "../helpers";
import { ButtonVariants } from "../enums";

interface PostFormProps {
  post?: { title: string; content: string };
  onSubmit: (data: { title: string; content: string }) => void;
}

export default function PostForm({ post, onSubmit }: PostFormProps) {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, VideoEmbedExtension],
    content: post?.content || "<p>Write something...</p>",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) return <p>{LABEL.LOADING_TEXT}</p>;

  const renderForm = () => {
    return (
      <div className="custom-form">
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ title, content });
          }}
        >
          <h2 className="form-title">
            {post ? LABEL.EDIT_POST : LABEL.CREATE_POST}
          </h2>

          <div className="form-block">
            <label className="form-label">
              {LABEL.TITLE} <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-input"
              aria-required="true"
            />
          </div>

          <div className="form-block">
            <label className="form-label">{LABEL.CONTENT}</label>
            <div className="editor-container">
              <div className="toolbar">
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  <b>B</b>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  <i>I</i>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const url = prompt(LABEL.ENTER_VIDEO_URL);
                    if (url) {
                      editor
                        .chain()
                        .focus()
                        .insertContent(
                          `<center><iframe width="500" height="400" src=${getEmbedUrl(
                            url
                          )} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><center>`
                        )
                        .run();
                    }
                  }}
                >
                  📹 Embed Video
                </button>
              </div>

              <EditorContent editor={editor} className="editor" required />
            </div>
          </div>

          <div className="form-footer">
            <Button
              textLabel={BUTTON.PREVIEW_MODE}
              isDisabled={title == ""}
              variant={ButtonVariants.TERTIARY}
              onPress={() => {
                setIsPreviewMode(true);
              }}
            />
            <Button
              textLabel={BUTTON.SAVE_CHANGES}
              isDisabled={title == ""}
              variant={ButtonVariants.PRIMARY}
              onPress={() => {}}
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  };

  const renderPreview = () => {
    return (
      <div className="preview-post-form">
        <PostPreview
          postDetails={{
            id: "",
            slug: "",
            title: title,
            content: content,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }}
          showActions={true}
          isPreviewMode={true}
          onBack={() => {
            setIsPreviewMode(false);
          }}
        />
      </div>
    );
  };

  return (
    <div className="add-post-container">
      {!isPreviewMode && renderForm()}
      {isPreviewMode && renderPreview()}
    </div>
  );
}
