const { Post } = require('../models');

const postData = [
    {
        title: "Title!",
        post_content: "post content.",
        user_id: 1
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;