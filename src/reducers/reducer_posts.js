import { FETCH_POSTS } from "../actions";
import { FETCH_POST } from "../actions";
import { DELETE_POST} from "../actions";
import _ from 'lodash';

export default function (state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            const post = action.payload.data;
            return {...state, [post.id]: post};


        /*newState[post.id] = post;
        const newState = {...state};  //es5 syntax
        return newState;*/

        default:
            return state
    }
}