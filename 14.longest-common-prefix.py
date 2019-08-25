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
        for str in zip(*strs):      # super simple ZIP; single star unpack strings, iterably. 
                                    # zip(*str) == {('str[0][0]','str[1][0]',...),(str[0][1],str[1][1])....} 
                if len(set(str))==1:
                ans+= str[0]
            else:
                break
        return ans

