import * as React from 'react';

class Apple extends React.Component<any, any> {
    state = {
    	text: 'iphone XR'
    }
    handleChange = () => {
    	this.setState({
    		text: 'iphone8'
    	});
    }
    render () {
    	return <>
            <button onClick={this.handleChange}>点我换机子</button>
            {this.state.text}
        </>;
    }
}

export default Apple;