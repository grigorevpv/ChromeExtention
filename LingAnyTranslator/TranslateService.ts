import { WordChecker } from './WordChecker';

export class TranslateService {

  private _nativeLang: string = 'ru';
  private _foreignLang: string = 'en';

  constructor(nativeLang: string, foreignLang: string) {
    this._nativeLang = nativeLang;
    this._foreignLang = foreignLang;
  }

  public Translate(selectedWord: string): string {
    if (WordChecker.Check(selectedWord)) {
      return 'a';
    }
  }

}