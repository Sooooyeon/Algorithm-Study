//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// n	    result
// 3628800	10
// 7	       3

function solution(n){ //n이 3628800일때 2부터 계속 곱해서 n이 되는 순간 i를 출력
  let ans = 1;
  for(let i = 2; i <= n; i++){
    ans *= i; // ans = 2 , ans = 6, ans =  24
    
    if(ans === n){
      return i;
    }
    if(ans > n){  // 24 > 7
      return i - 1;
    }
  }
}
console.log(solution(7));

// 1 부터 n 까지의 곱

// 7을 만들기 위해 
// 2부터 곱해나감
// 2 * 3 * 4  > n 이때 i - 1(3)을 출력

// 3628800 = 2 * 3 * 4 ... * 10;


