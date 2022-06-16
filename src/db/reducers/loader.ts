
export interface loader_action  {
    type:string,
    payload:boolean
}

const inital_store = true;

export default function loader_reducer(store:any=inital_store, action:loader_action) {
    switch (action.type) {
        case 'CHARGING':
            return action.payload;
        default:
            return inital_store;
    }
}