import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';

import { IReflectionService } from './IReflectionSevice';
import { Reflection } from './Reflection';
import { REFLECTION_URL } from './ReflectionUrl';
import { Language } from '../Languages/Language';
import { LanguageService } from '../Languages/LanguageService';

export class ReflectionService implements IReflectionService {

  public async GetById(id: uuidv4): Promise<Reflection> {
    let data = await fetch(REFLECTION_URL + id);
    if (data.status == 200) {
      return new Reflection().fromJSON(await data.json());
    }
  }

  public async GetAll(): Promise<Reflection[]> {
    let ref: Reflection[] = [];
    let data = await fetch(REFLECTION_URL);
    
    if (data.status == 200) {
      data = await data.json();

      for (let item in data) {
        ref.push(new Reflection().fromJSON(data[item]));
      }
    }
    return ref;
  }

  public async GetReflectionByLanguages(nId: uuidv4, fId: uuidv4): Promise<Reflection> {
    let data = await fetch(REFLECTION_URL + `languages/${nId}/${fId}`);
    if (data.status == 200) {
      return new Reflection().fromJSON(await data.json());
    }
  }
}