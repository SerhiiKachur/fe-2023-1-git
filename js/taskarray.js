const firstTaskArr = new Array(1, 2, 3);
firstTaskArr.push(6,5,4);
firstTaskArr.unshift(-3,-2,-1);
console.log(firstTaskArr);


const secondTaskArr = new Array(100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10);
secondTaskArr.pop();
secondTaskArr.pop();
secondTaskArr.shift();
secondTaskArr.shift();
console.log(secondTaskArr);


const thirdTaskArr = new Array(1, 2, 3, 4, 5);
thirdTaskArr.splice(1,2);
console.log(thirdTaskArr);

const fourthTaskArr = new Array(1, 2, 3, 4, 5);
const newFourthTaskArr = fourthTaskArr.splice(1,3);
console.log(newFourthTaskArr);

const fifthTaskArr = new Array(1, 2, 3, 4, 5);
fifthTaskArr.splice(3,0, 'a','b','c');
console.log(fifthTaskArr);


const sixthTaskArr = new Array(1, 2, 3, 4, 5);
sixthTaskArr.splice(1,0,'a','b');
sixthTaskArr.splice(6,0,'c');
sixthTaskArr.splice(8,0,'e');
console.log(sixthTaskArr);


