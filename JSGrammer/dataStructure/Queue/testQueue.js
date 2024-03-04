const Queue = require("../dataStructure");

const testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.dequeue();
testQueue.enqueue(3);
testQueue.enqueue(4);
testQueue.enqueue(5);
testQueue.dequeue();
testQueue.enqueue(6);
testQueue.enqueue(7);
testQueue.dequeue();
testQueue.enqueue(8);
testQueue.dequeue();

console.log(Object.values(testQueue.items));
