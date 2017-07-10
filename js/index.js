var json = {
	product:[{
		listName:"肉品",
		content:[{name:"纯瘦肉",price:35,buy:56,chooseNum:0,img:"./img/1.jpg",id:0},
		         {name:"猪耳朵",price:76,buy:12,chooseNum:0,img:"./img/2.jpg",id:1},
		         {name:"牛肉",price:24,buy:24,chooseNum:0,img:"./img/3.jpg",id:2},
		         {name:"牛肉和牛肚",price:38,buy:78,chooseNum:0,img:"./img/4.jpg",id:3},
		         {name:"排骨",price:75,buy:63,chooseNum:0,img:"./img/5.jpg",id:4},
		         {name:"猪脚",price:39,buy:37,chooseNum:0,img:"./img/6.jpg",id:5}]
	},{
		listName:"水产",
		content:[{name:"罗非鱼",price:68,buy:72,chooseNum:0,img:"./img/7.jpg",id:6},
		         {name:"杭州虾",price:89,buy:34,chooseNum:0,img:"./img/8.jpg",id:7},
		         {name:"海鲜套餐",price:180,buy:12,chooseNum:0,img:"./img/9.jpg",id:8},
		         {name:"贝壳",price:35,buy:39,chooseNum:0,img:"./img/10.jpg",id:9},
		         {name:"青鱼",price:26,buy:56,chooseNum:0,img:"./img/11.jpg",id:10},
		         {name:"黄鱼",price:19,buy:23,chooseNum:0,img:"./img/12.jpg",id:11}]
	},{
		listName:"蔬菜",
		content:[{name:"飘菜",price:15,buy:72,chooseNum:0,img:"./img/13.jpg",id:12},
		         {name:"苦瓜",price:12,buy:34,chooseNum:0,img:"./img/14.jpg",id:13},
		         {name:"西红柿辣椒套餐",price:90,buy:12,chooseNum:0,img:"./img/15.jpg",id:14},
		         {name:"黄瓜",price:24,buy:39,chooseNum:0,img:"./img/16.jpg",id:15},
		         {name:"黄豆",price:21,buy:56,chooseNum:0,img:"./img/17.jpg",id:16},
		         {name:"白苦瓜",price:19,buy:34,chooseNum:0,img:"./img/18.jpg",id:17},
		         {name:"蔬菜套餐1",price:78,buy:23,chooseNum:0,img:"./img/19.jpg",id:18},
		         {name:"蔬菜套餐2",price:88,buy:15,chooseNum:0,img:"./img/20.jpg",id:19}]
	},{
		listName:"干货杂粮",
		content:[{name:"大米",price:15,buy:24,chooseNum:0,img:"./img/21.jpg",id:20},
		         {name:"紫米",price:18,buy:34,chooseNum:0,img:"./img/22.jpg",id:21},
		         {name:"玉米",price:24,buy:12,chooseNum:0,img:"./img/23.jpg",id:22}]
	},{
		listName:"糕点",
		content:[{name:"糕点1",price:15,buy:72,chooseNum:0,img:"./img/24.jpg",id:23},
		         {name:"糕点2",price:12,buy:34,chooseNum:0,img:"./img/25.jpg",id:24},
		         {name:"糕点3",price:90,buy:12,chooseNum:0,img:"./img/26.jpg",id:25},
		         {name:"糕点4",price:24,buy:39,chooseNum:0,img:"./img/27.jpg",id:26},
		         {name:"糕点5",price:21,buy:56,chooseNum:0,img:"./img/28.jpg",id:27},
		         {name:"糕点6",price:19,buy:34,chooseNum:0,img:"./img/29.jpg",id:28}]
	}]
}



var app = angular.module("app",[]);
app.controller("aa",function($scope){
	$scope.arr = json.product;
	//console.log($scope.arr[0].content[0].img);
	
	//改变菜单栏
	$scope.toggle = "page1";
	$scope.list = function($event){
		//console.log($event.target.className);
		$scope.toggle = $event.target.className;
	}

	//进入购物车
	$scope.car = function($event){
   		angular.element($("#con1")).css({
   			display:"none"
   		});
   		angular.element($(".bag")).css({
   			display:"block"
   		});
	}
	//选菜
	$scope.chooseFood = function($event){
		angular.element($(".bag")).css({
   			display:"none"
   		});
   		angular.element($("#con1")).css({
   			display:"block"
   		});
	}


	//添加菜品到菜篮子
	$scope.arr1 = [];
	$scope.add = function($event){
		//找到addimg元素父元素div对应的一列内容（在HTML中写上(data-label={{x}})）
   		var add = angular.element($event.target).parent().attr("data-label");
   		//console.log($event.target);
   		//console.log(add);

   		var obj = angular.fromJson(add);
   		//console.log(obj);


   		if ($scope.arr1.length != 0) {
   			var aa = 0;
   			for (var i = 0; i < $scope.arr1.length; i++) {
   				if ($scope.arr1[i].name == obj.name) {
   					$scope.arr1[i].chooseNum++;
   					aa = 1;
   				}
   			}
			if (aa == 0) {
				$scope.arr1.push(obj);
				$scope.arr1[$scope.arr1.length-1].chooseNum++;
				$scope.arr1[$scope.arr1.length-1].id = $scope.arr1.length-1;
			}
   			
   			aa = 0;
   		}else{
   			$scope.arr1.push(obj);
			$scope.arr1[$scope.arr1.length-1].chooseNum++;
			$scope.arr1[$scope.arr1.length-1].id = $scope.arr1.length-1;
   		}
   		//console.log($scope.arr1);
	}


	//清空
	$scope.delete = function($event){
		var a = angular.element($event.target).parent(".title").next(".table").children(".caibiao").attr("data-aa");
		//$scope.arr1.splice();
		console.log(a);
	}
	


	//+添加数量
	$scope.jia = function($event){
		//console.log(angular.element($event.target).attr("data-id"));
		var j = angular.element($event.target).attr("data-id");
		$scope.arr1[j].chooseNum++;
	}






	//-减少数量
	$scope.jian = function($event){
		//console.log(angular.element($event.target).attr("data-id"));
		var x = angular.element($event.target).attr("data-id");
		if ($scope.arr1[x].chooseNum == 1) {
			console.log($scope.arr1[x]);
			//splice删除指定列
			$scope.arr1.splice(x,1);
		}else{
			$scope.arr1[x].chooseNum--;
		}
		for (var i = 0; i < $scope.arr1.length; i++) {
			$scope.arr1[i].id = i
		} 
	}



	//总价
	$scope.zj = 0;
	if ($scope.arr1.length>0) {
		for(var i=0;i<$scope.arr1.length;i++){
           	console.log(123);
		}
	}else{
		$scope.zj = 0;
	}
	






















})
