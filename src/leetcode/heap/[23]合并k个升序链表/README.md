# 思路

1. 由于k个链表升序，我们可以想到建立小根堆，然后利用delMax，每次都把最小的链表的节点取出来
2. 小根堆需要建立的节点就是链表的个数，我们相当于每次k个当前节点的比较
3. 当小根堆不为空的时候，我们就delMax，拿出当前最小，然后组装起新链表
4. 当节点加入新链表后，我们判断链表的下一个节点是否为空节点，如果不为空节点，我们就加入小根堆进行排序操作
5. 重复以上的过程，直到小根堆为空，整个链表组装完毕，返回
