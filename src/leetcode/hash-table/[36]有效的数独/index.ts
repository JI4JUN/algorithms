/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rowMap = new Map<number, Set<string>>()
  const colMap = new Map<number, Set<string>>()
  const boxMap = new Map<string, Set<string>>()

  const rows = board.length
  const cols = board[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!rowMap.has(i)) {
        rowMap.set(i, new Set())
      }
      if (!colMap.has(j)) {
        colMap.set(j, new Set())
      }
      if (!boxMap.has(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)) {
        boxMap.set(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`, new Set())
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const target = board[i][j]
      if (target != '.') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          rowMap.get(i)!.has(target) ||
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          colMap.get(j)!.has(target) ||
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.has(target)
        ) {
          return false
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        rowMap.get(i)!.add(target)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        colMap.get(j)!.add(target)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        boxMap.get(`${Math.floor(i / 3)}-${Math.floor(j / 3)}`)!.add(target)
      }
    }
  }

  return true
}

// @lc code=end

export { isValidSudoku }
