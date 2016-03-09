var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    skill: String,
    response: String,
    story: String
});

module.exports = mongoose.model('Skill', SkillSchema);
