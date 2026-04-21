import { MetaProvider } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import Home from "../pages/Home";
import Package from "../pages/Package";

const App: Component = () => (
	<MetaProvider>
		<Router>
			<Route path="/" component={Home} />
			<Route path="/:name" component={Package} />
		</Router>
	</MetaProvider>
);

export default App;
