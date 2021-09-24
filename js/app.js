angular.module("FinalApp",["ngRoute","ngResource","LocalStorageModule"])
.config(function($routeProvider){
    $routeProvider
        .when("/",{
            controller: "ListController",
            templateUrl: "templates/home.html"
        })
        .when("/product/info/:id",{
            controller: "ItemInfoController",
            templateUrl: "templates/iteminfo.html"
        })
        .when("/product/info/modal/:id",{
            controller: "ModalItemController",
            templateUrl: "templates/itemmodal.html"
        })
})