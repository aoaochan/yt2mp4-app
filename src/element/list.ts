const __elList: HTMLDivElement | null = document.querySelector("#list");

export const elList = {
  put: (callback: (el: HTMLDivElement) => void): void => {
    if (__elList) callback(__elList);
  },
};