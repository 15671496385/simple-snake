//food部分
(function () {
    var element = [];//装食物，方便删除

    function Food() {//food的构造函数，x，y后面做小蛇运动功能会用
        this.x = 0;
        this.y = 0;
    }

    Food.prototype.init = function (map) {//初始化食物，显示食物，食物的位置随机
        remove();
        var div = document.createElement("div");
        map.appendChild(div);
        element.push(div);
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.backgroundColor = "green";
        div.style.position = "absolute";
        div.style.borderRadius = "10px";
        this.x = parseInt(Math.random() * map.offsetWidth / div.offsetWidth);
        this.y = parseInt(Math.random() * map.offsetHeight / div.offsetHeight);
        div.style.left = this.x * div.offsetWidth + "px";
        div.style.top = this.y * div.offsetHeight + "px";
    };

    function remove() {//私有函数，移除食物
        if (element.length > 0) {
            element[0].parentNode.removeChild(element[0]);
            element.pop();
        }
    }

    window.Food = Food;//食物暴露给window，方便外面用
}());