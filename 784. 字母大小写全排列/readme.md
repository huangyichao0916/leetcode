## 回溯中的字母大小写全排列问题

给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。


示例：
输入：S = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]

输入：S = "3z4"
输出：["3z4", "3Z4"]

输入：S = "12345"
输出：["12345"]

1. 循环字符串S，遇到数字就给path.push()，遇到字母就 for item of [大写字母，小写字母],然后摒弃当前循环
2. 只要遇到循环终止，说明path已经达到了S的长度，这个时候就可以 resArr.push(path) 了