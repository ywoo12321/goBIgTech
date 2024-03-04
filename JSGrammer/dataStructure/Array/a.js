const Queue = require("../queue");

const a = new Queue();

a.enqueue(1);
a.enqueue(2);
a.dequeue();
a.enqueue(3);
a.enqueue(4);
a.enqueue(5);
a.dequeue();
a.enqueue(6);
a.enqueue(7);
a.dequeue();
a.enqueue(8);
a.dequeue();

console.log(a);
