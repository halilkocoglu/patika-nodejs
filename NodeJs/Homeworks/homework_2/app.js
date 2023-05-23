const post = [
  {
    postId: "1",
    postMessage: "post1",
  },
  {
    postId: "2",
    postMessage: "post2",
  },
  {
    postId: "3",
    postMessage: "post3",
  },
  {
    postId: "4",
    postMessage: "post4",
  },
];

const listPosts = () => {
  post.map((post) => {
    console.log(post.postId, post.postMessage);
  });
};

const addPost = (id) => {
  post.push({ postId: id, postMessage: `post${id}` });
  console.log("new post list:");
  listPosts();
};

async function posts(id) {
  try {
    await listPosts();
    await addPost(id);
  } catch (error) {
    console.log(error);
  }
}
posts("5");
