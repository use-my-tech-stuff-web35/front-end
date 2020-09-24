import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch ({type:LOGIN_START});
    return axios.post('https://used-tech.herokuapp.com/api/auth/login', creds).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
    })
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const signUp = user => dispatch => {
    dispatch ({type: SIGN_UP_START});
    return axios.post('https://used-tech.herokuapp.com/api/auth/register', user).then(res => {
        console.log(res)
        dispatch({type: SIGN_UP_SUCCESS, payload: res.data})
    })
}

export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const addItem = item => dispatch => {
    dispatch ({type: ADD_ITEM_START});
    return  axios.post('https://used-tech.herokuapp.com/api/items', item)
    .then(res => {
        console.log(res)
        dispatch ({type: ADD_ITEM_SUCCESS, payload: res.data})
    })
}

export const FETCH_ITEM_START = 'FETCH_ITEM_START';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';

export const fetchItems = item => dispatch => {
    dispatch ({type: FETCH_ITEM_START});
    return axios.get('https://used-tech.herokuapp.com/api/items', item).then(res => {
        dispatch ({type: FETCH_ITEM_SUCCESS, payload: res.data})
    })
}

export const ITEM_DETAIL_START = 'ITEM_DETAIL_START';
export const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';

export const itemDetail = id => dispatch => {
    dispatch ({type: ITEM_DETAIL_START});
    // const headers = {Authorization: localStorage.getItem('token')}
    return axios.get(`https://used-tech.herokuapp.com/api/items/${id}`).then(res => {
        console.log(res)
        dispatch({type: ITEM_DETAIL_SUCCESS, payload: res.data})
    })
}

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';


export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_START });
  return axios
    .delete(`https://used-tech.herokuapp.com/api/items/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    // return true
};

export const EDIT_ITEM_START = 'EDIT_FRIEND_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_FRIEND_SUCCESS';


export const editItem = item => dispatch => {
  dispatch({ type: EDIT_ITEM_START });
  console.log(item.id)
  return axios
    .put(`https://used-tech.herokuapp.com/api/items/${item.id}`, item,   {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: EDIT_ITEM_SUCCESS, payload: res.data });
    })
};