import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityThunk, setHome } from "../store/index";

class City extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCityThunk(this.props.cityOne);
  }
  render() {
    return (
      <div className="style2">
        <h1>{this.props.cityOne}</h1>
        {this.props.city.map((event, i) => (
          <h2 key={i}>{event.LinkTitleText}</h2>
        ))}

        <button onClick={() => this.props.goHome()}>Back</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    city: state.city
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCityThunk: name => {
      dispatch(getCityThunk(name));
    },
    goHome: () => {
      dispatch(setHome());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
