/**
 * Time complexity O(N²)
 * Space complexity O(1)
 * @param {*} height[]
 * @returns maxArea
 */
const maxAreaBruteForce = (height) => {
    let maxArea = 0;
    const n = height.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            maxArea = Math.max(Math.min(height[i], height[j]) * (j - i));
        }
    }
    return maxArea;
};

console.log(maxAreaBruteForce([1, 2, 1]));

/**
 * Time complexity O(N)
 * Space complexity O(1)
 *
 * @param {*} height
 */
const maxAreaUsingPointers = (height) => {
    let maxArea = 0, i = 0, j = height.length - 1;
    while (i < j) {
        maxArea = Math.max(Math.min(height[i], height[j]) * (j - i), maxArea);
        if (height[i] < height[j]) i++;
        else j--;
    }
    return maxArea;
};
console.log(maxAreaUsingPointers([4, 3, 2, 1, 4]));

