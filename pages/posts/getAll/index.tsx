import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import { apiGetAllPost, apiDeletePost } from "../../../helpers/api";
import { LABEL, TOAST_MESSAGE } from "../../../constants";
import DeletePopup from "../../../components/DeletePopup";
import PostCard from "../../../components/PostCard";
import PostCount from "../../../components/PostCount";
import { IPostProps, IToastProps } from "../../../interfaces";
import Toast from "../../../components/Toast";
import { ToastVariants } from "../../../enums";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<IToastProps | null>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await apiGetAllPost();
      if (data) setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  const openDeletePopup = (slug: string) => {
    setPostToDelete(slug);
    setIsDeletePopupOpen(true);
  };

  const closeDeletePopup = () => {
    setPostToDelete(null);
    setIsDeletePopupOpen(false);
  };

  const handleDelete = async () => {
    if (postToDelete) {
      try {
        await apiDeletePost(postToDelete);
        fetchPosts();
        setToast({
          message: TOAST_MESSAGE.POST_DELETED,
          type: ToastVariants.SUCCESS,
        });
      } catch (err) {
        console.error("Error deleting post:", err);
      } finally {
        closeDeletePopup();
      }
    }
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
      <Navbar />
      <main className="homepage">
        <PostCount count={posts.length} />

        <section className="post-list">
          {posts?.length > 0 ? (
            posts?.map((postDetails: IPostProps) => (
              <PostCard
                key={postDetails.id}
                postDetails={postDetails}
                onDelete={openDeletePopup}
              />
            ))
          ) : (
            <p>{LABEL.NO_POSTS_AVAILABLE}</p>
          )}
        </section>
      </main>

      <DeletePopup
        isOpen={isDeletePopupOpen}
        onClose={closeDeletePopup}
        onConfirm={handleDelete}
      />
    </>
  );
}
