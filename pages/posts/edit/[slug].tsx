import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostForm from "../../../components/PostForm";
import { apiEditPost, apiGetOnePost } from "../../../helpers/api";
import { LABEL, NAVIGATE, TOAST_MESSAGE } from "../../../constants";
import { IToastProps } from "../../../interfaces";
import { ToastVariants } from "../../../enums";
import Toast from "../../../components/Toast";

export default function EditPost() {
  const [post, setPost] = useState<{ title: string; content: string } | null>(
    null
  );
  const router = useRouter();
  const { slug } = router.query;
  const [toast, setToast] = useState<IToastProps | null>();

  useEffect(() => {
    if (slug) {
      apiGetOnePost(slug)
        .then((data) => {
          if (data) {
            setPost(data);
          }
        })
        .catch((err) => console.error("Error fetching post:", err));
    }
  }, [slug]);

  const handleUpdate = async (data: { title: string; content: string }) => {
    if (slug) {
      apiEditPost(slug, data).then(() => {
        setToast({
          message: TOAST_MESSAGE.POST_EDITED,
          type: ToastVariants.SUCCESS,
        });
        setTimeout(() => {
          router.push(NAVIGATE.TO_HOME);
        }, 600);
      });
    }
  };

  return post ? (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <PostForm post={post} onSubmit={handleUpdate} />
    </>
  ) : (
    <p>{LABEL.LOADING_TEXT}</p>
  );
}
