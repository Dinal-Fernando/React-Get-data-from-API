
import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded:false
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
               this.setState(
                   {
                       isLoaded: true,
                       items: json
                   }
               )
            });
    }

    render() {
       let {isLoaded,items}=this.state;

       if(!isLoaded){
           return <div>Loading.....</div>
       }
       else{
           return (
               <div >
                   <ul>
                       {items.map(item => (
                           <li key={item.id}>
                               Name: {item.name} | Email: {item.email}
                           </li>
                       ))}
                   </ul>

               </div>
           );
       }


    }
}

export default App;


