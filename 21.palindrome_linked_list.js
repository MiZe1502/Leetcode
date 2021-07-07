// Given the head of a singly linked list, return true if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return false;
    }

    if (!head.next) {
        return true;
    }

    let length = 0;

    let temp = head;
    while (temp) {
        length++;
        temp = temp.next;
    }

    const odd = length % 2 !== 0;

    let values = [];
    let i = 0;
    let j = -1;
    while (head) {
        if (odd && i === Math.floor(length / 2)) {
        } else if (i < length / 2) {
            values.push(head.val);
            j++;
        } else if (i >= length / 2) {
            if (values[j] !== head.val) {
                return false;
            } else {
                j--;
            }
        }

        head = head.next;
        i++
    }
    return true;
};