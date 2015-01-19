(function() {
	var app = angular.module('bookDir', []);

	app.controller('LibraryController', function(){
		this.books = book;
	    });
	app.controller('SearchController', function(){
		$scope.isSearch = function(input){
			return input === null;
		}
	});

  var book = [
	      { name: 'Alligators', author: 'John Doe', description: 'blah, blah, blah', url: 'http://www.booksthatgrow.com/alligators-in-the-sewerthe-truth-behind-abandoned-pets' },
	      { name: 'Einstein', author: 'Science Person', description: 'blady blady blah', url: 'http://www.booksthatgrow.com/albert-einstein-the-game-changer-of-science' },
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Some Book', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Another Book', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Yet Another', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Is Everything here by Poe', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Little Creepy', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Black Cat', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'Scary Stuff', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'More Poe', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},
	      { name: 'The Masque of Red Death', author: 'Edgar Allen Poe', description: 'yada yada yada gruesome stuff', url: 'http://www.booksthatgrow.com/the-masque-of-the-red-death/'},

	      ];
    })();