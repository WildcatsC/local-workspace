import java.util.*;
// 这个肯定就要用hash来确认找unique了

/*
 * @lc app=leetcode id=15 lang=java
 *
 * [15] 3Sum
 */

// @lc code=start


class Solution {

    public List<List<Integer>> threeSum(int[] nums) {
       // 61b作业 继续暴力来一波
       Arrays.sort(nums);
       System.out.println(Arrays.toString(nums));
       Set<List<Integer>> temp_re = new HashSet<List<Integer>>();
       int len = nums.length;

       int[] num1 = nums;
       int[] num2 = nums;
       int[] num3 = nums;
//        int i,j,k;

       for (int i = 0; i < len; i++) {
           for (int j = i + 1; j < len; j++) {
               for (int k = j + 1; k < len; k++) {
                   if (num1[i] + num2[j] + num3[k] == 0 ) {

                       List<Integer> test = new ArrayList<>(3);
                       test.add(num1[i]);
                       test.add(num2[j]);
                       test.add(num3[k]);
                       temp_re.add(test);
                   }
               }

           }

        }
       len = temp_re.size();
       List<List<Integer>> result = new ArrayList<List<Integer>>(len);
       for(List i : temp_re) result.add(i);

       return result;
    }
}

// @lc code=end
