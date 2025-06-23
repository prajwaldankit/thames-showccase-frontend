import { useEffect, useState } from "react";

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
	}, []);

	return (
		<div>
			<h1>Posts</h1>
			<div onClick={() => setCount(count + 1)}>Click to refresh list</div>
			<div>
				{posts.map((post) => (
					<li>{post.id}</li>
				))}
			</div>
		</div>
	);
}

export default Posts;
