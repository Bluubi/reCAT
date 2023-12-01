import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<App />
			</>
		),
	},
])
