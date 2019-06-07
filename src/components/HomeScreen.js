import React , { Component } from 'react';
import NavBar from "../components/NavBar"
import axios from '../axios';
import MainContent from '../components/MainContent';

class HomeScreen extends Component {
    state = {
        images :[],
        displayedImages:[],
        seachString: ""
    
      };
    
      componentDidMount(){
        axios
        .get('/api/images')
        .then(data => {
          console.log( data.data);
            this.setState({ images: data.data
          })
          
          
        })
        .catch(err => console.error(err));
      }
    
      _onSearchChanged = text => this.setState({ seachString: text })
    render() {
        const displayedImages = this.state.images.filter(img => img.title.includes(this.state.seachString) || img.decription.includes(this.state.seachString))
        return(
            <div>
            <NavBar 
                onSearchChanged = {this._onSearchChanged}
                username = {this.props.username}
                onLogin = {this.props.onLogin}
            />
            <MainContent images ={displayedImages}/>
            </div>
        );
    }
}

export default HomeScreen;