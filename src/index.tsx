import * as React from 'react';
import * as ReactDOM from "react-dom";
// import type from './components/Apple';
class SomeComponent extends React.Component<{}, {}> {
	render () {
		return <div>hello</div>;
	}
}
ReactDOM.render(
	<SomeComponent/>,
	document.getElementById('root')
);