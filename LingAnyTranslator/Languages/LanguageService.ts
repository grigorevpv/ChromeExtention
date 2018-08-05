import { v4 as uuidv4 } from 'uuid';

import { Language } from "./Language";
import { ILanguageService } from "./ILanguageService";
import { LANGUAGE_URL } from './LanguageUrl';

export class LanguageService implements ILanguageService {

  public async GetById(id: uuidv4): Promise<Language> {
    let data = await fetch(LANGUAGE_URL + id);
    if (data.status == 200) {
      return new Language().fromJSON(await data.json());
    }
  }

  public async GetAll(): Promise<Language[]> {
    let lang: Language[] = [];
    let data = await fetch(LANGUAGE_URL);
    
    if (data.status == 200) {
      data = await data.json();

      for (let item in data) {
        lang.push(new Language().fromJSON(data[item]));
      }
    }
    return lang;
  }

}