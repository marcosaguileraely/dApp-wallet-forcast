import { GlobalContextProvider } from '@core'
import { NextUIProvider } from '@nextui-org/react'
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <NextUIProvider>
      <GlobalContextProvider>
        <AppRoutes />
      </GlobalContextProvider>
    </NextUIProvider>
  );
}

export default App;
