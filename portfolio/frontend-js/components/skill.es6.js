import objectory from 'objectory';
import $ from 'jquery';
import SkillsApi from './skillsapi.es6';
import path from 'path';


var SkillWidget = objectory((obj) => {

    var skillsApi = SkillsApi();
    var defaultSkill = {
        response: false,
        skill: '',
        story: "But! It seems you've found something unknown. Maybe its better you just send an email. You know, so we can discus this thing in person."
    }

    var showSkill = (elem_id, data) => {
        //$("#"+elem_id+" .js-answer-skill").html(data['skill']);
        if(data.response == true) {
            $("#"+elem_id+" .js-answer-bool").html("Yes, he can");
        } else {
            $("#"+elem_id+" .js-answer-bool").html("No, he can't (yet)");
        }
        $("#"+elem_id+" .js-answer-descr").html(data['story']);
    }

    var clearAnswer = (elem_id) => {
        $("#"+elem_id+" .js-answer-bool, #"+elem_id+" .js-answer-descr").html("")
    }

    obj.bindEvents = (elem_id) => {

        $("#"+elem_id+" .js-form input[type=text]").focus();

        $("#"+elem_id+" .js-form").on('submit', (evt) => {
            $("#"+elem_id+" .js-check").trigger('click');
            evt.preventDefault();
        });

        $("#"+elem_id+" .js-check").on('click', (evt) => {
            var skill_input = $("#"+elem_id+" input[name=skill]").val();
            if(skill_input != "") {
                var api_url = path.join(skillsApi.API_ENDPOINT, skill_input);

                $.get(api_url, (data) => {
                }).done((data) => {
                    if(!data) {
                        showSkill(elem_id, defaultSkill);
                    } else {
                        showSkill(elem_id, data);
                    }
                });
            } else {
                clearAnswer(elem_id);
            }
        });

    }

});

module.exports = SkillWidget
