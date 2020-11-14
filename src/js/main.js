import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserAge from './userAge'

$(document).ready(function() {
  $('#TODO-form').submit(function(event) {
    event.preventDefault();

  });
});