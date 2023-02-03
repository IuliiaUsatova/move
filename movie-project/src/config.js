export const BACKEND_URL = 'https://jsonplaceholder.typicode.com/users';

export const getDataFromBackend = async () => {
    const data = await fetch(BACKEND_URL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        }
    }).then(data => {
        console.log(data);
        return data.json()
    })

    return data;
}
    //здесь мы с помощью функции стучимся в бекэнд и берем данные в формате json