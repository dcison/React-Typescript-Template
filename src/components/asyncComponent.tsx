import * as React from "react";
export default function asyncComponent (importComponent: any) {
	class asyncComponent extends React.Component<any, any> {
		constructor (props: any) {
			super(props);
  
			this.state = {
				component: null
			};
		}
  
		async componentDidMount () {
			const { default: component } = await importComponent();
  
			this.setState({
				component: component
			});
		}
  
		render () {
			const C = this.state.component;
  
			return C ? <C {...this.props} /> : null;
		}
	}
  
	return asyncComponent;
}