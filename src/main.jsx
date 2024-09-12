import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Promesa1 from './functions/Promesa1.jsx'
import './index.css'
import MyFetchAPIs from './functions/MyFetchs.jsx';

import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App /> */}
   {/* <Promesa1 /> */}

   <MyFetchAPIs/>
  {/*<MyPromises/>*/}

  {/*<MyPromisesRace/>*}
{ /* <MyPromisesAll/>*/}
  </StrictMode>,
);