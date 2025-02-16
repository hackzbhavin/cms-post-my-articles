import { formatDate } from "../helpers";
import { BUTTON, NAVIGATE } from "../constants";
import { useRouter } from "next/router";
import { IPostCardProps } from "../interfaces";

export default function PostCard({ postDetails, onDelete }: IPostCardProps) {
  const router = useRouter();

  const goToReadMore = () => {
    router.push(NAVIGATE.TO_GET_ONE_POST + postDetails?.slug);
  };

  return (
    <div className="post-item">
      <div className="post-item-left" onClick={goToReadMore}>
        <h2>{postDetails?.title.substring(0, 100) + "..."}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: postDetails?.content.substring(0, 100) + "...",
          }}
        />
        <p className="post-date">{formatDate(postDetails?.createdAt)}</p>
      </div>
      <div className="post-item-right">
        <button
          className="delete-post-btn"
          onClick={() => onDelete(postDetails?.slug)}
        >
          {BUTTON.REMOVE}
        </button>
      </div>
    </div>
  );
}
