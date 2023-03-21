var arr = [1,1,2,3,2,4]
var removeDuplicates = function(nums) {
  var i = 0
  var m = 0
  var n = 0
  for(i = 0;i<nums.length;i++){
    if(nums[i+1]<=nums[i]){
      nums[i] = nums[i+1]
      nums[i+1] = ''
    }
  }
  return total
};
console.log(removeDuplicates(arr));