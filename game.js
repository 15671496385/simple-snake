//game部分
(function () {
    var that = null; //方便后面用this指向Game的实例对象
    function Game(map) {//game构造函数
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {//game初始化，使map中的food和snake显示，并且让snake动起来
        this.food.init(this.map);
        this.snake.init(this.map);
        this.bindKey();
        this.runSnake();
    };

    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {//按上下左右键改变小蛇的运动方向
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left";
                    break;
                case 38:
                    this.snake.direction = "top";
                    break;
                case 39:
                    this.snake.direction = "right";
                    break;
                case 40:
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    };

    Game.prototype.runSnake = function () { //snake运动方法
        var timeId = setInterval(function () {//小蛇动起来，定时器时间间隔决定小蛇的速度
            this.snake.move();
            this.snake.init(this.map);

            //判断小蛇是否出界，出界则游戏结束
            if (this.snake.body[0].x < 0 || this.snake.body[0].x >= this.map.offsetWidth / this.snake.width || this.snake.body[0].y < 0 || this.snake.body[0].y >= this.map.offsetHeight / this.snake.height) {
                clearInterval(timeId);
                alert("游戏结束!");
            }

            //判断小蛇是否吃到食物，如果吃到，身体边长，食物重新初始化
            if (this.snake.body[0].x == this.food.x && this.snake.body[0].y == this.food.y) {
                var last = this.snake.body[this.snake.body.length - 1];
                this.food.init(this.map);
                this.snake.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                });
            }
        }.bind(that), 200);
    };

    window.Game = Game;
}());