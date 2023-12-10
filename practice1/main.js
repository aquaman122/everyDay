// 교집합
// Set.prototype.intersection = function (set) {
//   const result = new Set();

//   for(const value of set) {
//     if (this.has(value)) result.add(value);
//   }
//   return result;
// };

// const setA = new Set(['a', 'b', 'c', 'd']);
// const setB = new Set(['b', 'd']);

// console.log(setA.intersection(setB)); // Set(2) { 'b', 'd' }
// console.log(setB.intersection(setA)); // Set(2) { 'b', 'd' }

// Set.prototype.intersection = function (set) {
//   return new Set([...this].filter(v => set.has(v)));
// };

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);

// console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
// console.log(setB.intersection(setA)); // Set(2) { 2, 4 }

// 교집합

// 차집합 difference

// Set.prototype.difference = function (set) {
//   // this(Set 객체)를 복사
//   const result = new Set(this);
  
//   for (const value of set) {
//     result.delete(value);
//   }
//   return result;
// };

// const setA = new Set(['a', 'b', 'c', 'd']);
// const setB = new Set(['b', 'd']);

// console.log(setA.difference(setB)); // Set(2) { 'a', 'c' }
// console.log(setB.difference(setA)); // Set(0) {}

// Set.prototype.union = function (set) {
//   const result = new Set(this);

//   for (const value of set) {
//     result.add(value);
//   }

//   return result;
// };

// const setA = new Set(['a', 'b', 'c', 'd']); 
// const setB = new Set(['b', 'd']);

// console.log(setA.union(setB)); // Set(4) { 'a', 'b', 'c', 'd' }
// console.log(setB.union(setA)); // Set(4) { 'b', 'd', 'a', 'c' }

// const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map1); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// const map2 = new Map([1, 2]); //TypeError: Iterator value 1 is not an entry object

// const Jang = { name : 'Jang' };
// const Kim = { name : 'Kim' };

// const map = new Map([[Jang, 'developer'], [Kim, 'designer']]);

// map.forEach((v, k, map) => console.log(v, k, map));
// /*
//  v는 현재 순회중인 요소값인 developer를
//  k는 현재 순회중인 요소키인 {name : "Jang"}를
//  map은 Map 객체 자체를 가져온다

// developer { name: 'Jang' } Map(2) {
//    { name: 'Jang' } => 'developer',
//    { name: 'Kim' } => 'designer'
//  }
//  designer { name: 'Kim' } Map(2) {
//    { name: 'Jang' } => 'developer',
//    { name: 'Kim' } => 'designer'
//  }
// */