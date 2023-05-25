import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/section/header/header';
import Footer from './components/section/footer/footer';
import Home from './pages/home/home'
import About from './pages/about/about';
import Logement from './pages/logement/logement';
import Error404 from './pages/404/404';



function App() {
	return (
		<div className="App">
			 
			<BrowserRouter>
			<Header />
				<Routes>
					<Route  path='/' element={ <Home />}/> 
					<Route path='/a-propos' element={ <About />}/> 
					<Route path='/logement/:logementId/'  element={ <Logement />} />
					<Route path='*' element={ <Error404 />} />
				</Routes >
			</BrowserRouter>
			<Footer />
		</div>
	);
}




export default App;
