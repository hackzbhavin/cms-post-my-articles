import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostForm from "../../../components/PostForm";
import { apiEditPost, apiGetOnePost } from "../../../helpers/api";
import { LABEL, NAVIGATE } from "../../../constants";

export default function EditPost() {
  const [post, setPost] = useState<{ title: string; content: string } | null>(
    null
  );
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      apiGetOnePost(slug).then((data) => {
        if (data) {
          setPost(data);
        }
      }).catch((err) => console.error("Error fetching post:", err));
    }
  }, [slug]);

  const handleUpdate = async (data: { title: string; content: string }) => {
    if (slug) {
      apiEditPost(slug, data).then(() => {
        router.push(NAVIGATE.TO_HOME);
      });
    }
  };

  return post ? (
    <PostForm post={post} onSubmit={handleUpdate} />
  ) : (
    <p>{LABEL.LOADING_TEXT}</p>
  );
}
