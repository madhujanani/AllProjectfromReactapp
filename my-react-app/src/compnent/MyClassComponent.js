
import { Component } from "react";
export class MyClassComponent  extends Component{
    constructor(){
        super();//we should always call the super Component which is the extended react component before calling this.otherwise error
        this.state={
            id:1,
            name:'John',//state can be object array.or variable.but should be given in a constructor.and only used and managed internally,not in different components like props
            age:'45'
        }
        this.update =this.update.bind(this)// inorder to make the updates there should be connection between update() and state elements.so give this line inside constructor
        this.handleChange=this.handleChange.bind(this)
    }
  
    update() { //always make sure function is called outside constuctor and render
        //alert("funtion to update state value");
        this.setState({id:100, name:''})//setstate is a method to update the state element-static value 
        //this.setState({id:this.state.id+2})//this will increment id by  2
        }
    handleChange(event){
          //  console.log(  event.target.value);//live change when we type in console
            this.setState({name:event.target.value})//live change when we type in browser
        }
        //Life cycle Methods-class
        //=========================
        // static getDerivedStateFromProps(props){
        //     return{id:props.id}//getting id from props(parent component).
        // }
        shouldComponentUpdate(){
            if(this.state.id !=='1111')
            return false;//if we want stop the update
        }
        componentDidMount(){//to do updates after render
            setTimeout(()=>{
                this.setState({id:'1111'})
            },2000)
        }
    render(){
        
        return(
            <div>
            <h1>This is my class component.MyCity :{this.props.MyCity}</h1>
            <h2>My Name is :{this.state.name} . I am {this.state.age} years old.My id number is {this.state.id}</h2>
            <input type="text" placeholder=" Enter your name"  onChange={this.handleChange}/><br></br><br></br>
            <button onClick={this.update}> Click to Update</button>
            </div>
        )
    }
}
export default MyClassComponent