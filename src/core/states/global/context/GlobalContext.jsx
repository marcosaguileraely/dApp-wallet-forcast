import { createContext, useContext, useState } from 'react';

const INITIAL_STATE = {
  walletState: false,
  walletData: [],
};

const GlobalContext = createContext(INITIAL_STATE);

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

const GlobalContextProvider = ({ children }) => {
  const [walletState, setWalletState] = useState(INITIAL_STATE.walletData);
  const [walletData, setWalletData] = useState(INITIAL_STATE.walletState);

  const contextValue = {
    walletState,
    setWalletState,
    walletData,
    setWalletData,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, useGlobalContext, GlobalContextProvider };
