import React from "react";
import Mainpage from "./MainSide/Mainpage";
import Customerpage from "./CustomerSide/Customerpage";
import Managerpage from "./ManagerSide/Managerpage";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      LoginMode:0
    }
  }


  
render(){
  if(this.state.LoginMode===0)
  {
    return (
    <div>
        <Mainpage/>
    </div>
  );
}
  if(this.state.LoginMode===1){
    return (
      <div>
          <Customerpage/>
      </div>
    );
  }
  if(this.state.LoginMode===2){
    return (
      <div>
          <Managerpage/>
      </div>
    );
  }
  
}
}
  

export default App;
