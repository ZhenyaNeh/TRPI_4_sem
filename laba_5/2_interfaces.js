var rect1 = {
    id: '1234',
    size: {
        width: 12,
        height: 23
    },
    color: 'red'
};
var rect2 = {
    id: '122',
    size: {
        width: 32,
        height: 23
    }
};
rect2.color = "black";
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '233',
    size: {
        width: 32,
        height: 33
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
