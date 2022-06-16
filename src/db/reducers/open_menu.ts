
export interface open_action  {
    type:string,
    payload:object
}

const inital_store = {
    menu:false
}

export default function open_menu_reducer(store:any=inital_store, action:open_action) {
    switch (action.type) {
        case 'OPEN_MENU':
            return action.payload;
        default:
            return inital_store;
    }
}