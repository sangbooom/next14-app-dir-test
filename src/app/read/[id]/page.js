import Counter from "../../../_component/Counter";
// dynamic function 썼으니까 동적 렌더링
export default async function Read({ params }) {
  const id = params.id;
  const topic = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, { cache: "no-cache" }).then((res) =>
    res.json()
  );

  return (
    <div style={{ border: "1px solid black" }}>
      <h2>app/read/[id] (server component)</h2>
      {new Date().getTime()}
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
      <Counter />
    </div>
  );
}
