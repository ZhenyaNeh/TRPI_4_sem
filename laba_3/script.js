"use strict";
//
//-Task_1
//
function createPhoneNumber(num) {
    const areaCode = num.slice(0, 3).join('');
    const firstPart = num.slice(3, 6).join('');
    const secondPart = num.slice(6, 10).join('');
    return `\n(${areaCode}) ${firstPart}-${secondPart}\n`;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 3, 3];
const phone = createPhoneNumber(arr);
console.log('\nTask_1' + phone);
//
//-Task_2
//
class Challange {
    static solution(number) {
        if (number < 3)
            return 0;
        let sum = 0;
        for (let i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                if (sum + i > number)
                    return sum;
                sum += i;
            }
        }
        return sum;
    }
}
console.log('Task_2 \nResult sum: ' + Challange.solution(10) + '\n');
//
//-Task_3
//
function rotateRight(arr, roat) {
    for (let j = 0; j < roat; j++) {
        let lastNumber = arr[arr.length - 1];
        for (let i = arr.length - 1; i > 0; i--)
            arr[i] = arr[i - 1];
        arr[0] = lastNumber;
    }
    return arr;
}
const nums = [1, 2, 3, 4, 5, 6, 7];
const roat = 3;
console.log('Task_3 \nResult array: \n' + rotateRight(nums, roat) + '\n');
//
//-Task_4
//
function mergeSortArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    return merged.sort((a, b) => a - b);
}
function searchMedian(arr1, arr2) {
    const arrForMedian = mergeSortArrays(arr1, arr2);
    let count = arrForMedian.length;
    if (count % 2 === 0) {
        return ((arrForMedian[count / 2] + arrForMedian[count / 2 - 1]) / 2);
    }
    return arrForMedian[Math.floor(count / 2)];
}
const nums1 = [1, 3];
const nums2 = [20];
const nums3 = [2, 4];
console.log('Task_4 \nResult median: ' + searchMedian(nums1, nums2));
console.log('Result median: ' + searchMedian(nums1, nums3) + '\n');
