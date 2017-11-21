import React, { Component } from 'react';


const URL_Polls = "http://localhost:3004/teams"
class Polls extends Component {

    constructor(props){
        super(props);
        this.state ={
            pollsTeams:''
        }
    }
    
  fetchPoll(){
    fetch(`${URL_Polls}?poll=true&_sort=count&_order=desc`,{
        method:'GET'
    }).then(respone=>respone.json()
    .then(json=>{
        console.log(json)
        this.setState({
            pollsTeams:json
        })
    })
)
  }

  addAccount(count,id){
      fetch(`${URL_Polls}/${id}`,{
        method:'PATCH',
        headers:{
            'Accept':'Application/json',
            'Content-Type':'Application/json'
        },
        body :JSON.stringify({count:count+1})
      })
      .then(()=>{
          this.fetchPoll();
      })
      
  }

  componentDidMount(){
      this.fetchPoll();
  }

    renderPoll(){
        const positon =[`1ST`,`2ND`,`3RD`]
        if(this.state.pollsTeams){
         return this.state.pollsTeams.map((item,index)=>{
           return(
              <div key={item.id} className="poll_item" onClick={()=>this.addAccount(item.count,item.id)}>
                  <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                 <h4>
                     {positon[index]}</h4>
                 <div>{item.count} Votes</div>
              </div>
          )
      })
    }
    }
  render() {
    return (
      <div className="home_poll">
          <h3>who will be next champion?</h3>
          <div className="poll_container">
            {this.renderPoll()}
          </div>
      </div>
    );
  }
}

export default Polls;
