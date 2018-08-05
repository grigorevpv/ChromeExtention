import { v4 as uuidv4 } from 'uuid';

import { Word } from './Word';

export interface IWordService {

  GetTranslationByText(text: string, refId: uuidv4): Promise<Word>;
  GetTextByTranslation(translation: string, refId: uuidv4): Promise<Word>;

}