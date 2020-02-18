/*
 * @lc app=leetcode id=19 lang=java
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode runner, last;  // runner run to end, last at (n-1)th node
        runner = last = head;
        if(head.next == null) return null;

        int count = 1;
        
        while(count!=n+1 && runner.next!=null){
            runner = runner.next;
            count++;
        }
        if(count!=n+1 && runner.next == null) return head=head.next;
        
        while(runner.next!=null){
            runner = runner.next;
            last = last.next;
        }
        last.next = last.next.next;
        return head;
    
    }
}
// @lc code=end

