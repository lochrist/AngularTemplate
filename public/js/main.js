/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../libs/angular/angular',
		jsface: '../libs/jsface/jsface',
		lodash: '../libs/lodash/lodash'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	}
});

require(['angular', 'app', 'controllers/todo', 'directives/todoFocus'], function (angular) {
	angular.bootstrap(document, ['todomvc']);
});
