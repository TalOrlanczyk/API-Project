import React, { useState } from 'react';
import { useEffect } from 'react';

function WithStorage(WrappedComponent) {
    const WithStorageComponent = (props) => {
        const [isLocalAvailable, setIsLocalAvailable] = useState(false)
        useEffect(() => {
            checkLocalStorageExists();
        }, []);
        const checkLocalStorageExists = () => {
            const testKey = 'test';

            try {
                localStorage.setItem(testKey, testKey);
                localStorage.removeItem(testKey);
                setIsLocalAvailable(true);
            } catch (e) {
                setIsLocalAvailable(false);
            }
        }
        const load = (key) => {
            if (isLocalAvailable) {
                return localStorage.getItem(key);
            }

            return null;
        }
        const remove = (key) => {
            if (isLocalAvailable) {
                localStorage.removeItem(key);
            }
        }
        const save = (key, data) => {
            if (isLocalAvailable) {
                localStorage.setItem(key, data);
            }
        }
        return <WrappedComponent
            load={(key) => load(key)}
            remove={(key) => remove(key)}
            save={(key, data) => save(key, data)}
            {...props} />;
    };
    return WithStorageComponent;
}
export default WithStorage;