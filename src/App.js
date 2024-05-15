import './App.css';
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Components/utils/store';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchedVideosContainer from './Components/SearchedVideosContainer';

const appRouter = createBrowserRouter([
  {
  path: '/',
  element: <Body/>,
  children:[{
   path: '/',
   element: <MainContainer/>
  },
  {
    path: '/watch',
    element: <WatchPage/>
  },
  {
    path: '/results',
    element: <SearchedVideosContainer/>
  }
]
},
])

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router= {appRouter}/>
    </Provider>
   
  );
}

export default App;
