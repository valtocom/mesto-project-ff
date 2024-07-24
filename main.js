(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"c3d38577-06fb-4e73-82a8-b6ea7e900667","Content-Type":"application/json"}},t=function(t,n,r){return fetch("".concat(e.baseUrl,"/").concat(t),{method:n,headers:e.headers,body:r}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},n=function(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=o.querySelector(".card__image"),i=o.querySelector(".card__like-button"),u=o.querySelector(".card__like-count");return c.src=e.link,c.alt=e.name,u.textContent=e.likes.length,o.querySelector(".card__title").textContent=e.name,e.isOwner?o.querySelector(".card__delete-button").addEventListener("click",t):o.querySelector(".card__delete-button").remove(),e.isLiked&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",n),c.addEventListener("click",(function(){return r(e)})),o},r=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");c(t)}},o=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",r)},c=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",r)},i=function(e){e.querySelector(".popup__close").addEventListener("click",(function(){c(e)})),e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&c(e)}))},u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},a=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){u(e,n,t)})),a(n,r,t)},l=document.querySelector(".profile__edit-button"),p=document.querySelector(".popup_type_edit"),d=p.querySelector(".popup__form"),_=d.querySelector(".popup__input_type_name"),f=d.querySelector(".popup__input_type_description"),m=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),y=document.querySelector(".places__list"),S=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card"),h=q.querySelector(".popup__form"),E=h.querySelector(".popup__input_type_card-name"),L=h.querySelector(".popup__input_type_url"),k=document.querySelector(".popup_type_image"),b=k.querySelector(".popup__image"),g=k.querySelector(".popup__caption"),C=document.querySelector(".profile__image"),x=C.querySelector(".profile__image-avatar"),T=document.querySelector(".popup_type_avatar"),A=T.querySelector(".popup__form"),B=A.querySelector(".popup__input_avatar"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);a(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),a(n,r,t)}))}))}(t,e)}))}(O),l.addEventListener("click",(function(){_.value=m.textContent,f.value=v.textContent,s(d,O),o(p)})),S.addEventListener("click",(function(){h.reset(),s(h,O),o(q)})),C.addEventListener("click",(function(){A.reset(),s(A,O),o(T)})),A.addEventListener("submit",(function(e){var n;e.preventDefault(),(n=B.value,t("users/me/avatar","PATCH",JSON.stringify({avatar:n}))).then((function(e){x.src=e.avatar,c(T)})).catch((function(e){return console.log(e)}))})),d.addEventListener("submit",(function(e){var n,r;e.preventDefault(),(n=_.value,r=f.value,t("users/me","PATCH",JSON.stringify({name:n,about:r}))).then((function(e){m.textContent=e.name,v.textContent=e.about,c(p)})).catch((function(e){return console.log(e)}))})),h.addEventListener("submit",(function(e){var r,o;e.preventDefault(),(r=E.value,o=L.value,t("cards","POST",JSON.stringify({name:r,link:o}))).then((function(e){y.prepend(n({res:e}))})).catch((function(e){return console.log(e)})),c(q),h.reset()}));var P=function(e){var t=e.name,n=e.link;b.src=n,b.alt=t,g.textContent=t,o(k)},D=[t("cards","GET"),t("users/me","GET")];Promise.all(D).then((function(e){m.textContent=e[1].name,v.textContent=e[1].about,x.src=e[1].avatar,e[0].forEach((function(t){t.isOwner=e[1]._id===t.owner._id,t.isLiked=t.likes.some((function(t){return t._id===e[1]._id}))})),e[0].forEach((function(e){return y.append(n(e,(function(n){!function(e,n){(function(e){return t("cards/".concat(e),"DELETE")})(n).then((function(){e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))}(n,e._id)}),(function(n){!function(e,n){var r=e.target.parentNode.querySelector(".card__like-count");e.target.classList.contains("card__like-button_is-active")?function(e){return t("cards/likes/".concat(e),"DELETE")}(n).then((function(t){e.target.classList.remove("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){return console.log(e)})):function(e){return t("cards/likes/".concat(e),"PUT")}(n).then((function(t){e.target.classList.add("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}(n,e._id)}),P))}))})).catch((function(e){return console.log(e)})),i(p),i(q),i(k),i(T)})();