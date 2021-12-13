import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import axios from 'axios'


export default class Mainpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            product: [],
            CreateAccountNameValue:"",
            CreateAccountPasswordValue: "",
            productSearchString: "",
            createManagerCheck:false,
            CreateWarning:"",
            categories: [],
            categorySearch: ""

        }
    }

categorySearchChange=(event)=>{
    if (this.state.categorySearch===event.target.value){
        this.setState({categorySearch:""})
    }else{
        this.setState({categorySearch:event.target.value})
    }
}   
CreateWarningText=(bool)=>{
    if(bool===false){
        this.setState({CreateWarning:"There was a problem in the account creation. Fill both of the boxes and try again"})
    }else{
        this.setState({CreateWarning:"Account created succesfully"})
    }
}

componentDidMount=()=>{
    axios.get("https://awa-project.herokuapp.com/public")
    .then((Response)=>{
        let array=Response.data
        array.forEach(element => {
            if(element.priceLevel==="1"){
                element.priceLevel="€"
            }else if(element.priceLevel==="2"){
                element.priceLevel="€€"
            }else if(element.priceLevel==="3"){
                element.priceLevel="€€€"
            }else if(element.priceLevel==="4"){
                element.priceLevel="€€€€"
            }
        });
        
        this.setState({items:array})
    })
    .catch((err)=>{console.log(err)})
}

GetRestaurantProducts=(id)=>{
    axios.get("https://awa-project.herokuapp.com/public/prod/"+id)
    .then(Response=>{
        this.setState({product:Response.data})
        this.getCategory(id)
    })
    .catch(err=>{
        console.log(err)
    })
}

CreateNameAccount=(event)=>{
    this.setState({CreateAccountNameValue:event.target.value})
}
CreatePasswordInput=(event)=>{
    this.setState({CreateAccountPasswordValue:event.target.value})
}
AccountCreate=()=>{
    if(this.state.createManagerCheck===true){
        axios.post("https://awa-project.herokuapp.com/public/CreateAccount",{
            username:this.state.CreateAccountNameValue,
            password:this.state.CreateAccountPasswordValue,
            role:"ADMIN"
        })
        .then(Response=>{
            if(Response.status===200){
                this.CreateWarningText(true)
            }else{
                
            }
        })
        .catch(err=>{
            console.log(err)
            this.CreateWarningText(false)
        })
    }
    else{
        axios.post("https://awa-project.herokuapp.com/public/CreateAccount",{
            username:this.state.CreateAccountNameValue,
            password:this.state.CreateAccountPasswordValue,
            role:"CUSTOMER"
        })
        .then(Response=>{
            if(Response.status===200){
                this.CreateWarningText(true)
            }else{
                this.CreateWarningText(false)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

onSearchFieldChange=(event)=>{
    this.setState({ productSearchString: event.target.value });
}
restaurantMenuButton=(id)=>{
    this.clearSearchBar()
    this.GetRestaurantProducts(id)
}
managerCheckChange=()=>{
    if(this.state.createManagerCheck===false){
    this.setState({createManagerCheck:true})
    }
    else{
        this.setState({createManagerCheck:false})
    }
}
clearSearchBar=()=>{
    this.setState({ productSearchString:""});
}

getCategory=(id)=>{
    let Array=[]
    for(let i=0;i<this.state.items.length;i++){
        if(id===this.state.items[i].restaurantId){
            let arr=this.state.items[i].category
            arr.forEach(element=>{
                if(!Array.includes(element.categoryName)){
                    Array.push(element.categoryName)
                }
            });
            this.setState({categories:Array})
        }
    }
        
}

    render(){
        return (
            <div>
                <div>
                    <Mainbar 
                    searchChange={this.onSearchFieldChange}
                    clearSearchBar={this.clearSearchBar}/>
                </div>
                <div>
                    <Mainbody 
                    items={ this.state.items.filter((item) => item.restaurantName.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
                    products={ this.state.product.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())
                    && item.categoryName.toLowerCase().includes(this.state.categorySearch.toLowerCase()))} 
                    CreateAccountInputs={this.state.CreateAccountNameValue}
                    CreateAccountPassword={this.state.CreateAccountPasswordValue}
                    AccountCreate={this.AccountCreate}
                    CreateNameAccount={this.CreateNameAccount}
                    CreatePasswordInput={this.CreatePasswordInput}
                    LoginInputs={this.props.LoginNameChange}
                    LoginPasswordInputs={this.props.LoginPassword}
                    Login={this.props.Login}
                    LoginName={this.props.LoginName}
                    LoginPasswordInput={this.props.LoginPasswordChange}
                    restaurantMenuButton={this.restaurantMenuButton}
                    createManagerCheck={this.state.createManagerCheck}
                    managerCheckChange={this.managerCheckChange}
                    managerLoginCheckChange={this.props.Managercheck}
                    LoginWarning={this.props.LoginWarning}
                    CreateWarning={this.state.CreateWarning}
                    categorySearchChange={this.categorySearchChange}
                    categories={this.state.categories}
                    
                    />
                 </div>
            </div>
        )
    }
}
    
