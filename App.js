import React, { useEffect } from "react";

import qlikLoader from "./qlik";

const App = () => {
	useEffect(() => {
		qlikLoader
			.then((qlik) => {
				// You can now use the qlik APIs
				// qlik.openApp('some app id')
			})
			.catch((err) => console.log(err));
	});

	return (
		<main className="mashup">
			<div className="mashup__content">
				<iframe src="https://berkayaskin/single/?appid=4ca30ed5-3c3b-4753-9f75-56d1cb6072ae&sheet=FaQeFa&opt=currsel&select=clearall"></iframe>
			</div>
		</main>
	);
};

export default App;
