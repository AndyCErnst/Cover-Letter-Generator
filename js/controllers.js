"use strict";

var coverLetterApp = angular.module("coverLetterApp", []);

var snippets = [
	{name: "javascript", info: "I know JS"},
	{name: "css", info: "I know css"},
	{name: "html", info: "I know html"}
];

coverLetterApp.controller("CoverBuilderController", function($scope, $http){
	$scope.snippets = snippets;
	$http.get("data/data.json").success(function(data){
		$scope.firstParagraph = data;
	});
});