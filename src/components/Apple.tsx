import * as React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';

class Apple extends React.Component<any, any> {
	componentDidMount () {
		this.props.initPhone({ name: '苹果8', money: 10000 });
	}
    handleChange = () => {
    	this.props.setPhoneMoney({ money: this.props.money - 20 });
    }
    render () {
    	return <>
            <button onClick={this.handleChange}>点我降价</button>
            {this.props.name} 现在仅售价 {this.props.money}
        </>;
    }
}

function mapStateToProps (state: any) {
	return {
		name: state.Phone.name,
		money: state.Phone.money
	};
}

export default connect(mapStateToProps, action)(Apple);
