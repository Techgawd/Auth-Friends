import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";

class ProtectedComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return <div>ProtectedComponent!</div>;
  }
}

export default connect(
  null,
  { getFriends }
)(ProtectedComponent);