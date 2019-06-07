import React , { Component } from 'react';
import GirlImage from '../components/GirlImage';
import axios from '../axios';
import NavBar from "../components/NavBar"

class DetailScreen extends Component {
    state = {
      };
    
      componentDidMount(){
        axios
        .get(`/api/images/${this.props.match.params.imageId}`)
        .then(data => {
          
            this.setState({ image: data.data
          })
          
          
        })
        .catch(err => console.error(err));
      }
    render() {

        
        return(
            <div>
            <NavBar 
                onSearchChanged = {this._onSearchChanged}
                username = {this.state.username}
                onLogin = {this._onLogin}
            />
            <div className="main-content container">
                <div className="row">
                    <div className="col-8 mr-auto ml-auto">
                {this.state.image ? <GirlImage img={this.state.image}/> : ""}
                </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default DetailScreen;