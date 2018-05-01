const express = require('express');
const router = express.Router();

const skillConn = require('../modules/skills/skill.conn');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home/page_root', {
        title: 'Xian Li',
        skillList: skillConn.getSkillList()
    });
});

module.exports = router;
