import { v4 as uuidv4 } from 'uuid';

export class Language {

  public Id: uuidv4 = null;

  public Href: string = null;

  public Title: string = null;

  public Code: string = null;

  public fromJSON(data: object) {
    this.Id = data['id'];
    this.Href = data['href'];
    this.Title = data['title'];
    this.Code = data['code'];
    return this;
  }

}