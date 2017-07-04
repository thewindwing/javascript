/**
 * Created by xiaoleixin on 2017/6/25.
 */

function $id(id) {
    return document.getElementById(id);
}


//能力检测
//设置任意一个元素的文本内容
function setInnerText(element, text) {
    //该属性在浏览器中不支持
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        //浏览器支持
        element.textContent = text;
    }
}
//获取任意一个元素的文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//获取当前元素的上一个元素
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var ele = element.previousSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的下一个元素
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var ele = element.nextSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素的第一个子元素
function getFirstElementByParent(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    } else {
        var ele = parent.firstChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素的最后一个子元素
function getLastElementByParent(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    } else {
        var ele = parent.lastChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的兄弟元素
function getSiblings(element) {
    if (!element) {
        return;
    }
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.nextSibling;
    }
    return elements;
}

//获取任一个元素到指定位置的移动
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //获取元素的当前位置
        var current = element.offsetLeft;
        var step = 10;
        //判断step的正负
        step = target > current ? step : -step;
        current += step;
        element.style.left = current + "px";
        if (Math.abs(target - current) < Math.abs(step)) {
            element.style.left = target;
            clearInterval(element.timeId);
        }
    }, 20);
}

//通过id获取页面中的元素
function $id(id) {
    return document.getElementById(id);
}


//能力检测
//设置任意一个元素的文本内容
function setInnerText(element, text) {
    //该属性在浏览器中不支持
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        //浏览器支持
        element.textContent = text;
    }
}
//获取任意一个元素的文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//获取当前元素前一个元素
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var ele = element.previousSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var ele = element.nextSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    } else {
        var ele = parent.firstChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    } else {
        var ele = parent.lastChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if (!ele)return;//判断当前的ele这个元素是否存在
    var elements = [];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el = ele.previousSibling;//当前元素的前一个节点
    while (el) {
        if (el.nodeType === 1) {//元素
            elements.push(el);//加到数组中
        }
        el = el.previousSibling;
    }
    el = ele.nextSibling;
    while (el) {
        if (el.nodeType === 1) {
            elements.push(el);
        }
        el = el.nextSibling;
    }
    return elements;
}

//获取任一个元素到目标位置的移动
function animate1(element, target) {
    //先判断有没有这个定时器，如果有就清除，再点击时，用新创建的定时器
    clearInterval(element.timeId);
    //用对象的属性，当做定时器的id名，保证这个id或变量永远是这个对象自己的，不会与其他变量名冲突
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;
        step = target > current ? step : -step;
        current += step;
        element.style.left = current + "px";
        if (Math.abs(target - current) < Math.abs(step)) {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 20);
}


//封装页面卷曲距离的函数
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    };
}


//封装任一元素缓动到目标值得动画函数
function slowAnimate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        //缓动效果
        var step = (target - current) / 10;
        //当step为小数时，向上取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            //当current接近target时，即差step小于10时，step的绝对值已经是小于1 的数，对齐向上取整就是1，最后几部一直都是1；所以不会出现current不等于target的情况
            clearInterval(element.timeId);
        }
        //测试代码
        console.log("目标位置：" + target + "；现在位置：" + current + "；步数:" + step);
    }, 10);
}


//获取任一元素的某一个样式属性的值（兼容性问题）
function getStyle(element, attr) {
    //谷歌支持
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        //IE8支持
        return element.currentStyle[attr];
    }
}//返回值是一个字符串

//封装缓动效果增加元素的任一个属性
function slowAnimateAttr(element, attr, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //getStyle()返回的是一个字符串，转为数字再计算
        var current = parseInt(getStyle(element, attr));
        //缓动效果
        var step = (target - current) / 10;
        //当step为小数时，向上取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
        if (current == target) {
            //当current接近target时，即差step小于10时，step的绝对值已经是小于1 的数，对齐向上取整就是1，最后几部一直都是1；所以不会出现current不等于target的情况
            clearInterval(element.timeId);
        }
        //测试代码
        console.log("目标位置：" + target + "；现在位置：" + current + "；步数:" + step);
    }, 10);
}

