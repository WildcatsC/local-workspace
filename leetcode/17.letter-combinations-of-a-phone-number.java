import java.util.*;

/*
 * @lc app=leetcode id=17 lang=java
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
class Solution {
    public List<String> letterCombinations(String digits) {
        Map<Integer, String> numToletter = new HashMap<>(){{
            put(2, "abc");
            put(3, "def");
            put(4, "ghi");
            put(5, "jkl");
            put(6, "mno");
            put(7, "pqrs");
            put(8, "tnv");
            put(9, "wxyz");
        }
        };

        List<String> letters = new ArrayList<>();

        for(int i = 0; i<digits.length(); i++){
            letters.add(i, numToletter.get(i));
        }
        
        int size = letters.size();

        List<String> result = new ArrayList<>();
        
        return null;
    }

    public static List<String> recursor(List<String> list, int size){

        List<String> result = new ArrayList<>();

        if(size == 0) return result;
        if(size == 1) return list;

        if(size == 2){
            for(int i = 0; i < list.get(0).length(); i++){
                for(int j = 0; j < list.get(1).length(); j++){
                    result.add(i+j, list.get(0).substring(i,i+1) + list.get(1).substring(j,j+1));
                }
            }
            return result;
        }
        
        List<String> first = list.subList(0, 1);
        List<String> next = list.subList(1,list.size());
        
        return 
    }
}
// @lc code=end

