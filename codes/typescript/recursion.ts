function recu(n: number) {
     // 终止条件
    if(n === 1){
        return 1
    }
    // 递：递归调用
    const res = recu(n - 1);
    // 归：返回结果
    return res + n;
}

//尾递归
function tailRecur(n: number, res: number):number {
    // 终止条件
    if (n === 0) return res;
    // 尾递归调用
    return tailRecur(n -1, res + n);
}
// 设斐波那契数列
// 设斐波那契数列的第 n个数字为f(n)，易得两个结论。 f(1) = 0 和 f(2) = 1;
// 数列中的每个数字是前两个数字的和，即f(n) = f(n -1) + f(n -2);

function fib(n: number) {
    // 终止条件 f(1) = 0, f(2) = 1
    if(n === 1 || n === 2) return n - 1;
    // 递归调用 f(n) = f(n-1) + f(n-2)
    const res = fib(n - 1) + fib(n - 2);
    // 返回结果 f(n)
    return res;
}

