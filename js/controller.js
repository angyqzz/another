(function(){
    var app = angular.module('app',[]);
    app.controller('LibraryController',function($scope){ //capitallettersup

        $scope.books_list = list_of_books;
        $scope.collection_list = list_of_collection;
        $scope.readers_list = List_of_readers;
        $scope.appereanceList = false;
        $scope.fullList = true;
        $scope.currentCollection = '';
        $scope.showHiddenInput = false;
        $scope.openpopups = [];
        $scope.popupOpen = false;
        $scope.openSettings = false;

        $scope.currentTime = new Date();

        var count = 0
        for (var i = 0; i < $scope.books_list.length; i++) {
            if($scope.books_list[i].away == 1) {
                count += 1;
            }
        }
        $scope.awayCount = count;

        $scope.showSettings = function(tab) {
            switch (tab) {
                case 'share':
                    $scope.settingsTab = 2;
                    break;
                case 'coll':
                    $scope.settingsTab = 1;
                    break;
            }
            $scope.openSettings = true;
        }


        $scope.closePopup = function() {
            $scope.openpopups = [];
            $scope.popupOpen = false;
        }

        $scope.showPopup = function(item) {
            $scope.openpopups[item] = !$scope.openpopups[item];
            $scope.popupOpen = !$scope.popupOpen;
        }

        $scope.showInput = function () {
            if($scope.showHiddenInput) {
                if (typeof $scope.collection_name !== 'undefined') {
                    var saveBetween = $scope.collection_name;
                    $scope.collection_name = '';
                }
            }
            $scope.showHiddenInput = !$scope.showHiddenInput;
        }

        $scope.changeAppereance = function(look) {
            switch (look) {
                case 'list' :
                    $scope.appereanceList = true;
                    break;
                case 'pin' :
                    $scope.appereanceList = false;
                    break;
            }

        }

        $scope.changeList = function(id) {
            if(id == 0) {
                $scope.fullList = true;
                $scope.books_list = list_of_books;
                $scope.currentCollection = '';
            } else {
                $scope.fullList = false;
                $scope.books_list = list_of_books;
                var holderList = [];
                for (var i = 0; i < $scope.books_list.length; i++) {
                    if ($scope.books_list[i].collection == id) {
                        holderList.push($scope.books_list[i]);
                    }
                }
                $scope.books_list = holderList;
                for (var i=0; i< $scope.collection_list.length; i++) {
                    if ($scope.collection_list[i].id == id) {
                        $scope.currentCollection = $scope.collection_list[i].name;
                    }
                }
            }

        }

    });

})();

var list_of_books = [
    {
        title: 'Jimmy calls for Mammy',
        isbn: '984211511151511',
        author : 'James Franco',
        image: 'default.jpg',
        collection : 1,
        away: 1
    },
    {
        title: 'Console log for Dummies',
        isbn: '98421154566541',
        author : 'Sam Lee',
        image: 'default.jpg',
        collection : 2,
        away: 0
    },
    {
        title: 'Nanny wants money',
        isbn: '41655616515625',
        author : 'Jill Mill',
        image: 'default.jpg',
        collection : 1,
        away: 0
    },
    {
        title: 'Superman vs Batman',
        isbn: '51551516515615',
        author : 'David M Moore',
        image: 'default.jpg',
        collection : 3,
        away: 1
    },
    {
        title: 'Batman',
        isbn: '51567686515615',
        author : 'Bruce Wayne',
        image: 'default.jpg',
        collection : 3,
        away: 0
    }
];

var list_of_collection = [
    {
        id : 1,
        name: 'Fiction',
        icon: 'flaticon-sword8',
        color: 'tarquoise'
    },
    {
        id : 2,
        name: 'Programming',
        icon: 'flaticon-code10',
        color: 'purple'
    },
    {
        id : 3,
        name: 'Comics',
        icon: 'flaticon-comic1',
        color: 'red'
    }
];

var List_of_readers = [
    {
        readerId : '800',
        name : 'James',
        bookId : '984211511151511',
        readerRating: null,
        due: '2015-05-16'
    },
    {
        readerId : '801',
        name : 'Sam',
        bookId : '984211511151511',
        readerRating: null,
        due: '2015-05-16'
    }
];