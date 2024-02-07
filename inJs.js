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
        if (n < binaryList.length - 1 && binaryList[n] === '0'){
            console.log('Start of if all___________________________________start...')
            console.log('prev n', parseInt(binaryList[n-1]), 'current n', parseInt(binaryList[n]), 'next n', parseInt(binaryList[n+1]))
            console.log('the maxGap(before)', maxGap)
            console.log('the maxGap2(before)', maxGap2)
            console.log('incremeting gap from - ', gap)
            gap++
            console.log('to - ', gap)
            maxGap = Math.max(maxGap, gap)
            maxGap2 = Math.max(maxGap2, maxGap)
            console.log('the maxGap(after)', maxGap)
            console.log('the maxGap2(after)', maxGap2)
            if (binaryList[n+1] === '1'){
                console.log('----------------Start INNER IF---------------...')
                console.log('next value is:', parseInt(binaryList[n+1]))
                maxGap = Math.max(maxGap, gap)
                gap = 0
                // maxGap = Math.max(maxGap, gap)
                maxGap2 = Math.max(maxGap2, maxGap)
                console.log(binaryList[n-1], 'back')
                console.log(binaryList[n], 'now')
                console.log(binaryList[n+1], 'next')
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
        if (n === binaryList.length - 1 && binaryList[n] === '0'){
            console.log('----------------Start SIBLING IF---------------...')
            maxGap2 = 0
            console.log('----------------End SIBLING IF---------------...')
        }
        console.log(maxGap2, 'the maxgap final.')
    }
}

solution(1041)
// solution(32)
// solution(6)
// solution(328)