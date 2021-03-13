exports.getPosts = (req, res, next) => {
  res.json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createPost = (req, res, post) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  // Create post in db
  res.json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