//封装缓动动画函数，增加多个样式属性
function jsonSlowAnimate(element, json) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //设置一个标志，用来解决各个属性不同步到达目标值的问题
        var flag = true;
        //遍历json对象的每一个属性
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr));
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[attr] = current + "px";
            //若有一个不达到目标值，就设为false，已经达到目标的step值就为0，再怎么前进也是原封不动
            if (current != json[attr]) {
                flag = false;
            }
        }
        //都达到目标值
        if (flag) {
            clearInterval(element.timeId);
        }

    }, 20);

}


//封装缓动动画函数，为元素添加任意多个样式及回调函数
function slowAnimateAttrs(element, json, fn) {
    //清除已有的定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //定义一个标志，用来解决所有属性不同步达到目标值的问题
        var flag = true;
        //遍历json中每个属性
        for (var attr in json) {
            //获取现在的位置，字符串转为数值
            var current = parseInt(getStyle(element, attr));
            //每次走的步数
            var step = (json[attr] - current) / 10;
            //小数时取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            //移动后的位置
            element.style[attr] = current + "px";
            //若有一个未到达目标值的，就设为false，已经到达目标值的，因为步数为0，所以原封不动
            if (current != json[attr]) {
                flag = false;
            }
        }
        //都到达目标值
        if (flag) {
            clearInterval(element.timeId);
            //调用下一个函数
            fn();
        }
    }, 20);
}


//封装缓动动画函数，为元素添加任意多个样式及回调函数,加透明度和层级
function animateFull(element, json, fn) {
    //清除已有的定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //定义一个标志，用来解决所有属性不同步达到目标值的问题
        var flag = true;
        //遍历json中每个属性
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = ( target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;//注意透明度不加单位
            } else if (attr == "zIndex") {
                //层级
                element.style[attr] = json[attr];
            } else {
                //正常属性值
                //获取现在的位置，字符串转为数值
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                //每次走的步数
                var step = (target - current) / 10;
                //小数时取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //移动后的位置
                element.style[attr] = current + "px";
            }

            //若有一个未到达目标值的，就设为false，已经到达目标值的，因为步数为0，所以原封不动
            if (current != target) {//注意是现在值和目标值变量的比较，不用json[attr]，以为属性是透明度时，json是小数，而current是小数的一百倍
                flag = false;
            }
        }
        //都到达目标值
        if (flag) {
            clearInterval(element.timeId);
            //调用下一个函数,若这个函数存在
            if (fn) {
                fn();
            }
        }
        console.log("目标值"+target+"，现在值"+current+"，步数"+step)
    }, 20);
}


//图片跟着鼠标飞（对象内存放多个函数）
var evtTools = {
    //（1）返回一个事件参数对象 不兼容问题（ie8不支持e)
    getEvent: function (e) {
        return window.event || e;
    },
    //（2）获取相对于页面的可视区的横坐标
    getClinetX: function (e) {
        return this.getEvent(e).clientX;
    },
    //（3）获取相对于页面的可视区的纵坐标
    getClientY: function (e) {
        return this.getEvent(e).clientY;
    },
    //（4）获取向上卷曲的纵坐标，相对于页面的
    getScrollTop: function () {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //（5）获取向左卷曲的纵坐标，相对于页面的
    getScrollLeft: function () {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //（6）获取相对于页面的横坐标（包括卷曲出去的+可视区的横坐标）
    getPageX: function (e) {
        return this.getEvent(e).pageX ? this.getEvent(e).pageX : this.getScrollLeft() + this.getClientX(e);
    },
    //（7）获取相对于页面的纵坐标（包括卷曲出去的+可视区的纵坐标）
    getPageY: function (e) {
        return this.getEvent(e).pageY ? this.getEvent(e).pageY : this.getScrollTop() + this.getClientY(e);
    }
};

//获取可视区的宽度（兼容代码）
function getClientWidth() {
    return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
}

//获取页面可视区的宽高度
function getClient() {
    return {
        width: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
    }
}


//返回指定格式的日期，字符串类型
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year = date.getFullYear();
    //获取月
    var month = date.getMonth() + 1;
    //获取日
    var day = date.getDate();
    //获取小时
    var hour = date.getHours();
    //获取分钟
    var minute = date.getMinutes();
    //获取秒
    var second = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    //拼接
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return strDate;
}


