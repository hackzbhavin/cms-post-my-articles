import { useRouter } from "next/router";
import PostForm from "../../../components/PostForm";
import { apiCreatePost } from "../../../helpers/api";
import { NAVIGATE } from "../../../constants";

export default function CreatePost() {
  const router = useRouter();

  const handleCreate = async (data: { title: string; content: string }) => {
    apiCreatePost(data)
      .then((data) => {
        router.push(NAVIGATE.TO_HOME);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <PostForm onSubmit={handleCreate} />;
}
