import './App.css'
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./core/header/Header.tsx";
import {FooterComponent} from "./core/footer/Footer.tsx";

function App() {
	return (<>
		<HeaderComponent />
		<Outlet />
		<FooterComponent />
	</>)
}

export default App
