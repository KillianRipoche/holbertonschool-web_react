import $ from 'jquery';
import _ from 'lodash';
import './body.css';

console.log('Init body');

$('body').append('<div class="body-content"></div>');
$('.body-content').append('<p>Dashboard data for the students</p>');
$('.body-content').append('<button id="start-button">Click here to get started</button>');
$('.body-content').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('#start-button').on('click', _.debounce(updateCounter, 500));
