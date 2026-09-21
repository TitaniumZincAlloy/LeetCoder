class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        // Declare dictionary
        var numDict: [Int: Int] = [:]
        
        // Loop through nums
        for (i, num) in nums.enumerated() {
            if let targetIndex = numDict[target-num] {
                // Found target
                return [targetIndex, i]
            }
            
            // No need to worry about duplicate numbers into dictionary
            if numDict[num] == nil {
                numDict[num] = i
            }
        }
        
        return [] // Base case return nothing if solution not found
    }
}

print(Solution().twoSum([1,2,3,4,5], 9))