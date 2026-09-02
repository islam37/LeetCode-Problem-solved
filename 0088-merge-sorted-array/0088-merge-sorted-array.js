var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Compare elements from the back and place the larger one at index k
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from nums2 if any
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};