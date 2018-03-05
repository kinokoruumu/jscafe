const express = require('express');
const router = express.Router();

const messages = [];
router.get('/', (req, res, next) => {
	res.render('bbs', { title: 'JSCafe', messages: messages });
});

router.post('/', (req, res, next) => {
	const message = req.body.message;
	if (message) messages.push(message);
	res.render('bbs', { title: 'JSCafe', messages: messages });
});

module.exports = router;
