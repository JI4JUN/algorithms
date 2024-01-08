/*
 * @lc app=leetcode.cn id=442 lang=typescript
 * @lcpr version=30112
 *
 * [442] 数组中重复的数据
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function findDuplicates(nums: number[]): number[] {
  const res: number[] = []
  const set = new Set()

  for (const n of nums) {
    if (set.has(n)) {
      res.push(n)
    }
    set.add(n)
  }

  return res
}

// @lc code=end

/*
// @lcpr case=start
// [4,3,2,7,8,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
