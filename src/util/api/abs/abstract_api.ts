import axios from "axios";

export interface response {
  data: any,
  status: number,
  errors?: any,
  details?: any,
}

export interface params {
  t?:string,
  type?:'movie' | 'series' | 'episode',
  y?:number,
  s?:string,
  page?:number
  i?:string
}

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6a7b36f3";

export abstract class Http_client {
  private api:string | any = process.env.REACT_APP_API_URL || url;
  private api_conecction: string | any;
  schema:string;

  constructor(schema: string = "") {
    this.schema = schema;
    this.api_conecction = this.api + schema;
  }


  get url():string{
    return this.api_conecction;
  }

  set url(new_schema:string) {
    this.api_conecction = this.api+new_schema;
  }
  /**
   * Http get request.
   * (only method for this example GET)
   * @author Daniel Cubillos
   * @returns response->json()
   */

  public async GET(query_params?:params) {
    let Response: response;

    try {
      // make request
      const request = await axios.get(this.api_conecction, {
        data: "json",
        params:query_params
      });
      // make response
      Response = {
        data: request.data,
        status: request.status,
      };

      return Response;
    } catch (error: any) {
      Response = {
        data: "request error",
        errors: error,
        status: 400,
      };

      if (process.env.NODE_ENV === "production") {
        delete Response.errors;
      }

      return Response;
    }
  }


}
