'use strict';

$(document).ready(function () {

  $('body').on('mouseenter', function () {
    $('.man__container').removeClass('man__container--active');
  });

  $('.man').on('mouseenter', function () {
    var index = $(this).index();
    top5Hover(index + 1);
  });
  $('.man').on('mouseleave', function () {
    $('.man--1').find('img').attr('src', './img/1-steel.png');
    $('.man--2').find('img').attr('src', './img/2-steel.png');
    $('.man--3').find('img').attr('src', './img/3-steel.png');
    $('.man--4').find('img').attr('src', './img/4-steel.png');
    $('.man--5').find('img').attr('src', './img/5-steel.png');
    $('.man').removeClass('man--left');
    $('.man').removeClass('man--right');
    $('.man__container').removeClass('man__container--active');
  });

  var top5Hover = function top5Hover(index) {
    for (var i = 1; i < index; i++) {
      $('.man--' + i).addClass('man--left');
      $('.man--' + i).find('img').attr('src', './img/' + i + '-right.png');
    }
    for (var i = index + 1; i < 6; i++) {
      $('.man--' + i).addClass('man--right');
      $('.man--' + i).find('img').attr('src', './img/' + i + '-left.png');
    }
    $('.man--' + index).find('img').attr('src', './img/' + index + '-hover.png');

    setTimeout(function () {
      $('.man--' + index).find('.man__container').addClass('man__container--active');
    }, 300);
  };
});