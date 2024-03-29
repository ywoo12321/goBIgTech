# GO BIG TECH

### 최신 출제 경향

- 구현
- DFS/BFS(탐색)
- 탐욕 알고리즘

### 준비 방법

1. 알고리즘 유형별로 이론 및 핵심 문제 10개 이상 풀어보기
   - 대표적인 알고리즘 (정렬, DFS/BFS, 구현, 완전 탐색, 탐욕 알고리즘)
   - 나는 기본적으로 이론 자체가 부족한 느낌이 많이 들기 때문에 해당 강의를 신청함.
2. 원하는 기업의 기출 문제 풀기

### 시간 복잡도

- 시간 복잡도는 알고리즘의 성능을 나타내는 척도.
- 특정한 크기의 입력에 대하여 알고리즘의 수행 시간 분석
- 동일한 기능을 수행하는 알고리즘이 잇다면, 일반적으로 복잡도가 낮을수록 우수

  | 시간 복잡도      | 의미           |
  | ---------------- | -------------- |
  | O(1)             | 상수 시간      |
  | O(log N)         | 로그 시간      |
  | O(N)             | 선형 시간      |
  | O(N log N)       | 로그 선형 시간 |
  | O(N<sup>2</sup>) | 이차 시간      |
  | O(N<sup>3</sup>) | 삼차 시간      |
  | O(2<sup>N</sup>) | 지수 시간      |

### 설계 TIP

- 일반적인 CPU 기반의 개인 컴퓨터나 채점 목적의 컴퓨터를 고려
- JS 기준으로 `1억 번`의 연산을 처리하기 위해 `1~5초 가량의 시간 소요`
- O(N<sup>3</sup>) 알고리즘의 경우, N의 값이 5,000이 넘는다면 걸리는 시간은?
  - 최대 약 1250억의 연산
  - 1250초 ~ 6250초 (20 ~ 1시간 4분)
- 코딩 테스트 문제에서 시간 제한은 통상 1~5초 가량
  - 1억 번의 연산이 넘지 않도록 설정하는게 좋다.

### 요구사항에 따라 적절한 알고리즘 설계

- N의 범위가 500인 경우
  - 시간 복잡도가 O(N<sup>3</sup>)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 2,000인 경우
  - 시간 복잡도가 O(N<sup>2</sup>)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 100,000인 경우
  - 시간 복잡도가 O(N log N)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 10,000,000인 경우
  - 시간 복잡도가 O(N)인 알고리즘을 설계하면 문제를 풀 수 있다.
