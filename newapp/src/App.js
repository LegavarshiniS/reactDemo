import React from 'react';
import { Store } from './redux/Store';
import Counter from './components/Counter';
function App() 
{
 
  return(
    
     <Provider store={Store}>

    <div>
    <Counter/>
    </div>
    </Provider>

  )
}

export default App;
