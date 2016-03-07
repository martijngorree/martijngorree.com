import SkillWidget from './components/skill.es6';
import $ from 'jquery';

$(() => {
    var skillWidget = SkillWidget();
    skillWidget.bindEvents("skillWidget");
});
