let numberArray=[2,7,4,3,99,100]
function even(array){
    let evenArray=[]
    console.log('2.09: before even() -function: '+array)
    for(let i=0;i<array.length;i++){
        //console.log('2.09 log: '+array[i]+' = '+array[i]%2)
        if (array[i] %2 ===0){
            evenArray.push(array[i])
        }
    }
    console.log('2.09: after even() -function: '+evenArray)
}

even(numberArray)