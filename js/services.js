angular.module("FinalApp")
.service('addToCar',function(localStorageService){

   this.key = "add-to-car";

   if(localStorageService.get(this.key)){
       this.activities = localStorageService.get(this.key)
   }else{
       this.activities = [];
   }
   this.add = function(newActv){
       this.activities.push(newActv);
       this.upDateLocalStorage();
   };
   this.upDateLocalStorage = function(){
       localStorageService.set(this.key,this.activities);
   };
   this.clean = function(){
       this.activities = [];
       this.upDateLocalStorage();
       return this.getAll();
   };
   this.getAll = function(){
       return this.activities; 
   }
   this.removeItems = function(item){
       this.activities = this.activities.filter(function(activity){
           return activity !== item;
       });
       this.upDateLocalStorage();
       return this.getAll();
   }
})
.factory("itemResource",function($resource){
   return $resource("https://fakestoreapi.com/products/:id",{id: "@id"},{update: {method: "PUT"}});
})