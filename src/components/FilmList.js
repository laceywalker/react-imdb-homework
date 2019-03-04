import React, {Component} from "react";
import Film from "./Film";

class FilmList extends Component {

    render(){

        const filmNodes = this.props.data.map(film => {
            return (
                <Film name ={film.name}
                key = {film.id}><a href = '/imdb/'{...film.id}>{film.url}</a></Film>
                )
            });

        return (
            <div className = "film-list">
                {filmNodes}
            </div>
        )       
    }

}






export default FilmList;