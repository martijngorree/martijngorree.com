import objectory from 'objectory';

var SkillsApi = objectory((obj) => {
    obj.API_ENDPOINT = "/api/skills/";
});

module.exports = SkillsApi
