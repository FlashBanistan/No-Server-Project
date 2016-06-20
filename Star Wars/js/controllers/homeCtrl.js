angular.module("swapi-game").controller("homeCtrl", function($scope, mainService){

  var difficultyPicker = function(){
    var num = Math.random();
    console.log(num)
    if(num<.33){
      return "easy";
    }
    else if(num>=.33 && num<.66){
      return "medium";
    }
    else{
      return "hard";
    }
  };
  var getChars = function(){
    $scope.characters = mainService.getData(difficultyPicker());
  }

  getChars();
});
