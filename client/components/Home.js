import React, { Component } from "react";
import { connect } from "react-redux";
import { getEventsThunk, setBackThunk } from "../store/index";

import City from "./City";
/* The home page! */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getEventsThunk();
    this.setState({ city: "" });
  }
  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  render() {
    if (this.state.city === "") {
      return (
        <div className="home">
          <div className="style2">
            <h2>Check out his events!</h2>
            <div>
              <h4>Filter City</h4>
              <select onChange={this.handleChange} value={this.state.city}>
                {this.props.events.map((event, i) => (
                  <option key={i}>{event.VenueCity}</option>
                ))}
              </select>
              <div>
                {this.props.events.map((event, i) =>
                  event.VenueCity === "Houston" ? (
                    <h1 key={i}>{event.LinkTitleText}</h1>
                  ) : (
                    <h2 key={i}>{""}</h2>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.city !== "" && this.props.home === "home") {
      this.setState({ city: "" });
      this.props.setUnset();
      return (
        <div className="home">
          <div className="style2">
            <h2>Check out his events!</h2>
            <div>
              <h4>Filter City</h4>
              <select onChange={this.handleChange} value={this.state.city}>
                {this.props.events.map((event, i) => (
                  <option key={i}>{event.VenueCity}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    } else {
      return <City cityOne={this.state.city} />;
    }
  }
}
const mapStateToProps = state => {
  return {
    events: state.events,
    home: state.home
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getEventsThunk: () => dispatch(getEventsThunk()),
    setUnset: () => dispatch(setBackThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
