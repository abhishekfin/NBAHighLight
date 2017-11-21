import React from 'react';
import {Link} from 'react-router-dom';
import Featred from './featured';
import Subscription from './subscription';
import Blocks from './block';
import Polls from './polls';

const URLHOME ='http://localhost:3004/home';
class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            home:''
        }
    }

    componentDidMount(){
      fetch(URLHOME,{method:'GET'})
      .then(response =>response.json())
      .then(json=>{
        this.setState({
            home:json
        })
    })
    }
  render(){  
      
    return(
        <div>
            <Featred slides ={this.state.home.slider}/>
            <Subscription/>
            <Blocks blocks={this.state.home.blocks}/>
            <Polls/>
    </div>
    )
    }
}

export default Home;