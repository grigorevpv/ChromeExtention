import { TranslateServiceFactory } from '../LingAnyTranslator/TranslateServiceFactory';
import { TranslateElement } from '../LingAnyTranslator/TranslateElement';

const tsf = TranslateServiceFactory.CreateTranslater("ru", "en");
const translateElem = new TranslateElement();

document.addEventListener('dblclick', function(event){
  if (translateElem.translateElem) {
    document.getElementById("translateElem").remove();
  }
  var s = window.getSelection();
  translateElem.CreateTranslateElement();
  translateElem.SetTextContent(s.toString());
  translateElem.SetPosition(event.pageX, event.pageY);
  translateElem.RevealElement();
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(translateElem.translateElem);
  const res = tsf.Translate(s.toString());
  res.then(translate => {
    console.log(translate);
  })
});