import React, { Component } from 'react';
import axios from 'axios';
import './blog.css';

export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
           blogs: [],
           title: "",
           blog_text: ""
        }
    }
    inserting = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4200/blogs')
            .then(res => {
                this.setState({
                    blogs: res.data.blogs
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    
    submitBlogs = (e) => {
        e.preventDefault();
        let { title, blog_text } = this.state;
        axios.post('http://localhost:4200/blogs/addBlog',{ title ,blog_text}, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res.data);
                window.location.reload();  
            })
            .catch(err => {
                alert("You are not allowed to post Blogs, contact author!")
            })
    } 
    render(){
            return(
                <div>
                    {
                    this.state.blogs.length === 0 ? <h1>No cureent blogs</h1> :
                    this.state.blogs.map((e, index) => {
                        return <div key={index} className="blogs">
                            <h1 className="blogTitle">{e.title}</h1>
                            <p className="blogText">{e.blog_text}</p>
                            <hr/>
                        </div>
                    })
                    }
                
                <form onSubmit={this.submitBlogs}>
                    <label>Title: </label> 
                   <input type="text" value={this.state.title} name="title" onChange={this.inserting}/>
                   <br/>
                   <label>Text: </label>
                   <textarea type="number" value={this.state.blog_text} name="blog_text" id="blog_text" onChange={this.inserting} />
                   <br/>
                   <button id="blogbtn">OK!</button>
                </form>
            </div>
            )
              
            
    }
}