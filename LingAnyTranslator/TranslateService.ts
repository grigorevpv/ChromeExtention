import { v4 as uuidv4 } from 'uuid';

import { WordChecker } from './WordChecker';
import { LingAnyTranslateApi } from './LingAnyTranslateApi';
import { Language } from './Languages/Language';
import { Reflection } from './Reflections/Reflection';

export class TranslateService {

  private _nativeLang: string = null;
  private _foreignLang: string = 'en';
  private _nativeLangId: uuidv4 = null;
  private _foreignLangId: uuidv4 = null;
  private _reflection: Reflection = null;
  private _languages: Language[] = [];
  private _translator: LingAnyTranslateApi;

  constructor(nativeLang: string, foreignLang: string) {
    this._nativeLang = this.GetDoubleLanguageCode(nativeLang);
    this._foreignLang = this.GetDoubleLanguageCode(foreignLang);
    this._translator = new LingAnyTranslateApi();
  }

  public async Translate(selectedWord: string): Promise<string> {
    if (WordChecker.Check(selectedWord)) {
      console.log('[Translate] selected word = ' + selectedWord);
      if(!(this._nativeLangId || this._foreignLangId)) {
        let isSetLang = await this.SetLanguages();
        if(!isSetLang) {
          return "Select Native Language";
        }
        this._reflection = await this.GetReflection();
      }
      let word = await this._translator.Words.GetTranslationByText(selectedWord, this._reflection.Id);
      return word.Translation;      
    }
  }

  private async GetReflection() {
    return await this._translator.Reflection.GetReflectionByLanguages(this._nativeLangId, this._foreignLangId);
  }

  private async SetLanguages(): Promise<boolean> {
    this._languages = await this._translator.Languages.GetAll();
    this._nativeLangId = this.GetLanguageIdByCode(this._nativeLang);
    this._foreignLangId = this.GetLanguageIdByCode(this._foreignLang);
    if (!(this._foreignLangId || this._nativeLangId)) {
      return false
    } else {
      return true;
    }
  }

  private GetDoubleLanguageCode(language: string) {
    return language.slice(0, 2);
  }

  private LanguageBelong(language) {
    return language.Code === this._nativeLang;
  }

  private GetLanguageIdByCode(code: string) {
    let id: uuidv4 = null;
    this._languages.forEach((lang) => {
      if (lang.Code === code) {
         id = lang.Id;
      }
    })

    return id;
  }

}