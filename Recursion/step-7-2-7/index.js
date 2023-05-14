// 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let index=0,result=[],temp=[],candidatesLen= candidates.length

    // sort the input array
    candidates.sort((a,b) => a - b)
    
    function helper(index, temp, result, target, candidates,candidatesLen){
        // base case 
        if(target === 0){
            result.push([...temp])
            return 
        }

        // We have to select each element only once 
        // At the same level of recusrion tree (same index) do not pick same element if it has been picked before
        // At every level of recursion we have choice to pick in the range index to candidates.length -1

        for(let i =index;i<candidatesLen;i++){
            if(i > index && candidates[i] === candidates[i-1]) continue

            // optimization - if next element is greater than target , obviously sum would be greater than target
            if(candidates[i]>target) break;

            temp.push(candidates[i])
            helper(i+1, temp, result, target-candidates[i], candidates,candidatesLen)
            temp.pop()
        }

    }

    helper(index, temp, result, target, candidates,candidatesLen)

    return result
};

console.log(combinationSum2([2,1,2,1],4))