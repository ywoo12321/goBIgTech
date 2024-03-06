# Coding Test에 사용되는 JS 기초 문법

### 연산

```
const a = 7;
const b = 3;

console.log(a + b); // 10
console.log(a - b); // 4
console.log(a * b); // 21
console.log(parseInt(a / b)); //몫 만 남기기 2
console.log(a % b); // 1
```

### 출력 TIP

- JS로 코딩 테스트 문제를 풀 때, 출력 과정만으로 시간 초과를 받을 수 있다.
- 출력 시간을 단축하기 위해 다음과 같은 방법을 사용하자

  ```
  let answer = '';

  for(let i = 1; i<=100; i++){
      answer += i + '\n';
  }

  console.log(answer);
  ```

- console.log는 다양한 기능을 가지고 있기 때문에, 하나당 한번씩 출력하는 것보다는 위와 같이 모아서 한번에 출력하는 것이 효과적이다.

### Array.prototype.reduce()

- 배열의 모든 원소에 대해 `특정한 연산을 순차적으로 적용`할 때 reduce()를 사용한다.

  ```
  let data = [5, 2, 9, 8, 4]

  let minValue = data.reduce((a,b) => Math.min(a,b));
  console.log(minValue); // 2

  let sumArray = data.reduce((a,b) => a + b);
  console.log(sumArray); // 28
  ```

- reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환한다.
- reducer의 형태

  - (accumulator, currentValue) => 반환 값
  - 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당.
  - return 된 반환 값은 그 이후의 원소에 대하여 accumulator에 저장된다.

- reduce 응용

```
let a = [10, 10, 2, 3, 4, 3, 5];
const aDictionary = a.reduce((acc,num)=>{
  acc[num] = (acc[num] || 0) + 1;
  return acc
},{});

console.log(aDictionary) // {'10' : 2, '2' : 1, '3' : 2, '4' : 1, '5' : 1}
```

### 배열 초기화 방법

1. 직접 값을 설정하여 초기화
   ```
   let arr = [8, 1, 4, 5, 7]
   ```
2. 길이가 n이고 모든 원소의 값이 x인 배열 초기화

   ```
   let arr = new Array(n).fill(x);
   ```

### 집합 자료형 (Set)

- 특정한 `원소의 등장 여부`를 파악할 때 집합 자료형(Set)을 효과적으로 사용 가능.

  ```
  let mySet = new Set();

  //여러 개의 원소 삽입
  mySet.add(4);
  mySet.add(5);
  mySet.add(6);
  mySet.add(7);
  mySet.add(8);
  mySet.add(4);

  console.log(`원소의 개수: ${mySet.size}`); // {4,5,6,7,8}로 5개
  console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}); // true
  // 원소 5 제거
  mySet.delete(5)

  // 원소를 하나씩 출력
  let answer = '';
  fot(let item of mySet){
    answer += item + '\n'
  }
  console.log(answer);
  ```

### 소수점 아래 특정 자리에서 반올림

- 실수를 출력할 때 소수점 아래 특정 자리에서 반올림하는 문제 존재

  ```
  // 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 x자리 까지 출력

  let x = 123.456;
  console.log(x.toFixed(2)); // 123.46
  ```

### Dictionary key 값을 가지고 있는지 확인

```
//1. hasOwnProperty
const hasKey = a.hasOwnProperty('10');
console.log(hasKey); // true

//2. in
const hasKey = '10' in a;
console.log(hasKey); // true

//3. includes
const hasKey = Object.keys(a).includes('10');
console.log(hasKey); // true
```

- 해당 방식에서 includes는 Object.key 배열을 메모리에 할당하기 때무넹 가장 비효율적이며, 1번이 속도가 가장 빠르다고 한다.
