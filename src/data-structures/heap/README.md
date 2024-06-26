# 堆

堆是一棵完全二叉树（每一个节点每层从左往右按顺序放，直到放不下为止的二叉树）。因为这个性质，我们完全可以使用数组去存放堆中的每个节点并表示出来。对于用数组表示的堆，堆中的每个节点都有如下关系：

- 计算方式 1（好理解）： 忽略数组的第 0 位置，从第 1 位置开始存放节点
  - parent(i) = i / 2
  - leftChild(i) = 2 \* i
  - rightChild(i) = 2 \* i + 1
- 计算方式 2： 不忽略数组的第 0 位置，从第 0 位置开始存放节点
  - parent(i) = (i-1) / 2
  - leftChild(i) = 2 \* i + 1
  - rightChild(i) = 2 \* i + 2

## 最大堆

堆中某个节点的值总是大于等于它的左右孩子的值。

## 最小堆

堆中某个节点的值总是小于等于它的左右孩子的值。
