import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import UserAge from './userAge';

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
    let userInfo = new UserAge();
    userInfo.name = $('input#name').val();
    userInfo.earthAge = $('input#age').val();
    let userAvgLife = $('input#average-life-span').val();
    let mercuryYears = userInfo.mercuryAge();
    let mercuryTimeLeft = userInfo.mercuryLifeLeft(userAvgLife);
    $('#results').show();
    $('.user-name').append(userInfo.name);
    $('.mercury-years').append(mercuryYears);
    $('.mercury-left').append(mercuryTimeLeft);
  });
});