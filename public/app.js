'use strict';

var app = angular.module('app', [])

    .controller('home', function($scope){
        $scope.currency = [];
        $scope.result = [];
        $scope.base = {};
        
        $scope.addCurrency = function(){
            if($scope.base.name && $scope.base.amount){
                $scope.currency.push({});   
            }
        }
        
        $scope.removeCurrency = function(index){
            $scope.currency.splice(index, 1);
            $scope.result.splice(index, 1);
        }
        
        $scope.calculateTotal = function(index){
            if($scope.result[index]){
                if($scope.base.name && $scope.base.amount && $scope.result[index].name && $scope.result[index].sell && $scope.result[index].buy){
                    if($scope.result[index - 1]){
                        $scope.result[index].total = $scope.result[index -1 ].total * $scope.result[index].sell;
                        return  $scope.result[index].total;   
                    } else {
                        $scope.result[index].total = $scope.base.amount * $scope.result[index].sell
                        return $scope.base.amount * $scope.result[index].sell;
                    }
                }
            }
        }
        
    
    });