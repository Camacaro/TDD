import { MissingFormalParameter } from '../errors/client-error';
import { IHttpRequest, IHttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {


  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredProperties = ['name', 'model', 'year'];

    for( const prop of requiredProperties ) {
      if( !httpRequest.body[prop] ) {
        return {
          statusCode: 400,
          body: new MissingFormalParameter(prop)
        }
      }
    }

    return {
      statusCode: 0,
      body: null
    }
  } 

}