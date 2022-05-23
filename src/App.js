import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout.js'
import TitleBar from './components/TitleBar.js';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import ToTop from './components/ToTop';
import TabsNavigation from './components/TabsNavigation';


function App() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.pageYOffset >= 300 ? setShowButton(true) : setShowButton(false);
		});
	}, []);

	return (
		<div className="App">
			<Layout>
				<TitleBar pos={'start'} />
				<BrowserRouter>
					<TabsNavigation />
				</BrowserRouter>
				{ showButton ? <ToTop /> : null }
				<Footer />
				<div style={{backgroundColor: '#2b2b2b', height: '60px'}} />
			</Layout>
		</div>
	);
}

export default App;
