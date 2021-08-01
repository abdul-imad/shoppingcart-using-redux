import React from "react";
import { connect } from "react-redux";

function Home(props) {
	return <div>{props.products}</div>;
}

const mapStateToProps = (state) => {
	return state;
};

const reduxConnect = connect(mapStateToProps)(Home);
export default reduxConnect;
