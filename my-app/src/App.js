import './App.css';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';


function App() {
    const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage></HomePage>,
		},
		{
			path: "/albums/:id",
			element: <AlbumsPage></AlbumsPage>,
		},
		{
			path: "/photos/:albumId",
			element: <PhotosPage></PhotosPage>
		}
    ]);
	return (
		<RouterProvider router={router}>
		</RouterProvider>
	);
}

export default App;
