import { GlobalContextProvider } from '@core'
import { AppRoutes } from './AppRoutes';

function App() {
  return (
      <GlobalContextProvider>
        <AppRoutes /> 
      </GlobalContextProvider>
  );
}

export default App;
