# 思路

1. 按照会议的结束时间排序数组，结束时间早的排在前面，晚的排在后面
2. 定义一条时间轴timeline和参加会议的数量count
3. 遍历排序后的所有会议，当遍历到的会议的起始时间比时间轴晚，就添加count数量，表示可以参加，然后时间轴来到当前会议结束的时间
4. 遍历完所有会议，安排好后，返回count的数量是否等于所有会议的数量，如果等于说明可以参加所有会议，否则不行。
