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

        int len = nums.length - 1;
        System.out.println(len);
        int[] num1 = nums;
        int[] num2 = nums;
        int[] num3 = nums;

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                for (int k = 0; k < len; k++) {
                    if (num1[i] + num2[j] + num3[k] == 0 && num1[i] != num2[j] && num2[j] != num3[k]
                            && num3[k] != num1[i]) {
                        List<Integer> temp = new ArrayList<>(3);
                        temp.add(0, num2[i]);
                        temp.add(1, num2[j]);
                        temp.add(2, num3[k]);
                        result.add(temp);
                    }
                }
            }
        }
        return result;
    }
}

// @lc code=end
