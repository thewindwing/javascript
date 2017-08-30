/**
 * Created by xiaoleixin on 2017/6/25.
 */

function $id(id) {
    return document.getElementById(id);
}


//�������
//��������һ��Ԫ�ص��ı�����
function setInnerText(element, text) {
    //��������������в�֧��
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        //�����֧��
        element.textContent = text;
    }
}
//��ȡ����һ��Ԫ�ص��ı�����
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//��ȡ��ǰԪ�ص���һ��Ԫ��
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
//��ȡ��ǰԪ�ص���һ��Ԫ��
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
//��ȡ��Ԫ�صĵ�һ����Ԫ��
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
//��ȡ��Ԫ�ص����һ����Ԫ��
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
//��ȡ��ǰԪ�ص��ֵ�Ԫ��
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

//��ȡ��һ��Ԫ�ص�ָ��λ�õ��ƶ�
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //��ȡԪ�صĵ�ǰλ��
        var current = element.offsetLeft;
        var step = 10;
        //�ж�step������
        step = target > current ? step : -step;
        current += step;
        element.style.left = current + "px";
        if (Math.abs(target - current) < Math.abs(step)) {
            element.style.left = target;
            clearInterval(element.timeId);
        }
    }, 20);
}

//ͨ��id��ȡҳ���е�Ԫ��
function $id(id) {
    return document.getElementById(id);
}


//�������
//��������һ��Ԫ�ص��ı�����
function setInnerText(element, text) {
    //��������������в�֧��
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        //�����֧��
        element.textContent = text;
    }
}
//��ȡ����һ��Ԫ�ص��ı�����
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//��ȡ��ǰԪ��ǰһ��Ԫ��
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
//��ȡ��ǰԪ�صĺ�һ��Ԫ��
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

//��ȡ��Ԫ���еĵ�һ��Ԫ��
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
//��ȡ��Ԫ���е����һ��Ԫ��
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

//��ȡ�ֵ�Ԫ��
function getsiblings(ele) {
    if (!ele)return;//�жϵ�ǰ��ele���Ԫ���Ƿ����
    var elements = [];//���������Ŀ�ľ��Ǵ洢��ǰ���Ԫ�ص����е��ֵ�Ԫ��
    var el = ele.previousSibling;//��ǰԪ�ص�ǰһ���ڵ�
    while (el) {
        if (el.nodeType === 1) {//Ԫ��
            elements.push(el);//�ӵ�������
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

//��ȡ��һ��Ԫ�ص�Ŀ��λ�õ��ƶ�
function animate1(element, target) {
    //���ж���û�������ʱ��������о�������ٵ��ʱ�����´����Ķ�ʱ��
    clearInterval(element.timeId);
    //�ö�������ԣ�������ʱ����id������֤���id�������Զ����������Լ��ģ�������������������ͻ
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


//��װҳ���������ĺ���
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    };
}


//��װ��һԪ�ػ�����Ŀ��ֵ�ö�������
function slowAnimate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        //����Ч��
        var step = (target - current) / 10;
        //��stepΪС��ʱ������ȡ��
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            //��current�ӽ�targetʱ������stepС��10ʱ��step�ľ���ֵ�Ѿ���С��1 ��������������ȡ������1����󼸲�һֱ����1�����Բ������current������target�����
            clearInterval(element.timeId);
        }
        //���Դ���
        console.log("Ŀ��λ�ã�" + target + "������λ�ã�" + current + "������:" + step);
    }, 10);
}


//��ȡ��һԪ�ص�ĳһ����ʽ���Ե�ֵ�����������⣩
function getStyle(element, attr) {
    //�ȸ�֧��
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        //IE8֧��
        return element.currentStyle[attr];
    }
}//����ֵ��һ���ַ���

//��װ����Ч������Ԫ�ص���һ������
function slowAnimateAttr(element, attr, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //getStyle()���ص���һ���ַ�����תΪ�����ټ���
        var current = parseInt(getStyle(element, attr));
        //����Ч��
        var step = (target - current) / 10;
        //��stepΪС��ʱ������ȡ��
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
        if (current == target) {
            //��current�ӽ�targetʱ������stepС��10ʱ��step�ľ���ֵ�Ѿ���С��1 ��������������ȡ������1����󼸲�һֱ����1�����Բ������current������target�����
            clearInterval(element.timeId);
        }
        //���Դ���
        console.log("Ŀ��λ�ã�" + target + "������λ�ã�" + current + "������:" + step);
    }, 10);
}

