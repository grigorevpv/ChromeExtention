export class Word {

  public Text: string = null;

  public Translation: string = null;

  public fromJSON(data: object) {
    this.Text = data['text'];
    this.Translation = data['translation'];
    return this;
  }
}