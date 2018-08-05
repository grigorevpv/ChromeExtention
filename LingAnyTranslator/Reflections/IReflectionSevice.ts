import { v4 as uuidv4 } from 'uuid';

import { Reflection } from './Reflection';

export interface IReflectionService {

  GetById(id: uuidv4): Promise<Reflection>;
  GetAll(): Promise<Reflection[]>;
  GetReflectionByLanguages(nId: uuidv4, fId: uuidv4): Promise<Reflection>;

}