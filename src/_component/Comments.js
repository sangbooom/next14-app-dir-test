import { delay } from "../_utils";

const Comments = async () => {
  const comments = await fetch(`${process.env.NEXT_PUBLIC_API_URL}comments`).then((res) => delay(res.json(), 4000));
  return (
    <div>
      {comments.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

export default Comments;
