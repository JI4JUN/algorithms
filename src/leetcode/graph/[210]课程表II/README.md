# 思路

1. 根据题意，有依赖的课程数组可以看成一个有向图（至于图是不是有环，需要通过拓扑排序得结果）
2. 进行建图操作，将题目给的图数据转换成熟悉的图结构
3. 利用建立的图进行拓扑排序
4. 将拓扑排序得结果跟图的节点进行比较，大小一致说明拓扑排序完全，否则说明有环
5. 如果有环，说明有的课程循环依赖，没法进行完成所有课程，代码表现就是排序结果大小跟图节点不一致，直接返回false；
6. 遍历课程数，如果图节点不包含这门课程，说明不具有依赖这个课程，添加到orders尾部即可（题目说了不限制正确顺序）
7. 返回orders数组，这就是课程顺序
8. 特判：如果没有依赖课程，直接遍历numCourses，返回课程数组即可（代码中第一段的特判）
