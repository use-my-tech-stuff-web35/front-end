import {
    LOGIN_START,
    LOGIN_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    DELETE_START,
    DELETE_SUCCESS,
    ITEM_DETAIL_START,
    ITEM_DETAIL_SUCCESS, 
    EDIT_ITEM_START,
    EDIT_ITEM_SUCCESS
} from '../actions'

const initialState = {
    loggingIn: false,
    error: null,
    token: localStorage.getItem('token'),
    signingUp: false,
    addingItem: false,
    fetchingItem: false,
    owner: null,
    items: [],
    gettingDetail: false,
    item: {},
    deletingItem: false,
    editingItem: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
        console.log(action.payload)
            return {
                ...state,
                loggingIn: false,
                token: action.payload.token,
                owner: action.payload.id
            };
        case SIGN_UP_START:
            return {
                ...state,
                signingUp: true,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signingUp: false
            };
        case SIGN_UP_ERROR:
            return {
                ...state,
                signingUp: false
            };
        case ADD_ITEM_START:
            return {
                ...state,
                addingItem: true
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                addingItem: false
            };
        case FETCH_ITEM_START:
            return {
                ...state,
                fetchingItem: true
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                fetchingItem: false,
                items: action.payload
            };
        case ITEM_DETAIL_START:
            return {
                ...state,
                gettingDetail: true,
            }
        case ITEM_DETAIL_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                item: action.payload
            }
        case DELETE_START:
            return {
                ...state,
                deletingItem: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                deletingItem: false,
                item: action.payload
            }
        case EDIT_ITEM_START:
            return {
                ...state,
                editingItem: true,
            }
        case EDIT_ITEM_SUCCESS:
            return {
                ...state,
                editingItem: false,
                item: action.payload
            }
        default:
            return state;
    }
}
 
export default reducer;