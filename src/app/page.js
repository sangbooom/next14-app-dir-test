// SSG
export default function Home() {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>app/page (server component)</h2>
      {new Date().getTime()}
    </div>
  );
}
