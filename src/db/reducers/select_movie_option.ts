import { filter_options } from "../../components/home/molecules/filter/filter"

export interface change_option {
    type:"CHANGE_OPTION",
    payload:any
}

const initial_state = filter_options[0];

export default function select_movie_option_reducer(state:any = initial_state, action:change_option){
    switch (action.type) {
        case "CHANGE_OPTION":
            return action.payload
        default:
            return initial_state
    }
}