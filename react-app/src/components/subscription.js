import React, { Component } from 'react';
class Subscription extends Component {
constructor(props){
    super(props);
    this.state ={
        email:'',
        error:false,
        success:false
    }
}
 

saveSubscription =(email)=>{
    const URL_Email  ='http://localhost:3004/subcriptions';

    fetch(URL_Email,{
        method:'post',
        headers:{
            'Accept':'Application/json',
            'Content-Type':'Application/json'
        },
        body :JSON.stringify({email})
    }).then(res=>res.json()
     .then(()=>{
         this.setState({
             email:'',
             success:true

         }) 
     })
)
}
clrearMessage =()=>{
    setTimeout(function(){
   this.setState({success:false,error:false})
    }.bind(this),5000)
}
  
handleSubmit =(event)=>{
    event.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S.\S+/;
    if(regex.test(email)){
       this.saveSubscription(email);
    }
    else{
     this.setState({error:true})
    }

    this.clrearMessage();
}

onChangeInput =(event)=>
{
    this.setState({email:event.target.value})
}
  render() {
    return (
      <div className="subcribe_panel">
          <h3>Subscribe to us</h3>
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input  onChange ={this.onChangeInput.bind(this)} type="text" value={this.state.email} placeholder="youremail@gmail.com"/> 
                  </form>
              </div>
              <div className={this.state.error?"error show":"error"}> Check your email </div> 
             <div className={this.state.success?'success show':'success'}> Thank You</div>
              <small>
                  Lorem 
                  Lorem
                  Lorem
                  Lorem
                  Lorem
                  Lorem
                  </small>
      </div>
    );
  }
}

export default Subscription;
