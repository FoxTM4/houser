import React, {Component} from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            listings:[]

        }
    }

    handleDelete(index){
        axios.delete(`/house/${index}`).then(res=>{
            this.setState({listings: res.data})
          })
    }

    render(){
        return(
            <div>
                
               <div></div>
               <button onClick= {this.handleDelete}>Delete</button>
               <h2> {this.state.listings.map((index)=>{
                return( <House handleDelete={()=>this.handleDelete(index)}/>)
               })}
              
              </h2>
            </div>

        )
    }
}

// A user should be able to see all the houses that have been added to the database.
// Each house should display its name, address, city, state, and zipcode information.
// A user should be able to click the 'Add New Property' button to be taken to the Wizard view.
// A user should be able to delete any single house.