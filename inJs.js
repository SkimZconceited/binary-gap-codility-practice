// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    let gap = 0
    let maxGap = 0
    let maxGap2 = 0
    
    const binary = N.toString(2)

    console.log(parseInt(binary), 'for the number:', N)
    binaryList = binary.split('')

    console.log(binaryList)
    
    for(let n = 0; n < binaryList.length; n++){
        console.log('index',n, '-----------------------------------')
        if (binaryList[n] === '0'){
            console.log('Start of if all___________________________________start...')
            console.log('prev n', parseInt(binaryList[n-1]), 'current n', parseInt(binaryList[n]), 'next n', parseInt(binaryList[n+1]))
            console.log('the maxGap(before)', maxGap)
            console.log('the maxGap2(before)', maxGap2)
            console.log('incremeting gap from - ', gap)
            console.log('to - ', gap)
            gap++
            maxGap = Math.max(maxGap, gap)
            // maxGap2 = Math.max(maxGap2, maxGap) // redundant code
            console.log('the maxGap(after)', maxGap)
            console.log('the maxGap2(after)', maxGap2)
            if (n < binaryList.length - 1 && binaryList[n+1] === '1'){ // when in the second last element thats where it checks for the next element(last) on the list. Then backs up the max in maxGap2 (all elements passing here are 1's and they trigger backing up of the count
                console.log('----------------Start INNER IF---------------...')
                console.log('next value is:', parseInt(binaryList[n+1]))
                maxGap2 = Math.max(maxGap2, maxGap)
                gap = 0
                console.log('the maxGap:', maxGap)
                console.log('the maxGap2:', maxGap2)
            console.log('----------------End INNER IF---------------')
        } else {
            console.log('----------------Start ELSE---------------...')
            maxGap = 0
            console.log('----------------End ELSE---------------')
        }
            
            // if(binaryList[n+1] === '1' || )
            console.log('end of if___________________________________end.')

        }
        console.log(maxGap2, 'the maxgap final.')
    }
}

// solution(1041)
// solution(32)
// solution(6)
// solution(328)