// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp = head;
    while (head) {
        if (!head.next) {
            break;
        }

        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return temp;
};