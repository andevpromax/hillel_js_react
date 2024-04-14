import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/todos';

//! Axios
const controller = new AbortController();

export const getList = () =>
  axios.get(API, { signal: controller.signal }).then(({ data }) => data);

export const abortFetch = () => {
  console.log('In abortFetch');
  controller.abort();
};

// fetch => Response => Response.json()
// axios => Response.data => {data} => data

//! Fetch
// export const getList = () => fetch(API).then((data) => data.json());

export const deleteItem = (id) =>
  fetch(API + `/${id}`, {
    method: 'DELETE',
  }).then((data) => data.json());

export const updateItem = (id, obj) =>
  fetch(API + `/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());

export const addItem = (obj) =>
  fetch(API, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());
