import { useRouter } from "next/router";
import PostForm from "../../../components/PostForm";
import { apiCreatePost } from "../../../helpers/api";
import { NAVIGATE, TOAST_MESSAGE } from "../../../constants";
import Toast from "../../../components/Toast";
import { useState } from "react";
import { IToastProps } from "../../../interfaces";
import { ToastVariants } from "../../../enums";

export default function CreatePost() {
  const router = useRouter();
  const [toast, setToast] = useState<IToastProps | null>();

  const handleCreate = async (data: { title: string; content: string }) => {
    apiCreatePost(data)
      .then((data) => {
        setToast({
          message: TOAST_MESSAGE.POST_CREATED,
          type: ToastVariants.SUCCESS,
        });
        setTimeout(() => {
          router.push(NAVIGATE.TO_HOME);
        }, 600);
      })
      .catch((e) => {
        setToast({
          message: TOAST_MESSAGE.ERROR_OCCURRED,
          type: ToastVariants.FAILURE,
        });
      });
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <PostForm onSubmit={handleCreate} />
    </>
  );
}
