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
    let venusYears = userInfo.venusAge();
    let venusTimeLeft = userInfo.venusLifeLeft(userAvgLife);
    let marsYears = userInfo.marsAge();
    let marsTimeLeft = userInfo.marsLifeLeft(userAvgLife);
    let jupiterYears = userInfo.jupiterAge();
    let jupiterTimeLeft = userInfo.jupiterLifeLeft(userAvgLife);
    $('#results').show();
    $('.user-name').append(userInfo.name);
    $('.mercury-years').append(mercuryYears);
    $('.mercury-left').append(mercuryTimeLeft);
    $('.venus-years').append(venusYears);
    $('.venus-left').append(venusTimeLeft);
    $('.mars-years').append(marsYears);
    $('.mars-left').append(marsTimeLeft);
    $('.jupiter-years').append(jupiterYears);
    $('.jupiter-left').append(jupiterTimeLeft);
  });
});