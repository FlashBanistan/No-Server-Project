angular.module("swapi-game").controller("playCtrl", function($scope, $timeout, mainService){
  $scope.score = 0;

  //GET CHARACTERS FUNCTION
  $scope.getChars = function(level){
    $scope.characters = mainService.getData(level);
    $scope.name = [];
    for(let i = 0; i<$scope.characters.length; i++){
      if($scope.characters[i].name){
        $scope.name.push($scope.characters[i].name);
      }
    }
    mainService.justShuffle($scope.name);
  }
  $scope.getChars('easy');

  //RESET SCORE FUNCTION
  $scope.resetScore = function(){
    $scope.score=0;
  }

//PRELOAD SOUNDBYTES
var yay = new Audio("/sounds/1-person-cheering.mp3");
var wrong = new Audio("/sounds/wrong.mp3");
$scope.evaluateAnswer = function(answer){
  if(answer){
    yay.play();
    $scope.score++;
  }
  else{
    wrong.play();
  }
}

$scope.countDown = function() {
    $scope.counter = 15;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
        if($scope.counter === 0){
          $timeout.cancel(mytimeout);
          $scope.getChars('hard');
          $scope.resetScore();
          $scope.stop();
          $scope.countDown();
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
}


});
