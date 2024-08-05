// useDelayedLoader.js
import { useState, useEffect } from 'react';

const useDelayedLoader = (delay: number) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return showLoader;
};

export default useDelayedLoader;
