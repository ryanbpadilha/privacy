const express = require('express');
const PostSchema = require('../Schemas/postSchema');
const router = express.Router();

router.get('/', async (req, res) => {
  // get all
  try {
    const list = await PostSchema.find();
    res.json(list);
  } catch (error) {
    res.json({ message: error.message });
  };
});
router.post('/', async (req, res) => {
  // dont need to know the id of tha post
  // create the post schema
  const post = new PostSchema({
    title: req.body.title,
    body: req.body.body
  });
  
  // why req.body is undefined?

  // try to save that on the list
  // if some error occurs, catch it
  try {
    res.json(await post.save());
  } catch (error) {
    console.log({message:error.message});;
  };
});
router.get('/:id', idPost, (req, res) => {
  // dont need execute the function as a parameter
  // get one
  res.json(res.post);
});
router.patch('/:id', idPost, async (req, res) => {
  if (req.body.title != null) res.post.title = req.body.title;
  if (req.body.body != null) res.post.body = req.body.body;
  try {
    res.json(await res.post.save());
  } catch (error) {
    res.json({ message: error.message });
  };
});
router.delete('/:id', idPost, async (req, res) => {
  try {
    await res.post.delete();
    res.json({ post: res.post, message: "Deleted post!" });
  } catch (error) {
    res.json({ message: error.message });
  };
});

async function idPost(req, res, next) {
  // next is used to passa to the next function
  // it goes at the end
  let post;
  try {
    post = await PostSchema.findById(req.params.id);
    if (post == null) return res.json({ message: "Cannot find post!" });
  } catch (error) {
    return res.json({ message: error.message });
  };
  res.post = post;
  next();
};

module.exports = router;