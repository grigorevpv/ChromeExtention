import { ILanguageService } from './Languages/ILanguageService';
import { IReflectionService } from './Reflections/IReflectionSevice';
import { IWordService } from './Words/IWordService';
import { LanguageService } from './Languages/LanguageService';
import { ReflectionService } from './Reflections/ReflectionService';
import { WordService } from './Words/WordService';

export class LingAnyTranslateApi {

  public Languages: ILanguageService;
  public Reflection: IReflectionService;
  public Words: IWordService;

  constructor() {
    this.Languages = new LanguageService();
    this.Reflection = new ReflectionService();
    this.Words = new WordService();
  }

}