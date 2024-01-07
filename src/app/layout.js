import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "WEB tutorial",
  description: "Generated by egoing",
};

export const dynamic = "force-dynamic";
// export const revalidate = false
export default async function RootLayout({ children }) {
  const topics = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}topics`
    // { cache: "no-cache" }
  ).then((res) => res.json());

  return (
    <html>
      <body style={{ border: "1px solid black" }}>
        <h1>
          <div>app/layout (server component)</div>
          <Link prefetch={false} href="/">
            GO TO HOME
          </Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link prefetch={false} href={`/read/${topic.id}`}>
                  read/{topic.id}
                </Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control></Control>
      </body>
    </html>
  );
}
