import objectory from 'objectory';
import $ from 'jquery';
import path from 'path';

import SkillsApi from './skillsapi.es6';
import answer_template from '../templates/answer.hbs';

var SkillWidget = objectory((obj) => {

    const defaultSkill = {
        response: 'Oh ehm, what?',
        skill: '',
        story: "It seems you've found something unknown. Maybe its better you just send an email. You know, so we can discus this thing in person."
    }

    var skillsApi = SkillsApi();

    var showSkill = (elem_id, data) => {
        $("#"+elem_id+" .js-answer").html(answer_template({
            title: data['response'],
            descr: data['story']
        }));
    }

    var clearAnswer = (elem_id) => {
        $("#"+elem_id+" .js-answer").html("")
    }

    obj.bindEvents = (elem_id) => {

        $("#"+elem_id+" .js-form input[type=text]").focus();

        $("#"+elem_id+" .js-form").on('submit', (evt) => {
            evt.preventDefault();

            let skill_input = $("#"+elem_id+" input[name=skill]").val();

            if(skill_input != "") {
                let api_url = path.join(skillsApi.API_ENDPOINT, skill_input);

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

module.exports = SkillWidget;
