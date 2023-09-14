# algorithm
learn Hello 算法

## 初始算法  
数据结构与算法的关系
* 数据结构是算法的基石。
* 算法是数据结构发挥作用的的舞台。
* 算法通常可以基于不同的数据结构进行实现，但执行效率可能相差很大，选择合适的数据结构是关键。
  
## 迭代和递归
1. for 循环，**适合预先知道迭代次数时使用** 
   ```ts
   function forloop(n: number): number{
    let res = 0;
    for(let i=1; i <= n; i++ ){
        res += i;
    }
    return res;
   }
    function whileloop(n: number):number{
        let res = 0;
        let i = 1
        while(i <= n){
            res += i;
            i++;
        }
        return res;
    }
   ```
## 递归
   1. 有趣的是，**如果函数在返回前的最后一步才进行递归调用**，则该函数可以被编译器或解释器优化，使其在空间效率上与迭代相当。这种情况被称为「尾递归 tail recursion」。
   2. 递归树 
        给定一个斐波那契数列 0, 1, 1, 2, 3, 5, 8 ...求该数列的第n 个数字。
