# 思路

栈

1. 当发现数字的时候压栈
2. 当发现是远算符号的时候，计算式子，分别弹出栈两个元素
3. 细节：注意减法和除法，被减数应该是num2，减数是num1；被除数应该是num2.除数是num1。另外由于js当中除法问题，所以碰到大于等于0要向下取整，否则向上取整
