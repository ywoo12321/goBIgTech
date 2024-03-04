## 큐 (Queue)

- 먼저 삽입된 데이터가 먼저 추출되는 자료 구조이다. (FIFO : First in First out)
- ex) 게임 대기 큐, 영화관 줄 : 먼저 대기한 사람이 먼저 행동을 하는 것

### 연결리스트로 Queue 구현

- 연결리스트로 queue를 구현하면, 삽입과 삭제에 있어서 O(1) 시간 복잡도를 보장 함.
- 연결리스트로 구현할 때, head와 tail에 두개의 포인터를 가진다.

### Queue 동작 속도 : Array vs Linked List

- JS에서는 Dictonary 자료형을 이용하여 구현 가능.

```
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
```
