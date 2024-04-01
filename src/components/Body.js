
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, useParams } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MoviePage from './MoviePage';
import VideoBackground from './VideoBackground';
import MainMovieContainer from './MainMovieContainer';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: "/browse/:id",
      element: <MoviePage/>,
    },
  ]);



  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
