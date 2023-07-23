const router = require('express').Router();


const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const signup = require("./signUp");
const comment = require("./comment");
const profile = require("./profile");

router.use('/', userRoutes); 
router.use('/posts', blogPostRoutes); 
router.use('/signup', signup);
router.use("/comment", comment);
router.use("/profile", profile);
module.exports = router;