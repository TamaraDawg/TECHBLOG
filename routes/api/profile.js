
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Blog } = require('../../models');

router.get('/profile', withAuth, async (req, res) => {
    const userPosts = await Blog.findAll({ where: { user_id: req.session.user_id } });
    res.render('profile', { userPosts, logged_in: req.session.logged_in });
});
  

router.post('/profile', withAuth, async (req, res) => {
    const newPost = await Blog.create({ 
      ...req.body, 
      user_id: req.session.user_id 
    });
    res.redirect('/profile');
});
  

router.put('/profile/:id', withAuth, async (req, res) => {
    const updatedPost = await Blog.update(req.body, { 
      where: { id: req.params.id } 
    });
    res.redirect('/profile');
});
  

router.delete('/profile/:id', withAuth, async (req, res) => {
    const deletedPost = await Blog.destroy({ 
      where: { id: req.params.id } 
    });
    res.redirect('/profile');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
});

module.exports = router;