// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // Implement your solution here
  console.log("rotate", A, ", ", K, " times.");
  for (let i = 1; i <= K; i++) {
    let temp = 0;
    let temp2 = 0;
    if (i === 1) {
      console.log("loop count:", i);
      for (let n = 0; n < A.length; n++) {
        if (n === 0) {
            let j = n+1
            console.log(`temp2 ----->`, temp2);
            
            temp = A[A.length-1]
            temp2 = A[j]
            A[j] = A[n]
            A[n] = temp
            
            console.log("                   in the ifs", A);
            console.log(`temp2 ----->`, temp2, 'from index', j, 'now A[j] has:', A[j]);
        } else if (n === 1){
            j = n+1
            console.log('when n is:', n, 'It holds A[n] value of:', A[n])
            console.log(`temp ----->`, temp);

            console.log(A)
            temp = A[n]
            A[n] = A[n-1]
            A[j] = temp
            console.log(A)
        }
      }
    }
    // console.log(A, "here");
  }
}

// solution([3, 8, 9, 7, 6], 3);
// solution([0, 0, 0], 1);
solution([1, 2, 3, 4], 4);
