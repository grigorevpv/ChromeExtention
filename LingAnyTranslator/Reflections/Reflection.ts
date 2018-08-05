import { v4 as uuidv4 } from 'uuid';

import { Language } from '../Languages/Language';

export class Reflection {

  public Id: uuidv4;

  public Href: string;

  public Title: string;

  public ForeignLanguage: Language;

  public NativeLanguage: Language;

  public fromJSON(data: object) {
    this.Id = data['id'];
    this.Href = data['href'];
    this.Title = data['title'];
    this.ForeignLanguage = data['foreignLanguage'] && new Language().fromJSON(data['foreignLanguage']);
    this.NativeLanguage = data['nativeLanguage'] && new Language().fromJSON(data['nativeLanguage']);
    return this;
  }
}