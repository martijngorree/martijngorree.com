var express = require('express');
var router = express.Router();

var Skill = require("../models/skill");

router.use((req, res, next) => {
    console.log("Api in use!");
    next();
});

/* GET api listing. */
router.get('/', (req, res, next) => {
    res.json({ message: 'respond with a resource' });
});

router.route("/skills")
    .get((req, res) => {
        Skill.find((err, skills) => {
            if (err) {
                res.send(err);
            }
            res.json(skills);
        });
    });

router.route("/skills/:skill")
    .get((req, res) => {
        Skill.findOne({ skill: req.params.skill}, (err, skill) => {
            if (err) {
                res.send(err);
            }
            res.json(skill);
        });
    });

module.exports = router;
