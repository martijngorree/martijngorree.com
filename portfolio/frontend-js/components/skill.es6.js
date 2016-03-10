import objectory from 'objectory';
import $ from 'jquery';
import path from 'path';

import SkillsApi from './skillsapi.es6';
import answer_template from '../templates/answer.hbs';

var SkillWidget = objectory((obj) => {

    const defaultSkill = {
        response: 'Oh ehm, what?',
        skill: '',
        story: "It seems you've found something unknown. Apparently Martijn does not have an answer to everything. Maybe its better you just send an email. You know, just to be sure."
    }

    var skillsApi = SkillsApi();

    var showSkill = (elem_id, data) => {
        $("#"+elem_id+" .js-answer").html(answer_template({
            title: data['response'],
            descr: data['story']
        })).addClass("answered");
    }

    var clearAnswer = (elem_id) => {
        $("#"+elem_id+" .js-answer").html("").removeClass("answered")
    }

    obj.bindEvents = (elem_id) => {

        $("#"+elem_id+" .js-form input[type=text]").on('focus', (evt) => {
            $(evt.target).val("");
        });

        $("#"+elem_id+" .js-form").on('submit', (evt) => {
            evt.preventDefault();
            $(":focus").trigger("blur");

            let skill_input = $("#"+elem_id+" input[name=skill]").val().toLowerCase();

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
