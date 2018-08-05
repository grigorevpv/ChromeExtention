import { ILanguageService } from './Languages/ILanguageService';
import { IReflectionService } from './Reflections/IReflectionSevice';
import { IWordService } from './Words/IWordService';

export interface ILingAnyTranslateApi {

  Languages: ILanguageService;
  Reflections: IReflectionService;
  Words: IWordService;

}