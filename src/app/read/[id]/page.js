export default async function Read(props) {
  const id = props.params.id;
  const topic = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, { cache: "no-cache" }).then((res) =>
    res.json()
  );

  return (
    <div style={{ border: "1px solid black" }}>
      <h2>app/read/[id] (server component)</h2>
      {new Date().getTime()}
      <h2>{topic.title}</h2>
      {topic.body}
    </div>
  );
}
