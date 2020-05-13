import React from 'react';

const config = {
    API_BASE_URL: 'http://localhost:5000'
};

const ConfigContext = React.createContext();

export const ConfigContextProvider = () => {
    return (
        <ConfigContext.Provider value={config}>
        </ConfigContext.Provider>
    );
};

export default ConfigContext;
