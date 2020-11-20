import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import UserAge from './userAge';

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
    let userName = $('input#name').val();
    let userAge = $('input#age').val();
    let userInfo = new UserAge(userName, userAge);
    let userAvgLife = $('input#average-life-span').val();
    let mercuryYears = userInfo.mercuryAge();
    let mercuryTimeLeft = userInfo.mercuryLifeLeft(userAvgLife);
    let venusYears = userInfo.venusAge();
    let venusTimeLeft = userInfo.venusLifeLeft(userAvgLife);
    let marsYears = userInfo.marsAge();
    let marsTimeLeft = userInfo.marsLifeLeft(userAvgLife);
    let jupiterYears = userInfo.jupiterAge();
    let jupiterTimeLeft = userInfo.jupiterLifeLeft(userAvgLife);
    let saturnYears = userInfo.saturnAge();
    let saturnTimeLeft = userInfo.saturnLifeLeft(userAvgLife);
    $('#results').show();
    $('.user-name').html(userInfo.name);
    $('.mercury-years').html(mercuryYears);
    $('.mercury-left').html(mercuryTimeLeft);
    $('.venus-years').html(venusYears);
    $('.venus-left').html(venusTimeLeft);
    $('.mars-years').html(marsYears);
    $('.mars-left').html(marsTimeLeft);
    $('.jupiter-years').html(jupiterYears);
    $('.jupiter-left').html(jupiterTimeLeft);
  });
});