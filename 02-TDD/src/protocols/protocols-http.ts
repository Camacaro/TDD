import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArg } from '../errors/invalid-arg';

export class UrlLogin {

  public static parseUrl (url: string): UrlWithParsedQuery {
    if(!url) {
      throw new InvalidArg(url);
    }

    return parse(url, true)
  }
}