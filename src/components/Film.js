import React, {Component} from "react";


class Film extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        window.location.href = this.props.link;
    }

    render(){
        return (
           <div className = "film">
           <h3>{this.props.name}</h3>
           <button onClick =  {this.handleClick}
           >IMDB Link</button>
           </div>

        )
    }





}

export default Film;