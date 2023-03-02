"use strict"

const temperatures = [3,-2,-6,-1, "error",9,13,17,15,14,9,5];

function findAmplitude(arr){
    const newArr = [];
    for(let i = 0; i<arr.length; i++)
    {
        if (typeof arr[i] != 'string') 
        {
            newArr.push(arr[i]);
        }
        else 
        {
            continue;
        }
    }
    const maxArr = findMax(newArr);
    const minArr = findMin(...newArr);
    const amp = maxArr - minArr;
    return amp
}


function findMax(arr)
{
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i)
    if (arr[i] > max)
    {
        max = arr[i];
    }
    return max;

} 

function findMin(arr)
{
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) 
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}


console.log(findMin([-1,2,8,-7]))