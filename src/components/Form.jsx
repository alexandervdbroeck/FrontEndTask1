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

  render() {
    return (
      <>
        <img className="logo" src={Logo} alt="logo" />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.search(this.state.search.string);
          }}
        >
          <input
            type="text"
            value={this.state.search.string}
            onChange={this.setField}
          />
          <input type="submit" value="search" />
        </form>
      </>
    );
  }
}
