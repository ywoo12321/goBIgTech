## DFS와 BFS

- 탐색이란 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정을 의미한다.
- 대표적인 그래프 탐색 알고리즘이 DFS, BFS이다.
- 매우 자주 등장하는 유형으로 `반드시 숙지`해야 한다.

## DFS

- 스택 자료구조를 사용하는 알고리즘이다.
- 그래프 혹은 트리에서 모든 노드를 한 번씩 탐색하기 위한 기본적인 방법이다.
- `완전 탐색`을 수행하기 위해 사용할 수 있는 가장 간단한 방법 중 하나다.

### 동작 원리

1. 시작 노드를 스택에 넣고 `방문 처리`한다.
2. 스택에 마지막으로 들어 온 노드에 `방문하지 않은 인접 노드`가 있는지 확인한다.
   - 있다면, 방문하지 않은 인접 노드를 스택에 `삽입 한 뒤 방문 처리`한다.
   - 없다면, 현재 노드(스택에 마지막으로 들어 온 노드)를 스택에서 추출한다.
3. 2번 과정을 더 이상 반복 할 수 없을 때까지 반복한다.

### 구현

- DFS를 실제로 구현할 때는 `stack 또는 재귀 함수`를 이용한다.
  - 재귀 함수는 내부적으로 스택과 동일한 동작 원리로, 구현의 편리성이 존재.
- 완전 탐색을 목적으로 하는 경우, 탐색 속도가 BFS보다 느린 경향이 있다.
- BUT 구현의 편리성 때문에 BFS를 대신해서 사용하는 경우가 많다.

### 사용 예시

- 더 짧은 코드로 간결히 구현해야 하는 경우
- Queue 라이브러리를 사용할 수 없는 경우
- 트리의 순회, 점화식 구현 등 DFS(재귀 구조)에 특화된 문제의 경우
- 트리에서 최단 거리 탐색을 구하는 경우
  - 트리에서는 두 노드를 잇는 경로가 하나만 존재한다.

```
graph = [
  [],
  [2, 3, 4],
  [1],
  [1, 5, 6],
  [1, 7],
  [3, 8],
  [3],
  [4],
  [5]
]
const dfs = (graph, v, visited) => {
  visited[v] = true;
  console.log(v);
  for(i of graph[v]){
    if(visited[i] == false){
      dfs(graph, i ,visited);
    }
  }
}

visited = Array(9).fill(false);
dfs(graph, 1, visited)
```
