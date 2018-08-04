import { TranslateServiceFactory } from '../LingAnyTranslator/TranslateServiceFactory';
import { TranslateElement } from '../LingAnyTranslator/TranslateElement';

const tsf = TranslateServiceFactory.CreateTranslater("en", "ru");
const translateElem = new TranslateElement().CreateTranslateElement();

document.addEventListener('dblclick', function(event){
  debugger;
  console.log("in dblclick");
  var s = window.getSelection();
  console.log(s.toString());
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(newNode);
  const res = tsf.Translate("word")
  console.log(res);
});