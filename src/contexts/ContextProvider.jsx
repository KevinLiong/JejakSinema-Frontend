import { createContext, useContext, useState, useEffect, useMemo } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (token) {
            _setUserToken(token);
        }
    }, []);

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token);
        } else {
            localStorage.removeItem('TOKEN');
        }
        _setUserToken(token);
    };

    const contextValue = useMemo(() => ({
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
    }), [currentUser, userToken]);

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
