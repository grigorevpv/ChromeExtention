import { TranslateServiceFactory } from './Built/tsc';

function translate() {
  console.log("in function");
  const tsf = TranslateServiceFactory.CreateTranslater('en', 'ru');
  tsf.Translate('name');
}

document.addEventListener('dblclick', translate);

