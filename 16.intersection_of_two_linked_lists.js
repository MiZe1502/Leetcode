// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //brut-force solution
    while (headA) {
        let b = headB;
        while (b) {
            if (headA === b) {
                return headA;
            }
            b = b.next;
        }
        headA = headA.next;
    }
    return null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode_1 = function(headA, headB) {
    //use set to check intersection
    const hash = new Set();

    while (headA) {
        hash.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (hash.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }

    return null;
};


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode_2 = function(headA, headB) {
    // length of list A = a + c, length of list B = b + c, where c - intersected part
    // Thus a + c + b = b + c + a, we traverse over list A, then change pointer to
    // head of list B, and do the same for list B - traverse over it and then change
    // pointer to the head of A.
    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        if (pA === null) {
            pA = headB;
        } else {
            pA = pA.next;
        }

        if (pB === null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }

    return pA;
};