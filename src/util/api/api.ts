import { Http_client } from "./abs/abstract_api";

class Api extends Http_client {
    schema: string;
    constructor(schema:string){
        super(schema);
        this.schema = schema;
    }

    // make aditonal methods here :)
    // work at a clean tree
}

export default Api;