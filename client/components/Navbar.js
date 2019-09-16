import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import City from "./City";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  render() {
    if (this.state.city === "") {
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
            <div className="nav-dropdown">
              <h5>Filter City</h5>
              <select onChange={this.handleChange} value={this.state.city}>
                {this.props.events.map((event, i) => (
                  <option key={i}>{event.VenueCity}</option>
                ))}
              </select>
            </div>
          </Navbar>
        </div>
      );
    } else {
      return <City />;
    }
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

/* <Navbar
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
<div className="nav-dropdown">
  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="/home">City Filter</NavDropdown.Item>
  </NavDropdown>
</div>
</Navbar>
</div> */
