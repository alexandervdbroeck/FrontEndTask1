import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";
import Loading from "./components/Loader";
import Form from "./components/Form";
import SearchResult from "./components/SearchResult";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  searchAction = str => {
    this.setState({
      movies: {
        ...this.state.movies,
        loading: true
      }
    });
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${str}&type=video&key=AIzaSyDtXj-yp1hNNaASTmoVNPg0aQdp154kKb4`
    )
      .then(result => {
        this.setState({
          movies: {
            ...this.state.movies,
            loading: false,
            data: [...result.data.items]
          }
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <div className="App">
          <Form search={this.searchAction} />
        </div>
        <div className="searchresult">
          {this.state.movies.loading && <Loading />}
          <SearchResult films={this.state.movies.data} />
        </div>
      </>
    );
  }
}
