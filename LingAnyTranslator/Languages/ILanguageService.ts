import { v4 as uuidv4 } from 'uuid';

import { Language } from './Language';

export interface ILanguageService {

  GetById(id: uuidv4): Promise<Language>;
  GetAll(): Promise<Language[]>;

}