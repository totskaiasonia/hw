import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';


function App() {
    const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage></HomePage>,
		},
		{
			path: "/gallery/:id",
			element: <GalleryPage></GalleryPage>,
		},
    ]);
	return (

		<RouterProvider router={router}>
		</RouterProvider>
	);
}

export default App;
