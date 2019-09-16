import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          className="sticky white-nav"
        >
          <div>
            <div>
              <h2>Elton John</h2>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
export default connect(
  mapStateToProps,
  null
)(Header);
