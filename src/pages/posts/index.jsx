import { useEffect, useState } from "react";

function Post({ title, body }) {
  return (
    <div className="Post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resInJSON) => {
        setPosts(resInJSON);
      });
  }, [count]);

  return (
    <div>
      <h1>Posts</h1>
      <div onClick={() => setCount(count + 1)}>Click to refresh list</div>
      <div>
        {posts.map((post) => (
          <Post title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
