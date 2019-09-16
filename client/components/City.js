import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityThunk } from "../store/index";

class City extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCityThunk(this.props.cityOne);
  }
  render() {
    return (
      <div>
        <h1>{this.props.cityOne}</h1>
        <h1>{this.props.city.Date}</h1>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
