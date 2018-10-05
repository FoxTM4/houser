import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import routes from '../../routes'

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            nameInput:'',
            addressInput: '',
            cityInput: '',
            stateInput: '',
            zipCodeInput:'',
        }
        this.handleNameInput=this.handleNameInput.bind(this)
        this.handleAddressInput=this.handleAddressInput.bind(this)
        this.handleCityInput=this.handleCityInput.bind(this)
        this.handleStateInput=this.handleStateInput.bind(this)
        this.handleZipCodeInput=this.handleZipCodeInput.bind(this)
        this.handleCancel=this.handleCancel.bind(this)

    }
    handleNameInput(value){
        this.setState({nameInput: value})
    }
    handleAddressInput(value){
        this.setState({addressInput: value})
    }
    handleCityInput(value){
        this.setState({cityInput: value})
    }
    handleStateInput(value){
        this.setState({stateInput: value})
    }
    handleZipCodeInput(value){
        this.setState({zipCodeInput: value})
    }
    handleCancel(){
        this.setState({})
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
            <h3>Wizard</h3>
            <input value={this.state.nameInput}
            placeholder='Enter name'
            onChange={(e)=> this.handleNameInput(e.target.value)}/>
            <input value={this.state.addressInput}
            placeholder='Enter Address'
            onChange={(e)=> this.handleAddressInput(e.target.value)}/>
            <input value={this.state.cityInput}
            placeholder='Enter City'
            onChange={(e)=> this.handleCityInput(e.target.value)}/>
            <input value={this.state.stateInput}
            placeholder='Enter State'
            onChange={(e)=> this.handleStateInput(e.target.value)}/>
            <input value={this.state.zipCodeInput}
            placeholder='Enter Zip-Code'
            onChange={(e)=> this.handleZipCodeInput(e.target.value)}/>

            {/* <button onClick={(e)=> }>Add House</button> */}
            </div>
        )
    }
}


//A user should be able to add a name, address, city, state, and zipcode for a house.
// A user should be able to click the 'Cancel' button.
// This should NOT add a house to the database.
// This should redirect the user to the Dashboard.
// A user should be able to click the 'Complete' button.
// This should add a new house to the database.
// This should redirect the user to the Dashboard