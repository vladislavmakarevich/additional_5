module.exports = function check(str, bracketsConfig) {
  let stack=[],
      open=[],
      close=[];
  if(str.length %2 !==0){
    return false;
  }
  for(let i =0,len=bracketsConfig.length;i<len;i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  for(let i=0,len=str.length;i<len;i++){
    for(let j=0,len1=bracketsConfig.length;j<len1;j++){
      let conditional1=stack[stack.length-1]===open[j]&&str[i]===close[j];
      let conditional2=str[i]===open[j];
      if(conditional1) {
        stack.pop();
      }
      else {
        if(conditional2){
          stack.push(str[i]);
        }
      }
    }
  }
  return (stack.length == 0) ? true : false;
}

  

