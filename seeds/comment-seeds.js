const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Affirm"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;