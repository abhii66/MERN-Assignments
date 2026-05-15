// 4.find the min from the array 
let marks=[90,78,65,98]
let i=0
let minimum=marks[i]
//loop to iterate the array to find the minimum
for(i=1;i<marks.length;i++)
    //checks if the current element is minimum
    if(marks[i]<minimum)
        minimum=marks[i]
console.log(`minimum element is ${minimum}.`)
