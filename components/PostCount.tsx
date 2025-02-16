import { LABEL } from "../constants";

interface PostCountProps {
  count: number;
}

export default function PostCount({ count }: PostCountProps) {
  return (
    <section className="hero">
      <h1 className="posts-count">
        <span className="count">{count}</span> {LABEL.ARTICLES_POSTED}
      </h1>
    </section>
  );
}
