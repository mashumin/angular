angular.module("crtl",["sevices"])
    .controller("index",["$scope","$http","indexDate",function ($scope,$http,indexDate) {
        indexDate.then(function (data) {
            console.log(data.data);
            $scope.data=data.data
        })
    }])
    .controller("list",["$scope","$http","listData",function ($scope,$http,listDate) {
        listDate.then(function (data) {
            $scope.data=data.data
        })

    }])