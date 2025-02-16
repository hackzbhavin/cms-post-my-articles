import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import { apiGetAllPost, apiDeletePost } from "../../../helpers/api";
import { LABEL } from "../../../constants";
import DeletePopup from "../../../components/DeletePopup";
import PostCard from "../../../components/PostCard";
import PostCount from "../../../components/PostCount";
import { IPostProps } from "../../../interfaces";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

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
      } catch (err) {
        console.error("Error deleting post:", err);
      } finally {
        closeDeletePopup();
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="homepage">

        <PostCount count={posts.length} />

        <section className="post-list">
          {posts?.length > 0 ? (
            posts?.map((postDetails: IPostProps) => (
              <PostCard key={postDetails.id} postDetails={postDetails} onDelete={openDeletePopup} />
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
