import React from "react";
import Logo from "./img/youtubeLogo.png";
export default class props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        string: "",
        error: false
      }
    };
  }
  setField = e => {
    this.setState({
      search: {
        string: e.target.value,
        error: false
      }
    });
  };
  checkSubmit = e => {

    if (this.state.search.string !== "") {
      e.preventDefault();
      console.log(e.target.value)
      this.props.searchMovies(this.state.search.string)
    } else {
      this.setState({
        search: {
          ...this.state.searchStr,
          error: true
        }
      });
    }
  }

  render() {
    return (
      <>
        <img className="logo" src={Logo} alt="logo" />
        <form
          onSubmit={e => {
            this.checkSubmit(e);
          }}
        >
          <input
            type="text"
            className={this.state.search.error ? "error" : ""}
            value={this.state.search.string}
            onChange={this.setField}
          />
          <input type="submit" value="search" />
        </form>
      </>
    );
  }
}
