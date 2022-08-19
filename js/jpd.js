  alert("DANGER!!!!");
  let name1 = prompt("Enter passcode: ","");
  if(name1 == "panda"){
    alert(">>>>>>>>>>>");
    window.open("#","_parent");
  }
  else{
    alert("ERROR!!");
    window.close();
    
  }