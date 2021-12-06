import React from 'react'
import Mainbar from './Mainbar'
import Mainbody from './Mainbody'
import products from './datamenu.json'
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
    if(bool==false){
        this.setState({CreateWarning:"There was a problem in the account creation. Fill both of the boxes and try again"})
    }else{
        this.setState({CreateWarning:"Account created succesfully"})
    }
}

componentDidMount=()=>{
    axios.get("http://localhost:8080/public")
    .then((Response)=>{
        this.setState({items:Response.data})
    })
    .catch((err)=>{console.log(err)})
}

GetRestaurantProducts=(id)=>{
    console.log(id)
    axios.get("http://localhost:8080/public/menus/"+id)
    .then((Response)=>{
        this.setState({product:Response})
    })
    .catch((err)=>{console.log(err)})
}

CreateNameAccount=(event)=>{
    this.setState({CreateAccountNameValue:event.target.value})
}
CreatePasswordInput=(event)=>{
    this.setState({CreateAccountPasswordValue:event.target.value})
}
AccountCreate=()=>{
    if(this.state.createManagerCheck===true){
        axios.post("http://localhost:8080/public/CreateAccount",{
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
        axios.post("http://localhost:8080/public/CreateAccount",{
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
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
}
restaurantMenuButton=(id)=>{
    this.clearSearchBar()
    this.GetRestaurantProducts(id)
    this.getCategory()
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

getCategory=()=>{
    let Array=[]
        this.state.product.forEach(element=>{
            if(!Array.includes(element.category)){
                Array.push(element.category)
                console.log(element.category)
            }
        });
        this.setState({categories:Array})
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
                        && item.category.toLowerCase().includes(this.state.categorySearch.toLowerCase()))} 
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
    
