import React, { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setTimeout(() => {
            fetch(url, {
                headers: {
                    accept: 'application/json',
                },
                signal: signal
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 2000);

        return () => abortController.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
