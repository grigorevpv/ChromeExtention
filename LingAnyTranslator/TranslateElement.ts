const elemStyle: string = 'display:block;color:red;background:yellow;position:absolute;z-index:1300 !important;'

export class TranslateElement {

  isHidden: boolean = true;
  translateElem: HTMLElement;

  public CreateTranslateElement(wordTranslate: string): HTMLElement {
    this.translateElem = document.createElement("div");
    return this.translateElem;
  }

  public SetPosition(positionX: number, positionY: number): HTMLElement {
    this.translateElem.setAttribute("style", elemStyle+`left:${positionX}px;top:${positionY}px;`);
    return this.translateElem;
  }

  public SetTextContent(wordTranslate: string): HTMLElement {
    this.translateElem.appendChild(document.createTextNode(wordTranslate));
    return this.translateElem;
  }

  public HideElement() {
    if (!this.isHidden) {
      this.isHidden = !this.isHidden;
      this.translateElem.setAttribute("style", elemStyle+`visibility:visible`);
    }
  }

  public RevealElement() {
    if (this.isHidden) {
      this.isHidden = !this.isHidden;
      this.translateElem.setAttribute("style", elemStyle+`visibility:hidden`);
    }
  }
  
}