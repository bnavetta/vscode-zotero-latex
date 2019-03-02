import * as request from 'request';
import { serverUrl } from './config';

export interface Entry {
    type: string;
    citekey: string;
    title: string;
    author?: [{ family: string, given: string }];
    [field: string]: any;
}

// Search Zotero for an entry for citing
export function search(terms: string, callback: (error?: Error, results?: Entry[]) => void): request.Request {
    return request.post({
        uri: `${serverUrl()}/json-rpc`,
        json: true,
        body: {
            jsonrpc: "2.0",
            method: "item.search",
            params: [terms] 
        }
    }, (error, _, body) => {
        if (error) {
            callback(error, undefined);
        } else if (body.error) {
            callback(new Error(body.error.message), undefined);
        } else {
            callback(undefined, body.result);
        }
    });
}
