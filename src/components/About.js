
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super();
        console.log('Parent COnstructor');
    }
componentDidMount(){
    console.log("parent mount");
}
    render(){
        console.log('Parent render')
        return(
        <div>
            <UserClass name={"Amita Rawat"} location={"Noida"} contact={"amitaarawatt@gmail.com"}/>
            {/* <UserClass2 name={"Jiya Rawat"} location={"Noida"} contact={"amitaarawatt@gmail.com"}/> */}
        
        </div>

        )
    }
}
// const About=()=>{
//     return(
//         <div><UserClass name={"Amita Rawat"} location={"Noida"} contact={"amitaarawatt@gmail.com"}/></div>
//     )
// }
export default About;