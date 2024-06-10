import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log(type);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <h3 className="title">Implementation of screen size example</h3>
        <Size />
      </section>

      <section>
        <h3 className="title">Implementation of Timer example</h3>
        <CountDown />
      </section>

      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab ? { color: "green", backgroundColor: "violet" } : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Go to top
        </button>
      )}
    </>
  );
}

function Size() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <h2>Width: {width}</h2>
    </>
  );
}

function CountDown() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <>
      <h3>Countdown: {countdown}</h3>
    </>
  );
}
