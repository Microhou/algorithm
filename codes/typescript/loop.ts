/* while 循环（两次更新） */
function whileLoop2(n:number) {
    let res = 0;
    let i = 1;
    // 循环求和 1, 4, ...
    while(i <= n){
        res += i;
        i++;
        i *= 2;
    }

    return res;
}

console.log(whileLoop2(10));

function nestedForLoop(n: number): string {
    let res = '';
    // 循环 i = 1, 2, ..., n-1, n
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            res += `(${i}, ${j})`;
        }
    }
    return res;
}
console.log(nestedForLoop(10))