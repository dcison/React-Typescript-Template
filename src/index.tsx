import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import Apple from './components/Apple';
import Xiaomi from './components/XiaoMi';
import './global.styl';
const Header = () => (
	<ul>
		<li><Link to="/">苹果</Link></li>
		<li><Link to="/phone/xiaomi">小米</Link></li>
	</ul>
);
ReactDOM.render(
	<div>
		<BrowserRouter>
			<>
			<Header />
			<Switch>
				<Route path="/phone/apple" component={Apple} />
				<Route path="/phone/xiaomi" component={Xiaomi} />
				<Redirect to="/phone/apple" />
			</Switch>
			</>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);