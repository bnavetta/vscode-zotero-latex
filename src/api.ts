import got from 'got';
import { serverUrl } from './config';

// Fetch a citation via a Zotero Cite as you Write popup
export async function cayw(format: string, command: string | undefined, minimize: boolean = false): Promise<string> {
    let options: any = { format };

    if (command) {
        options['command'] = command;
    }

    if (minimize) {
        options['minimize'] = 'true';
    }

    const res = await got(`${serverUrl()}/cayw`, {
        query: options
    });

    return res.body;
}
