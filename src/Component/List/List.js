import React, { Component } from 'react';
import axios from 'axios';
import './list.css'

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            earnings: [],
            consumtions: [],
            name: "",
            amount: 0,
            percentage: 0,
            counter: 0,
            name2: "",
            amount2: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/list/earning', {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem("token") 
            }
        })
            .then(res => {
                let self = this;
                console.log(res.data)
                this.setState({earnings: res.data.earning}, () => {
                    console.log(this.state.earnings)
                    let per = 0;
                    for(let i = 0; i < this.state.earnings.length; i++) {
                        per += this.state.earnings[i].amount;
                        
                    }
                    console.log(per)
                    this.setState({
                        percentage: this.state.percentage + per,
                        counter: this.state.counter + this.state.earnings.length
                    })
                })
                return axios.get('http://localhost:4200/list/consumption', {
                    headers: {
                        'Authorization': "Bearer " + localStorage.getItem("token") 
                    }
                })
            })
            .then(res => {
                this.setState({consumtions: res.data.consumptions}, () => {
                    this.setState({consumptions: res.data.consumptions}, () => {
    
                        let per = 0;
                        for(let i = 0; i < this.state.consumptions.length; i++) {
                            per += this.state.consumptions[i].amount;
                            
                        }
                        console.log(per)
                        this.setState({
                            percentage: this.state.percentage + per,
                            counter: this.state.counter + this.state.consumptions.length
                        })
                    })
                    
                })
                
            })
            .catch(err => {
                console.log(err)
                window.location.href = "http://localhost:3000/users/register";
            });
    }
    inserting = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    inserting2 = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitEarning = (e) => {
        e.preventDefault();
        let { name, amount } = this.state;
        axios.post('http://localhost:4200/list/earning',{ name: this.state.name , amount: this.state.amount}, {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    } 
    submitConsumtion= (e) => {
        e.preventDefault();
        let { name2, amount2 } = this.state;
        axios.post('http://localhost:4200/list/consumtion',{ name: this.state.name2 ,amount: this.state.amount2}, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    } 

    delete = (id) => {
        axios.delete('http://localhost:4200/list/' + id)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
          <div>
            <div id="list">
                <div>
                    <div id="first"> 
                        <h1 className="title">Earnings</h1>

                        {
                        this.state.earnings.length === 0 ? <h1>No cureent items</h1> :
                        this.state.earnings.map((e, index) => {
                            return <div className="item" key={index}>
                                <h1>{e.name}</h1>
                                <h1>{e.amount}</h1>
                                <span className="closebtn"  onClick={() => this.delete(e.id)}> &times; </span>
                            </div>
                        })
                        }
                </div>
                <form onSubmit={this.submitEarning}>
                        <input type="text" value={this.state.name} name="name" onChange={this.inserting}/>
                        <input type="number" value={this.state.amount} name="amount" onChange={this.inserting} />
                        <button>OK!</button>
                </form>
            </div>

            <div>
                <div id="second">
                <h1 className="title">Consumtions</h1>
                    {
                        this.state.consumtions.length === 0 ? <h1>No cureent items</h1> :
                        this.state.consumtions.map((e, index) => {
                            return <div className="item" key={index}>
                                <h1>{e.name}</h1>
                                <h1>{e.amount}</h1>
                                <span className="closebtn" onClick={() => this.delete(e.id)}> &times; </span>
                            </div>
                        })
                    }
                    </div>
                
                    <form onSubmit={this.submitConsumtion}>
                        <input type="text" value={this.state.name2} name="name2" onChange={this.inserting2}/>
                        <input type="number" value={this.state.amount2} name="amount2" onChange={this.inserting2} />
                        <button>OK!</button>
                    </form>
                   
               </div>
               
               </div>
               {this.state.percentage === 0 ? <div className="saving"><p>0%</p></div> : 
               <div className="saving">  {(this.state.percentage/ (this.state.counter) )* 100 } % </div>}
            </div>
        )
    }
}