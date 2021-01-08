function Post({ post }) {
  // Render post...
  return (
    <div>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  //    const res = await fetch('https://.../posts')
  //    const posts = await res.json()

  const posts = [
    {
      id: "1",
      title: "Post - 1",
    },
    {
      id: "2",
      title: "Post - 2",
    },
    {
      id: "3",
      title: "Post - 3",
    },
  ];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //   const res = await fetch(`https://.../posts/${params.id}`);
  //   const post = await res.json();

  const posts = [
    {
      id: "1",
      title: "Post - 1",
    },
    {
      id: "2",
      title: "Post - 2",
    },
    {
      id: "3",
      title: "Post - 3",
    },
  ];

  const post = posts.find((post) => post.id == params.id);

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
