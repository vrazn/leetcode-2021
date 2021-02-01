
/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    if (needle === '') return 0;
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j = 0;
        
        // Found the potential start of the needle
        if (haystack[i] === needle[j]) {
            // check if the whole sequence is there
            let flag = true;
            while (flag === true && j < needle.length) {
                if (haystack[i + j] !== needle[j]) {
                    flag = false;
                    j = 0;
                } else {
                    j++;    
                }
            }
            if (flag === true) return i;
        }
    }
    return -1;
};
// @lc code=end

