import React from "react";
import Mainpage from "./MainSide/Mainpage";
import Customerpage from "./CustomerSide/Customerpage";
import Managerpage from "./ManagerSide/Managerpage";

class App {
  constructor(props){
    super(props)
    this.state={
      LoginMode:0
    }
  }


  
render(){
  if(LoginMode==0)
  {return (
    <div>
        <Mainpage/>
    </div>
  );}
  if(LoginMode==1){
    return (
      <div>
          <Customerpage/>
      </div>
    );
  }
  if(LoginMode==2){
    return (
      <div>
          <Managerpage/>
      </div>
    );
  }
  
}
}
  

export default App;
