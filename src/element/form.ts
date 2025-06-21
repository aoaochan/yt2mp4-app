const __elInputTitle: HTMLInputElement | null = document.querySelector("#input-title");
export const elInputTitle = {
  get: (): string | undefined => {
    if (!__elInputTitle) return undefined;
    return __elInputTitle.value;
  },
  put: (callback: (el: HTMLInputElement) => void): void => {
    if (__elInputTitle) callback(__elInputTitle);
  }
};

const __elInputURL: HTMLInputElement | null = document.querySelector("#input-url");
export const elInputURL = {
  get: (): string | undefined => {
    if (!__elInputURL) return undefined;
    return __elInputURL.value;
  },
  put: (callback: (el: HTMLInputElement) => void): void => {
    if (__elInputURL) callback(__elInputURL);
  }
};

const __elInputControlTime: HTMLInputElement | null = document.querySelector("#input-controltime");
export const elInputControlTime = {
  get: (): boolean | undefined => {
    if (!__elInputControlTime) return undefined;
    return __elInputControlTime.checked;
  },
  put: (callback: (el: HTMLInputElement) => void): void => {
    if (__elInputControlTime) callback(__elInputControlTime);
  }
};

const __elInputStart: HTMLInputElement | null = document.querySelector("#input-start");
export const elInputStart = {
  get: (): number | undefined => {
    if (!__elInputStart) return undefined;
    const val: number = Number(__elInputStart.value);
    if (Number.isNaN(val)) return undefined;
    return val;
  },
  put: (callback: (el: HTMLInputElement) => void): void => {
    if (__elInputStart) callback(__elInputStart);
  }
};

const __elInputEnd: HTMLInputElement | null = document.querySelector("#input-end");
export const elInputEnd = {
  get: (): number | undefined => {
    if (!__elInputEnd) return undefined;
    const val: number = Number(__elInputEnd.value);
    if (Number.isNaN(val)) return undefined;
    return val;
  },
  put: (callback: (el: HTMLInputElement) => void): void => {
    if (__elInputEnd) callback(__elInputEnd);
  }
};

const __elAddingForm: HTMLFormElement | null = document.querySelector("#addingform");
let latestSubmitEevent: () => void = () => {};
export const elAddingForm = {
  clear: () => {
    if (__elAddingForm) __elAddingForm.removeEventListener("submit", latestSubmitEevent);
  },
  setSubmitListener: (callback: () => void): void => {
    elAddingForm.clear();

    latestSubmitEevent = callback;

    if (__elAddingForm) __elAddingForm.addEventListener("submit", latestSubmitEevent);
  }
};