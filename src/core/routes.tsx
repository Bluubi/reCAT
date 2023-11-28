import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import { HomePage } from '../features/home/HomePage.tsx'

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<App />
			</>
		),
		children: [{ path: '/', element: <HomePage /> }],
	},
])
