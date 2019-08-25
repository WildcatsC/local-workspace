# @lc app=leetcode id=14 lang=python
#
# [14] Longest Common Prefix
#
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        ans = ""
        for str in zip(*strs):  # super simple ZIP 
            if len(set(str))==1:
                ans+= str[0]
            else:
                break
        return ans

