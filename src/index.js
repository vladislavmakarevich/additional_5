module.exports = function check(str, bracketsConfig) {
  // your solution
  var count1=0;
  var count2=0;
  var count=0;
  for(var i =0;i<str.length;i++){
    if(str[i]=="("&&str[i+1]!="]"&&str[i+1]!="}"){count+=1;}
    if(str[i]==")"){count-=1;}
    if(str[i]=="["&&str[i+1]!=")"&&str[i+1]!="}"){count1+=1;}
    if(str[i]=="]"){count1-=1;}
    if(str[i]=="{"&&str[i+1]!=")"&&str[i+1]!="]"){count2+=1;}
    if(str[i]=="}"){count2-=1;}
    if(str[str.length-1]=="("||str[str.length-1]=="["||str[str.length-1]=="{"){return false;}
  }
  if(count+count1+count2===0){return true;}
  else{return false;}
}
