import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEventsThunk } from "../store/index";
import Concert from "./Concert";
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
  }
  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  render() {
    console.log("this.state", this.state);
    if (this.state.city === "") {
      return (
        <div className="home">
          <div className="style2">
            <h2>Check out his events!</h2>
            {/* <table className="tryWrap">
            {this.props.events.map((event, i) => (
              <Concert event={event} key={i} />
            ))}
          </table> */}
            <div className="nav-dropdown">
              <h5>Filter City</h5>
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
    events: state.events
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getEventsThunk: () => dispatch(getEventsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
