import { TranslateServiceFactory } from '../LingAnyTranslator/TranslateServiceFactory';
import { TranslateElement } from '../LingAnyTranslator/TranslateElement';

const tsf = TranslateServiceFactory.CreateTranslater("en", "ru");
const translateElem = new TranslateElement();

document.addEventListener('dblclick', function(event){
  if (translateElem.translateElem) {
    console.log("try delet");
    document.getElementById("translateElem").remove();
  }
  var s = window.getSelection();
  console.log(s.toString());
  translateElem.CreateTranslateElement();
  translateElem.SetTextContent(s.toString());
  translateElem.SetPosition(event.pageX, event.pageY);
  translateElem.RevealElement();
  var body = document.getElementsByTagName("body")[0];
  console.log(translateElem.translateElem);
  body.appendChild(translateElem.translateElem);
  const res = tsf.Translate("word")
  console.log(res);
});