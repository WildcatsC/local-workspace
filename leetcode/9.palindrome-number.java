<<<<<<< HEAD
/*
 * @lc app=leetcode id=9 lang=java
 *
 * [9] Palindrome Number
 */

// @lc code=start
class Solution {  // ** (charAt) **
    public boolean isPalindrome(int x) {
        String s = new String();
        s = Integer.toString(x);
        int i = 0;
        int j = s.length()-1;
        while(i<=j){
            if(s.charAt(i) == s.charAt(j)){
                i++; 
                j--;
            }else{
                return false;
            }
        }
        return true; 
    }
}
// @lc code=end
