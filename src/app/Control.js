"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>app/Control (client component)</h2>
      {new Date().getTime()}
      <ul>
        <li>
          <Link href="/create">create</Link>
        </li>
        {id ? (
          <>
            <li>
              <Link href={`/update/${id}`}>update</Link>
            </li>
            <li>
              <button
                onClick={async () => {
                  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
                    method: "DELETE",
                  });
                  await resp.json();
                  router.push("/");
                  router.refresh();
                }}
              >
                delete
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
