import { Suspense } from "react";
import Comments from "../_component/Comments";
import Posts from "../_component/Posts";
import { delay } from "../_utils";

// SSG
export default async function Home() {
  const profile = await fetch(`${process.env.NEXT_PUBLIC_API_URL}profile`).then((res) => delay(res.json(), 4000));
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>app/page (server component)</h2>
      <p>hi {profile.name}</p>
      {new Date().getTime()}
      <Suspense fallback={<div>Posts loading...</div>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<div>Comments loading...</div>}>
        <Comments />
      </Suspense>
    </div>
  );
}
