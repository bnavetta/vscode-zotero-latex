import * as config from './config';
import { insertAtCursor } from './util';
import { cayw } from './api';

export async function zoteroCite() {
    console.log('Showing CAYW picker');
    const citation = await cayw('latex', config.latexCommand(), config.minimizeAfterPicking());

    console.log(`Inserting citation ${citation}`);
    await insertAtCursor(citation);
}