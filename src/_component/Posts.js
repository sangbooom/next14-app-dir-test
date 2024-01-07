import { delay } from "../_utils";

const Posts = async () => {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`).then((res) => delay(res.json(), 3000));
  return (
    <div>
      {posts.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

export default Posts;
