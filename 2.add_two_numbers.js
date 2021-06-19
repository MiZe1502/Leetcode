function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers_1 = function (l1, l2) {
     let list = null
     let rest = 0;

     while (l1 || l2) {
          let l1val = l1 ? l1.val : 0
          let l2val = l2 ? l2.val : 0
          let val = l1val + l2val + rest
          rest = 0;

          val = "" + val;
          if (val.length > 1) {
               rest = Number(val[0]);
               val = Number(val[1])
          }

          list = new ListNode(val, list)
          l1 = l1 ? l1.next : null
          l2 = l2 ? l2.next : null
     }

     if (rest) {
          list = new ListNode(rest, list)
     }

     let resList = null;
     while(list) {
          resList = new ListNode(list.val, resList)
          list = list.next
     }


     return resList
}