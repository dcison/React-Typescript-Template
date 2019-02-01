import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import asyncComponent from "./components/asyncComponent";
const Apple =  asyncComponent(() => import("./components/Apple"));
const XiaoMi =  asyncComponent(() => import("./components/XiaoMi"));
import store from './store';
import './global.styl';
const Header = () => (
	<ul>
		<li><Link to="/">苹果</Link></li>
		<li><Link to="/phone/xiaomi">小米</Link></li>
	</ul>
);
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<>
			<Header />
			<Switch>
				<Route path="/phone/apple" component={Apple} />
				<Route path="/phone/xiaomi" component={XiaoMi} />
				<Redirect to="/phone/apple" />
			</Switch>
			</>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}