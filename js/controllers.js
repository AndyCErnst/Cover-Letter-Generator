"use strict";

var coverLetterApp = angular.module("coverLetterApp", []);

var snippets = [
	{name: "javascript", info: "I know JS"},
	{name: "css", info: "I know css"},
	{name: "html", info: "I know html"}
];

coverLetterApp.controller("CoverBuilderController", ["$scope", "$http",
  function($scope, $http) {
    $scope.snippets = snippets;
    $scope.bodyParagraphs = paragraphs.body;
    $scope.endingParagraphs = paragraphs.ending;

  }
]);

var paragraphs = { 
	body:[
	{
    text: "I come from a liberal arts background where I developed a habit of learning difficult things quickly. In two years in Japan I went from completely overwhelmed to a confident teacher of hundreds of students and a fluent speaker of Japanese. After returning from Japan I discovered my true passion, programming. That passion drives me today to improve on what I know, learn from others, and one day build a great web app that changes people lives."
  },

  {
    text: "I bring much more to the table than just programming skill -- I know how to train others, how to communicate on a professional level, and how to cut through clutter to get a job done quickly. At Lionbridge I was recognized as one of the best employees in an office of over 50 people. I know I can do the same at your company."
  }],
  ending:[
  {
  	text: "Let’s do great things together."
  },
  {
  	text: "I look forward to hearing from you."
  }
  ]
};

