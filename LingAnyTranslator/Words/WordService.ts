import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';

import { IWordService } from './IWordService';
import { Word } from './Word';
import { WORD_URL } from './WordUrl';

export class WordService implements IWordService {

  public async GetTranslationByText(text: string, refId: uuidv4): Promise<Word> {
    let data = await fetch(WORD_URL + `text/${text}/${refId}`);
    if (data.status == 200) {
      return new Word().fromJSON(await data.json());
    } 
  }

  public async GetTextByTranslation(translation: string, refId: uuidv4): Promise<Word> {
    let data = await fetch(WORD_URL + `translation/${translation}/${refId}`);
    if (data.status == 200) {
      return new Word().fromJSON(await data.json());
    } 
  }

}