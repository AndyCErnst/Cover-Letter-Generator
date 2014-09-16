"use strict";

var coverLetterApp = angular.module("coverLetterApp", ["ui.sortable"]);


coverLetterApp.controller("CoverBuilderController", ["$scope", "$http",
  function($scope, $http) {
  	var sentences = [];
    textData.bodyParagraphs.forEach(function(paragraph) {
    	var sentenceArray = splitAndObjectfy(paragraph.text);
      sentences = sentences.concat(sentenceArray);
    });

    $scope.bodySentences = sentences;
    $scope.endingSentences = textData.endingSentences;
		$scope.snippets = textData.snippets;

		$scope.dragControlListeners = {
	    accept: function (sourceItemHandleScope, destSortableScope) {return true},//override to determine drag is allowed or not. default is true.
	    itemMoved: function (event) {},
	    orderChanged: function(event) {},
	    containment: '#board'//optional param.
		};
		var endVersion = {};
		$scope.endVersion = endVersion;
  }
]);

// This splits a paragraph into an array of sentence objects 
// with the key "text" = the sentence string.
var splitAndObjectfy = function(text) {
  var sentences = text.match(/[^\.!\?]+[\.!\?\s]+/g);

  return sentences.map(function(sentence) {
    return {
      text: sentence
    };
  });
};

var textData = {

  bodyParagraphs: [{
    text: "In my liberal arts education I developed the skill of learning difficult things quickly. In three years in Japan I went from completely overwhelmed to a confident teacher of hundreds of students and a proficient speaker of Japanese. After returning from Japan I discovered my true passion, programming. That passion drives me today to improve on what I know, learn from others, and one day build a great web app that changes people lives."
  }, {
    text: "I bring much more to the table than just programming skill -- I know how to train others, how to communicate on a professional level, and how to cut through clutter to get a job done quickly. At Lionbridge I was recognized as one of the best employees in an office of over 50 people. I know I can do the same at your company."
  }],

  endingSentences: [{
    text: "I am very excited to learn more about this opportunity at and share how I will be a great fit for this position."
  }, 
  {
    text: "I would appreciate the opportunity to meet with you to discuss how my qualifications will be beneficial to your company's success."
  }, 
  {
    text: "I look forward to hearing from you."
  }],

  snippets: [{
      name: "javascript",
      text: "Used full-stack, OO JavaScript (including Angular, Backbone, Node, Handlebars, jQuery, AJAX) to write complex web applications and interactive websites"
    },

    {
      name: "responsive design",
      text: "Currently designing mobile-first, responsive websites with HTML5/CSS3"
    },

    {
      name: "design",
      text: "Keen eye for the subtle things that make a great user experience"
    },

    {
      name: "java",
      text: "Developed a Java algorithm to find idea areas for investment from 1+ million lines of unemployment data."
    }
  ]
};
