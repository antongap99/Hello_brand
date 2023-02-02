import {
  createMessage,
  createModal,
  modalOverlay as modal,
} from "./createModal";
import { modalForm } from "./createModal";
export const modalController = () => {
  const heroBtn = document.querySelector(".hero__btn");
  const html = document.documentElement;
  modal.classList.add("hidden");
  document.body.append(modal);
  let prevModal;

  document.addEventListener("click", (e) => {
    const target = e.target;
    const htmlWidth = html.clientWidth;

    if (target === heroBtn) {
      modal.classList.toggle("hidden");
      html.style.overflow = "hidden";

      document.body.style.paddingRight = `15px`;
    }
    if (target.closest(".overlay") && !target.closest(".modal")) {
      modal.classList.toggle("hidden");
      html.style.overflow = "";
      document.body.style.paddingRight = "";
      if (modal.childNodes[0].classList.contains("hidden")) {
        modal.childNodes[0].classList.remove("hidden");
        modal.childNodes[1].remove();
      }
    }
  });

  const showReq = (mess) => {
    modal.childNodes[0].classList.add("hidden");
    const reqModal = createModal();
    reqModal.append(createMessage(mess));
    modal.append(reqModal);
  } 

  const request = async (form) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          phone: form.phone.value,
          email: form.email.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (res.ok) {
        showReq("Сообщение отправлено");
      } else {
        throw new Error(`Ошибка отправки. Статус ${res.status}`);
      }
    } catch (error) {
      showReq(error.message);
    }
  };

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    request(modalForm);
    modalForm.reset();
  });
};
