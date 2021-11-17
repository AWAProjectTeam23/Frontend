import React, { Component } from 'react'
import Managerbar from './Managerbar'
import Managerbody from './Managerbody'
import data from './data.json'
import historyData from './History.json'


export default class Managerpage extends Component {
    constructor(props){
        super(props);
        this.state={
            item: data.order,
            history: historyData.history,
            selectValue:[{name:"a"},{name:"b"}],
            selectedValue:"",
            ProductInputValue:[{Restaurant:"",Category:"",Name:"",Description:"",Price:"",Image:""}],
            RestaurantInputValue:[{Name:"",Address:"",OperatingHours:"",Image:"",RestaurantType:"",PriceLevel:""}],
            CategoryInputValue:""
        }
    }

    InputChange=(event)=>{
        this.setState({CategoryInputValue:event.target.value})
        console.log(event.target.value)
    }

    ProductInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.ProductInputValue]
        Array[0][name]=value
        this.setState({ProductInputValue:Array})
        console.log(name)
        console.log(event.target.value)
    }

    RestaurantInputChange=(event)=>{
        const value = event.target.value
        const name = event.target.name
        let Array=[...this.state.RestaurantInputValue]
        Array[0][name]=value
        this.setState({RestaurantInputValue:Array})
        console.log(event.target.value)
    }

    CategoryCreate=()=>{
        console.log(this.state.CategoryInputValue)
    }

    ProductCreate=()=>{
        console.log(this.state.ProductInputValue[0].Restaurant)
        console.log(this.state.ProductInputValue[0].Category)
        console.log(this.state.ProductInputValue[0].Name)
        console.log(this.state.ProductInputValue[0].Description)
        console.log(this.state.ProductInputValue[0].Price)
        console.log(this.state.ProductInputValue[0].Image)
    }

    RestaurantCreate=()=>{
        console.log(this.state.RestaurantInputValue[0].Name)
        console.log(this.state.RestaurantInputValue[0].Address)
        console.log(this.state.RestaurantInputValue[0].OperatingHours)
        console.log(this.state.RestaurantInputValue[0].Image)
        console.log(this.state.RestaurantInputValue[0].RestaurantType)
        console.log(this.state.RestaurantInputValue[0].PriceLevel)
    }

    selectChange=(value)=>{
        this.setState({selectedValue:value});
    }

    render(){
        return (
            <div>
                <div>
                     <Managerbar selectValue={this.state.selectValue} selectChange={this.selectChange} selectedValue={this.state.selectedValue}/>
                </div>
                <div>
                <Managerbody 
                items={this.state.item} 
                history={this.state.history}
                CategoryInputs={this.state.CategoryInputValue}
                ProductInputs={this.state.ProductInputValue}
                RestaurantInputs={this.state.RestaurantInputValue}
                CategoryCreate={this.CategoryCreate}
                ProductCreate={this.ProductCreate}
                RestaurantCreate={this.RestaurantCreate}
                InputChange={this.InputChange}
                ProductInputChange={this.ProductInputChange}
                RestaurantInputChange={this.RestaurantInputChange}
                />
                </div>
            </div>
            
        )
    }
    
}
