import { loader_action } from '../reducers/loader';


export default function Onloader_action(option:boolean) {

    const action:loader_action = {
        type:"CHARGING",
        payload:option
    }

  return action;
}
