// 约瑟夫环 
// https://baike.baidu.com/item/%E7%BA%A6%E7%91%9F%E5%A4%AB%E7%8E%AF/348830?fr=aladdin
// 链表

var Node = function (value) {
  this.value = value
  this.next = null
}

var LL = function (headVal) {
  this.head = new Node(headVal)
  // 双向和循环
  this.head.next = this.head
  this.head.prev = this.head
}

LL.prototype = {

  find (value) {
    let current = this.head
    while (current.value !== value) {
      current = current.next
    }
    return current
  },

  // 向后插入
  insert (newVal, curVal) {
    let newNode = new Node(newVal)
    let current = this.find(curVal)
    newNode.next = current.next
    newNode.prev = current
    current.next = newNode
  },

  display () {
    let current = this.head
    console.log(current.value)
    while (current.next.value !== this.head.value) {
      current = current.next
      console.log(current.value)
    }
  },

  remove (value) {
    let current = this.find(value)
    let next = current.next
    current.prev.next = next
    current.prev = null
    current.next = null
  },

  removeNext3 (value) {
    var current = this.find(value)
    current.next.next = current.next.next.next
    return current.next.next.value
  },

  length () {
    let len = 1
    let current = this.head
    while (current.next.value !== this.head.value) {
      current = current.next
      len++
    }
    return len
  },

  next2 (value) {
    let current = this.find(value)
    return current.next.next.value
  }

}


// test
var ll = new LL(1)
for (let i = 2; i < 6; i++) {
  ll.insert(i, i - 1)
}

var value = 1
while (ll.length() > 2) {
  value = ll.removeNext3(value)
}

// var next2 = 1
// while (ll.length() > 2) {
//   next2 = ll.next2(next2)
//   ll.remove(next2)
// }


ll.display()




