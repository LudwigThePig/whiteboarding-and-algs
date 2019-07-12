const print = (expect, result) => console.log(`\nExpected: ${expect}\nReceived`, result);





const theBestDamnFunctionInTheWest = (arr, target) => {
  let result = 0;
  if (!arr.length) {
    return result;
  }
  if (n === 0) { return count }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result++;
    }
    return;
  }
  return result;
}

// console.log('Expect 1:\nReceived:',jordansFunction([1,2,3], 3));
// console.log('Expect 0:\nReceived:',jordansFunction([1,2,3], 4))
// console.log('Expect 0:\nReceived:',jordansFunction([], 420))

const anotherJordanFunction = (n, m) => {
  let result = {};
  for (let i = 0; i < n.length; i++) {
    result[n[i]] = m[i];
  }
  return result;
}
// console.log('Expect: e\nReceived:',theBestDamnFunctionInTheWest([], []));
// console.log('Expect 1:\nReceived:',theBestDamnFunctionInTheWest([1,2], [1,2]));

const evenIceCreamIsntAlwaysCool = ( n ) => {

  let count = 0;

  if (n === 0) { return count }

  const recurse = ( n ) => {
    if ( (n / 2) % 2 === 0) {
      count++;
      recurse( n / 2)
    }
    return;
  }
  recurse(n);

  return count;

}

// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(2));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(0));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(8));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(0));


function nFriends (n) {
  let friends = [];
  for (let i = 0; i < n; i++) {
    friends.push('i');
  }
  let groups = 0;
  const recurse = arr => {
    groups++;
    if (arr.length === 1) return;
    for (let i = 0; i< arr.length; i++) {
      recurse(arr.slice(0, i).concat(arr.slice(i+1)))
    }
  }
  recurse(friends);

  return groups;
} 

// console.log('Expect: 0\nReceived:',nFriends(4));

const letterCounter = (arr, target) => {
  let count = 0;
  arr.forEach(str => {
    for(let letter of str) {
      if (letter === target) {
        ++count;
      }
    }
  });
  return count;
}

// const letterCounterTest = letterCount(['a','a','a'], 'a')
// console.log('Expect: 3\nReceived:', letterCounter(['book'], 'o'));

const stringInc = char => {
  if (char === '-') return char;
  return (Number(char) + 1).toString();
}

const incDigits = (p, q) => {
  let pStr = p.toString();
  let qStr = q.toString();
  for (let i = 0; i < pStr.length; i++) {
    pStr = pStr.substr(0, i) + stringInc(pStr[i]) + pStr.substr(i); 
  } 
  for (let i = 0; i < qStr.length; i++) {
    qStr = qStr.substr(0, i) + stringInc(qStr[i]) + qStr.substr(i); 
  }
  console.log(qStr)
  return Number(pStr) + Number(qStr);
}
// console.log('Expect: 3\nReceived:', incDigits(11, 22));

const leastCurrency = (amt, cur) => {

  const recurse = (total, acc = []) => {
    if (total === 0) {
      return acc;
    }

    for (let i = cur.length - 1; i > -1; i--) {
      if (cur[i] < total) return recurse(total - cur[i], [cur[i], ...acc])
    }
  }
  return recurse(amt)
}
// console.log('Expect: \nReceived:', leastCurrency(26, [1, 5, 10, 25]));

const makeChange = (amount, arr) => {
  if (arr.includes(amount)) {
    return [amount];
  }

  let result = [];

  for (let i = arr.length -1; i >= 0; i--) {
    if (amount >= arr[i]) {
      result.push(arr[i]);
      amount -=  arr[i];
      if (!amount) break;
      i++
    }
  }
  return result;
}
// console.log('Expect: \nReceived:', makeChange(8, [1, 3, 5]));
// console.log('Expect: \nReceived:', makeChange(12, [1, 3, 5]));
// console.log('Expect: \nReceived:', makeChange(28, [1, 5, 10, 25]));


const arrRotate = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = arr.length - 1; j >= 0; j--){
      row.push(arr[j][i]);
    }
    output.push(row)
  }
  return output
}

const arrRotateT1 = arrRotate([[2,3], [4,5]]);

// print('rotated shit', arrRotateT1)


const srujsSpaceDestroyer = (str) => {
  if (str.length < 1) {
    return '';
  }
  let arr = str.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  const result = arr.join('');
  return result;
}

// print('Mr%20John%20Smith', srujsSpaceDestroyer('Mr John Smith'));
// print('Mr%20John%20Smith', srujsSpaceDestroyer('Mr John Smith '));
// print('', srujsSpaceDestroyer(''));
// print('     ', srujsSpaceDestroyer('           '));


// https://leetcode.com/problems/add-two-numbers/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  const before = new ListNode();
  let tail = before;
  let c = 0;

  while (l1 || l2 || c) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1+v2+c;

    tail.next = new ListNode(v%10);
    tail = tail.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1&&l1.next;
    l2 = l2&&l2.next;
  }

  return before.next;
};

// https://leetcode.com/problems/number-of-islands/

var numIslandsAttempt1 = function(grid) {
  let row = grid[0].length;
  let map = [].concat.apply([], grid);
  let islandCount = 0;
  
  // if land, '1'
  // if water, '0'
  // if counted landed, -1
  
  const checkNeighbors = (idx) => {
      const up = idx - row;
      if ( map[up] === '1' ){
          map[up] = -1;
          checkNeighbors(up);
      }
      
      const down = idx + row;
      if ( map[down] === '1' ){
          map[down] = -1;
          checkNeighbors(down);
          
      }
      
      const left = idx - 1;
      if ( map[left] === '1' ){
          map[left] = -1;
          checkNeighbors(left);

      }
      
      const right = idx + 1
      if ( map[right] === '1' ){
          map[right] = -1;
          checkNeighbors(right);
      }
      return map;
  }
  
  for (let i = 0; i < map.length; i++) {
      if (map[i] === '1') {
          map[i] = -1;
          islandCount++;
          checkNeighbors(i);
      }
  }  
  
  return islandCount;
};

var numIslandsAttempt2 = function(grid) {
  if (grid.length === 0) return 0;
  let islandCount = 0;
  
  const height = grid.length;
  const width = grid[0].length;
  const checkNeighbors = function(i, j) {
      if (i >= 0 && i < height && j >= 0 && j < width && grid[i][j] == "1") {
          grid[i][j] = "0";
          checkNeighbors(i + 1, j);
          checkNeighbors(i - 1, j);
          checkNeighbors(i, j + 1);
          checkNeighbors(i, j - 1);
      }
  };
  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (grid[i][j] == "1") {
              checkNeighbors(i, j);
              islandCount++;
          }
      }
  }
  return islandCount
};