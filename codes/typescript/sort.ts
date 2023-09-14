/* 平方阶（冒泡排序） */

function bubbleSort(nums: number[]): number {
    let count = 0; // 计数器
    // 外循环：未排序区间为 [0, i]
    for (let i = nums.length -1; i > 0; i--) {
        // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
        for(let j = 0; j < i; j++){
            if(nums[j] > nums[j + 1]){
                // 交换 nums[j] 与 nums[j + 1]
                let tmp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tmp;
                count +=3; // 元素交换包含 3 个单元操作
            }
        }
    }
    return count;
}