// 约瑟夫环 
// https://baike.baidu.com/item/%E7%BA%A6%E7%91%9F%E5%A4%AB%E7%8E%AF/348830?fr=aladdin
// 链表

var Node = function (value) {
  this.value = value
  this.next = null
}

var LL = function (headVal) {
  this.head = new Node(headVal)
  // 循环
  this.head.next = this.head
}

LL.prototype = {

  find (value) {
    let current = this.head
    while (current.value !== value) {
      current = current.next
    }
    return current
  },

  findPreview (value) {
    let current = this.head
    while (current.next.value !== value) {
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
    let head = this.head
    let current = this.find(value)
    let prev = this.findPreview(value)
    let next = current.next
    // 迭代head
    if (head === current) {
      this.head = next
    }
    prev.next = next
    current.next = null
    return next.value
  }

}

function test (n) {
  let ll = new LL(1)

  for (let i = 2; i < n; i++) {
    ll.insert(i, i - 1)
  }

  let value = 1
  while(ll.find(value).next.next !== ll.find(value)) {
    let next3 = ll.find(value).next.next
    value = ll.remove(next3.value)
  }

  ll.display()
}

test(41)

module.exports = test





