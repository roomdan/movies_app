import { change_option } from '../reducers/select_movie_option';

export default function select_movie_action(option:string) {

    const action:change_option = {
        type:"CHANGE_OPTION",
        payload:option
    }

  return action;
}
