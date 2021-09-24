angular.module("FinalApp")
.controller("CarController",function($scope,addToCar){
    $scope.articulos = addToCar.getAll();
    $scope.addArtc = function(art){
        alert("Producto agregado con exito");
        console.log(art)
        $scope.newArtc = art;
        addToCar.add($scope.newArtc);
        $scope.newArtc = {};
    }
    $scope.removeArtc = function(item) {
        $scope.articulos = addToCar.removeItems(item);
    }
    $scope.clean = function(){
        $scope.articulos = addToCar.clean();
    }
})
.constant('config', {  
    appName: 'IX Angular Test',  
    tap1Name: 'Lista',
    tap2Name: 'Info',
    tap3Name: 'Modal'
})
.controller("MenuController",['$scope',function($scope){
    // $scope.tituloTab1 = config.tap1Name;
    // $scope.tituloTab2 = config.tap2Name;
    // $scope.tituloTab3 = config.tap2Name;
    $scope.tituloTab1 = "Lista";
    $scope.tituloTab2 = "Info";
    $scope.tituloTab3 = "Modal";
}])
.controller("NavController",function($scope){
    $scope.tituloPagina = "Ix Angular Test";
})
.controller("FooterController",function($scope){
    $scope.autor = "Víctor Hugo Morales Martínez";
    $scope.empresa = "Ix Agency";
})
.controller("ListController",function($scope,$resource,$http,itemResource){
    $scope.items = itemResource.query();
    $scope.removeItem = function(item){
        itemResource.delete({id : item.id},function(data){
        });
        $scope.items = $scope.items.filter(function(element){
            return element.id !== item.id;
        });
    }
})
.controller("ItemInfoController",function($scope,itemResource,$routeParams,$location){
    $scope.item = itemResource.get({id: $routeParams.id});
    console.log($scope.item);
    $scope.title = "Informacion de Producto"
})
.controller("ModalItemController",function($scope,itemResource,$routeParams,$location){
    $scope.item = itemResource.get({id: $routeParams.id});
    console.log($scope.item);
    $scope.title = "Modal del Producto"
})