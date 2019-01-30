import * as React from 'react';
import * as ReactDOM from "react-dom";
import './global.styl';
class SomeComponent extends React.Component<{}, {}> {
	render () {
		return <div>hello</div>;
	}
}
ReactDOM.render(
	<SomeComponent/>,
	document.getElementById('root')
);