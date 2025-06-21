import { elList } from "./list";

let __elNothing: HTMLParagraphElement | null = document.querySelector("#nothing");

export const elNothing = {
  put: (callback: (el: HTMLParagraphElement) => void): void => {
    if (__elNothing) callback(__elNothing);
  },
  delete: (): void => {
    if (__elNothing) {
      __elNothing.remove();
      __elNothing = null;
    }
  },
  create: (): void => {
    elNothing.delete();

    __elNothing = document.createElement("p");
    __elNothing.id = "nothing";
    __elNothing.innerText = "(추가된 영상이 없어요)";
    
    elList.put((el: HTMLDivElement) => {
      if (__elNothing) el.appendChild(__elNothing);
    });
  }
}