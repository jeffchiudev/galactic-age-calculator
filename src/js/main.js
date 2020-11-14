import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserAge from './userAge'

$(document).ready(function() {
  $('#user-info').submit(function(event) {
    event.preventDefault();
    userInfo = new UserAge();
    userInfo.name = $('input#name').val();
    userInfo.earthAge = $('input#age').val();
    userAvgLife = $('input#average-life-span').val()
    mercuryYears = userInfo.mercuryAge();
    mercuryTimeLeft = userInfo.mercuryLifeLeft();
    $('.results').show()
    $ 
  });
});