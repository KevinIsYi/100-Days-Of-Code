const baseUrl = process.env.REACT_APP_API_URL;

export const fetchNoToken = async (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    let resp;

    if (method === 'GET') {
        resp = await fetch(url);
    }
    else {
        resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    return await resp.json();
}

export const fetchWithToken = async (token, endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    let resp;

    if (method === 'GET') {
        resp = await fetch(url, {
            headers: {
                'x-token': token
            }
        });
    }
    else {
        resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }

    return await resp.json();   
}