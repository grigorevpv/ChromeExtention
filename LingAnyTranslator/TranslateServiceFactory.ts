import { TranslateService } from "./TranslateService";

export class TranslateServiceFactory {

  public static CreateTranslater(nativeLang: string, foreignLang: string): TranslateService {
    return new TranslateService(nativeLang, foreignLang);
  }

}