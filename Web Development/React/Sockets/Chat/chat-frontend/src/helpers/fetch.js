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