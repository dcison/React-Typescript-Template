import * as React from 'react';

class Xiaomi extends React.Component<any, any> {
    state = {
    	text: 'xiaomi Mix2S'
    }
    handleChange = () => {
    	this.setState({
    		text: 'xiaomi 8'
    	});
    }
    render () {
    	return <>
            <button onClick={this.handleChange}>点我换机子</button>
            {this.state.text}
        </>;
    }
}

export default Xiaomi;