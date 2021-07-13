// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = new ListNode();
    let temp = current;

    while (head !== null) {
        if (head.val !== val) {
            current.next = head;
            current = current.next;
        }

        head = head.next;
    }
    current.next = null;

    return temp.next
};