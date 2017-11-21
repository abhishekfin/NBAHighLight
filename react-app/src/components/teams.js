import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group'


const URL_TEAMS ="http://localhost:3004/teams"
 
const fadeAnimation ={
    transitionName :"fade",
    transitionAppear:true,
    transitionAppearTimeout :500,
    transitionEnter:true,
    transitionEnterTimeout:500,
    transitionLeave:true,
    transitionLeaveTimeout:500,
}


class Teams extends Component {

    constructor(props){
        super(props);
        this.state ={
            teams:[],
            filtered:[],
            keywords:''
        }
    }
  
    componentDidMount(){
      fetch(URL_TEAMS,{method:"GET"})
       .then(response =>response.json())
       .then(json=>{
           this.setState({
               teams:json,
               filtered:json
           })
       })
    }

    searchTeam  = (event)=>{  
         const keywords = event.target.value;
         if(keywords!=='')
            {
                const list = this.state.teams.filter((item)=>{
                    return item.name.toLowerCase().indexOf(keywords.toLowerCase())>-1
                })
                this.setState({
                    filtered:list,
                    keywords
                })
            }
            else{
                this.setState({
                    filtered:this.state.teams,
                    keywords
                })
            }
         
    }
    renderList =({filtered})=>{
        return filtered.map((item)=>{
            return(
                <Link key={item.id} to={`/team/${item.name}`}>
                <img alt ={item.name } src={`/images/teams/${item.logo}`}/>
                </Link>
            )
        })

    } 
 
  render() {
    return (
      <div className="team_component">
          <div className="team_input">
              <input onChange={e=>this.searchTeam(e)} type="text" value={this.state.keywords} placeholder="Search for a team"/>
          </div>
          <div className="team_container">
              <CSSTransitionGroup {...fadeAnimation} >
              {this.renderList(this.state)}
            </CSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export default Teams;