//��װ�����������������Ӷ����ʽ����
function jsonSlowAnimate(element, json) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ������Ŀ��ֵ������
        var flag = true;
        //����json�����ÿһ������
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr));
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[attr] = current + "px";
            //����һ�����ﵽĿ��ֵ������Ϊfalse���Ѿ��ﵽĿ���stepֵ��Ϊ0������ôǰ��Ҳ��ԭ�ⲻ��
            if (current != json[attr]) {
                flag = false;
            }
        }
        //���ﵽĿ��ֵ
        if (flag) {
            clearInterval(element.timeId);
        }

    }, 20);

}


//��װ��������������ΪԪ�������������ʽ���ص�����
function slowAnimateAttrs(element, json, fn) {
    //������еĶ�ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ���ﵽĿ��ֵ������
        var flag = true;
        //����json��ÿ������
        for (var attr in json) {
            //��ȡ���ڵ�λ�ã��ַ���תΪ��ֵ
            var current = parseInt(getStyle(element, attr));
            //ÿ���ߵĲ���
            var step = (json[attr] - current) / 10;
            //С��ʱȡ��
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            //�ƶ����λ��
            element.style[attr] = current + "px";
            //����һ��δ����Ŀ��ֵ�ģ�����Ϊfalse���Ѿ�����Ŀ��ֵ�ģ���Ϊ����Ϊ0������ԭ�ⲻ��
            if (current != json[attr]) {
                flag = false;
            }
        }
        //������Ŀ��ֵ
        if (flag) {
            clearInterval(element.timeId);
            //������һ������
            fn();
        }
    }, 20);
}


//��װ��������������ΪԪ�������������ʽ���ص�����,��͸���ȺͲ㼶
function animateFull(element, json, fn) {
    //������еĶ�ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ���ﵽĿ��ֵ������
        var flag = true;
        //����json��ÿ������
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = ( target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;//ע��͸���Ȳ��ӵ�λ
            } else if (attr == "zIndex") {
                //�㼶
                element.style[attr] = json[attr];
            } else {
                //��������ֵ
                //��ȡ���ڵ�λ�ã��ַ���תΪ��ֵ
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                //ÿ���ߵĲ���
                var step = (target - current) / 10;
                //С��ʱȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //�ƶ����λ��
                element.style[attr] = current + "px";
            }

            //����һ��δ����Ŀ��ֵ�ģ�����Ϊfalse���Ѿ�����Ŀ��ֵ�ģ���Ϊ����Ϊ0������ԭ�ⲻ��
            if (current != target) {//ע��������ֵ��Ŀ��ֵ�����ıȽϣ�����json[attr]����Ϊ������͸����ʱ��json��С������current��С����һ�ٱ�
                flag = false;
            }
        }
        //������Ŀ��ֵ
        if (flag) {
            clearInterval(element.timeId);
            //������һ������,�������������
            if (fn) {
                fn();
            }
        }
        console.log("Ŀ��ֵ"+target+"������ֵ"+current+"������"+step)
    }, 20);
}


//ͼƬ�������ɣ������ڴ�Ŷ��������
var evtTools = {
    //��1������һ���¼��������� ���������⣨ie8��֧��e)
    getEvent: function (e) {
        return window.event || e;
    },
    //��2����ȡ�����ҳ��Ŀ������ĺ�����
    getClinetX: function (e) {
        return this.getEvent(e).clientX;
    },
    //��3����ȡ�����ҳ��Ŀ�������������
    getClientY: function (e) {
        return this.getEvent(e).clientY;
    },
    //��4����ȡ���Ͼ����������꣬�����ҳ���
    getScrollTop: function () {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //��5����ȡ��������������꣬�����ҳ���
    getScrollLeft: function () {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //��6����ȡ�����ҳ��ĺ����꣨����������ȥ��+�������ĺ����꣩
    getPageX: function (e) {
        return this.getEvent(e).pageX ? this.getEvent(e).pageX : this.getScrollLeft() + this.getClientX(e);
    },
    //��7����ȡ�����ҳ��������꣨����������ȥ��+�������������꣩
    getPageY: function (e) {
        return this.getEvent(e).pageY ? this.getEvent(e).pageY : this.getScrollTop() + this.getClientY(e);
    }
};

//��ȡ�������Ŀ�ȣ����ݴ��룩
function getClientWidth() {
    return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
}

//��ȡҳ��������Ŀ�߶�
function getClient() {
    return {
        width: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
    }
}


//����ָ����ʽ�����ڣ��ַ�������
function getDatetoString(date) {
    var strDate;//�洢���ڵ��ַ���
    //��ȡ��
    var year = date.getFullYear();
    //��ȡ��
    var month = date.getMonth() + 1;
    //��ȡ��
    var day = date.getDate();
    //��ȡСʱ
    var hour = date.getHours();
    //��ȡ����
    var minute = date.getMinutes();
    //��ȡ��
    var second = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    //ƴ��
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return strDate;
}


