angular.module("swapi-game", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state("home", {
            url: "/",
            templateUrl: "/views/home.html"
          })
          .state("play", {
            url: "/play",
            templateUrl: "/views/play.html"
          })
          .state("high-score", {
            url: "/high-score",
            templateUrl: "/views/high-score.html"
          })
          .state("about", {
            url: "/about",
            templateUrl: "/views/about.html"
          })



        $urlRouterProvider
            .otherwise('/');
    });
