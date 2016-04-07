import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {
	authButton(){
		if(this.props.authenticated){
			return <button onClick={()=> this.props.authenticate(false)}>Sing Out</button>
		}
		return <button onClick={()=> this.props.authenticate(true)}>Sing In</button>
	}

	render() {
		return (
			<nav className="navbar nabvar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		)
	}
}

function mapStateProps(state){
	return {
		authenticated: state.authenticated
	}
}

//export default connect(mapStateProps, {authenticate})(Header)
export default connect(mapStateProps, actions)(Header)
