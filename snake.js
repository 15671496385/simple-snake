//snake部分
(function () {
    var element = [];

    function Snake(direction) {//snake的构造函数，传入方向方便移动
        this.width = 20;
        this.height = 20;
        this.direction = direction || "right";
        this.body = [               //小蛇
            {x: 3, y: 1, color: "red"},//头部
            {x: 2, y: 1, color: "orange"},
            {x: 1, y: 1, color: "orange"}
        ];
    }

    Snake.prototype.init = function (map) {//初始化小蛇，创建的div个数与body的长度相等，创建之前删除一次
        remove();
        for (i = 0; i < this.body.length; i++) {//for循环遍历body，创建小蛇,并添加属性，初始小蛇与构造函数中body数组有关
            var div = document.createElement("div");
            map.appendChild(div);
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.position = "absolute";
            div.style.borderRadius = i == 0 ? "8px" : "5px";
            div.style.left = this.body[i].x * div.offsetWidth + "px";
            div.style.top = this.body[i].y * div.offsetHeight + "px";
            div.style.backgroundColor = this.body[i].color;
            element.push(div);
        }
    };

    Snake.prototype.move = function () {
        for (i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right":
                this.body[0].x++;
                break;
            case "left":
                this.body[0].x--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
            case "top":
                this.body[0].y--;
                break;
        }
    };

    function remove() {//私有函数，创建小蛇之前，移除小蛇
        for (i = element.length - 1; i >= 0; i--) {
            element[i].parentNode.removeChild(element[i]);
            element.pop();
        }
    }

    window.Snake = Snake;
}());