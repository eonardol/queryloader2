window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  var ql = QueryLoader2(document.querySelector('body'), {
    barColor: '#efefef',
    backgroundColor: '#111',
    percentage: true,
    barHeight: 1,
    minimumTime: 20000,
    fadeOutTime: 1000,
    showImageAbove: true,
    imageAboveUrl: 'http://www.nonsprecare.it/wp-content/uploads/2014/07/rimedi-naturali-pulci-gatti.jpg',
    imageAboveWidth: '100px',
    imageAboveHeight: '50px'
  });
});