let elemStyle: string = 'display:block;color:red;background:yellow;position:absolute;z-index:1300 !important;'

export class TranslateElement {

  isHidden: boolean = true;
  translateElem: HTMLElement = null;

  public CreateTranslateElement(wordTranslate: string): HTMLElement {
    this.translateElem = document.createElement("div");
    this.translateElem.setAttribute("id", "translateElem");
    return this.translateElem;
  }

  public SetPosition(positionX: number, positionY: number): HTMLElement {
    elemStyle += `left:${positionX}px;top:${positionY}px;`;
    this.translateElem.setAttribute("style", elemStyle);
    return this.translateElem;
  }

  public SetTextContent(wordTranslate: string): HTMLElement {
    let node = document.createTextNode(wordTranslate);
    this.translateElem.appendChild(node);
    return this.translateElem;
  }

  public HideElement() {
    if (!this.isHidden) {
      this.isHidden = !this.isHidden;
      this.translateElem.setAttribute("style", elemStyle+`visibility:hidden`);
    }
  }

  public RevealElement() {
    if (this.isHidden) {
      this.isHidden = !this.isHidden;
      this.translateElem.setAttribute("style", elemStyle+`visibility:visible`);
    }
  }
  
}