"use strict";

var coverLetterApp = angular.module("coverLetterApp", []);


coverLetterApp.controller("CoverBuilderController", ["$scope", "$http",
  function($scope, $http) {
    $scope.snippets = snippets;
    paragraphs.body.forEach(function(paragraph){
    	paragraph.sentences = splitAndObjectfy(paragraph.text);
    	console.log(paragraph.sentences);
    })
		
    $scope.bodyParagraphs = paragraphs.body;
    $scope.endingParagraphs = paragraphs.ending;
  }
]);

var splitAndObjectfy = function(text){
	var sentences = text.match(/[^\.!\?]+[\.!\?\s]+/g);

	return sentences.map(function(sentence){
		return {text: sentence};
	});
};

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
  	text: "I am very excited to learn more about this opportunity and share how I will be a great fit for this position."
  },
   {
  	text: "I would appreciate the opportunity to meet with you to discuss how my qualifications will be beneficial to your company's success."
  },
  {
  	text: "I look forward to hearing from you."
  }
  ]
};

var snippets = [
	{name: "javascript", info: "Used full-stack, OO JavaScript (including Angular, Backbone, Node, Mustache, jQuery, AJAX) to write complex web applications and interactive websites"},

	{name: "responsive design", info: "Currently designing mobile-first, responsive websites with HTML/CSS"},

	{name: "design", info: "Keen eye for the subtle things that make a great user experience"},

	{name: "css", info: "I know css"},
	{name: "html", info: "I know html"},
	{name: "java", info: "Developed a Java algorithm to find idea areas for investment from 1+ million lines of unemployment data."}
];
