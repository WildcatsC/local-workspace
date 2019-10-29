import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=15 lang=java
 *
 * [15] 3Sum
 */

// @lc code=start
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // 61b作业 继续暴力来一波
        List<List<Integer>> result = new ArrayList<List<Integer>>();

        int len = nums.length;
        int[] num1 = nums;
        int[] num2 = nums;
        int[] num3 = nums;

        for(int i=0; i<len; i++){
            for(int j=0; j<len; j++){
                for(int k=0; j<len; k++) 
                    if(num1[i]+num2[j]+num3[k]==0){
                        List<Integer> temp = new ArrayList<>(3);
                        temp = {num1[i],num2[j],num3[k]}
                    }
            }
        }
        return null;
    }
}
// @lc code=end
