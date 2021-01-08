// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
type Post = {
  id: string;
  title: string;
};

type Posts = Post[];

type BlogInput = {
  posts: Posts;
};
function Blog({ posts }: BlogInput) {
  return (
    <ul>
      {posts.map((post: Post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const posts = [
    {
      id: 1,
      title: "OK",
    },
    {
      id: 2,
      title: "ZXC",
    },
    {
      id: 3,
      title: "ASD",
    },
    {
      id: 4,
      title: "QWE",
    },
  ];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
