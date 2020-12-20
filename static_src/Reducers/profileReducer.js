import update from 'react-addons-update';
import { PROFILE } from '../actions/profileActions';

const initialStore = {
    profile: {
        name: 'Name',
        desc: 'Description',
    },
};


export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case PROFILE: {
            return update(store, {
                profile: {
                    $merge: {
                        name: action.name,
                        desc: action.desc
                    }
                },
            });
        }
        default:
            return store;
    }
}
