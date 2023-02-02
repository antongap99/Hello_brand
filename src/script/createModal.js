export const createOverlay = (modal) => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.append(modal);
  return overlay;
};

export const createModal = (...elems) => {
  const modal = document.createElement("div");

  if (elems.length === 0) {
    modal.classList.add("modal__response");
    return modal;
  }
  modal.classList.add("modal");
  modal.append(...elems);
  return modal;
};

const createTitle = (content) => {
  const title = document.createElement("h1");
  title.textContent = content;
  title.classList.add("model__title");

  return title;
};
const createInputGroup = (labelContent, placeHolder, id, name) => {
  const label = document.createElement("label");
  label.classList.add("form__label");
  label.textContent = labelContent;
  label.setAttribute("for", id);
  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("form__input");
  input.placeholder = placeHolder;
  input.name = name;
  input.id = id;

  const inputGroup = document.createElement("div");
  inputGroup.classList.add("form__group");
  inputGroup.append(label, input);
  return inputGroup;
};
const createBtn = (text) => {
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.classList.add("modal__btn");
  btn.textContent = text;

  return btn;
};
const createForm = (...elems) => {
  const form = document.createElement("form");
  form.classList.add("modal__form");
  form.append(...elems);
  return form;
};

export const modalForm = createForm(
  createInputGroup("Phone", "phone", 3203, "phone"),
  createInputGroup("Email", "email", 3203, "email"),
  createBtn("send")
);

const modal = createModal(createTitle("Reserve a table"), modalForm);
export const modalOverlay = createOverlay(modal);

export const createMessage = (message) => {
  const mess = document.createElement("p");
  mess.textContent = message;

  return mess;
};
