"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiGetOnePost } from "../../../helpers/api";
import PostPreview from "../../../components/PostPreview";
import { IPostProps } from "../../../interfaces";
import { LABEL, NAVIGATE } from "../../../constants";

export default function PostView() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<IPostProps | null>(null);

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

  if (!post) return <p>{LABEL.LOADING_TEXT}</p>;

  return (
    <PostPreview
      postDetails={post}
      showActions={true}
      onEdit={() => router.push(NAVIGATE.TO_EDIT_POST + slug)}
      onBack={() => router.back()}
    />
  );
}
