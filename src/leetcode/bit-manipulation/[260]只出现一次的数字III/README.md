# 思路

1.先遍历一次，将所有数进行异或，结果一定是两个奇数次的数进行异或a^b（其他的因为是偶数次，异或结果是0）
2.a和b一定不等，说明a^b一定不为0（如果等，那a^b相当于两个a异或，就是0了）
3.既然a和b不等，那么在二进制上一定是有对应位置a是0，b是1，或者a是1，b是0
4.按照a和b某个位置对应二进制数不同，去划分整个数组，整个数组就被分成某个位置跟a的那个位置一样，某个位置跟b的那个位置一样的两坨数（此时不再管分成两边的数到底是奇数次还是偶数次了，只按照a和b某个位置不同，所有数都有这个位置，按这个位置划分）
5.因为这个位置要么是1，要么是0，我们把数组所有数划分成了两个阵营（跟b一样在指定位置同样为同一个数的（假设为1），另一部分就是跟a一样在指定位置一样是0的）
6.再利用一个变量，只去异或跟b一样位置是1（假设）的阵营，不去碰这个位置是0的另个阵营的那堆数。异或后的结果就提取出了b
7.再使用此时的变量去异或之前的变量，a就被提取出来了
8.注意：这个某个位置到底是哪个位置？我们选第一次异或的变量中的最右侧的1

## 预备知识

1.~N,即N取反，意思就是原本二进制位是0就变成1,1就变成0
2.X&Y，即X与Y，意思就是两个二进制数对应位置的数，与的结果就是，对应位置的数相同才得1，不同得0
3.~N+1，即N取反加1，结果就是原来的N的二进制除了最右边的1留下其他全部取反
问题：从一个二进制数中，提取出最右边的1出来
答案：N&(~N+1)，即N与上（N的取反加上1）。
原因：~N+1，即N取反加1，结果就是原来的N的二进制除了最右边的1留下其他全部取反。再与上N，此时相当于除了操作过后某个位置的1被保留，其他都被取反，此时去与的结果就是保留下那个1而已。

理解异或运算：想成二进制数不进位的相加，1+1变成0后，也不进1直接就是0
