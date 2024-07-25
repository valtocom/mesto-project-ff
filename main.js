(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"c3d38577-06fb-4e73-82a8-b6ea7e900667","Content-Type":"application/json"}},t=function(t,n,o){return fetch("".concat(e.baseUrl,"/").concat(t),{method:n,headers:e.headers,body:o}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},n=function(e,n){var o=e.target.parentNode.querySelector(".card__like-count"),r=function(t){e.target.classList.toggle("card__like-button_is-active"),o.textContent=t.likes.length};e.target.classList.contains("card__like-button_is-active")?function(e){return t("cards/likes/".concat(e),"DELETE")}(n).then(r).catch((function(e){return console.log(e)})):function(e){return t("cards/likes/".concat(e),"PUT")}(n).then(r).catch((function(e){return console.log(e)}))},o=function(e,t,n,o,r){console.log(e);var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),i=c.querySelector(".card__like-button"),a=c.querySelector(".card__like-count");return u.src=e.link,u.alt=e.name,a.textContent=e.likes.length,c.querySelector(".card__title").textContent=e.name,t===e.owner._id?c.querySelector(".card__delete-button").addEventListener("click",n):c.querySelector(".card__delete-button").remove(),e.isLiked&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",o),u.addEventListener("click",(function(){return r(e)})),c},r=function(e,n){(function(e){return t("cards/".concat(e),"DELETE")})(n).then((function(){e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))},c=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");i(t)}},u=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",c)},i=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",c)},a=function(e){e.querySelector(".popup__close").addEventListener("click",(function(){i(e)})),e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&i(e)}))},l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,o,t)},d=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),f=_.querySelector(".popup__form"),y=f.querySelector(".popup__input_type_name"),m=f.querySelector(".popup__input_type_description"),v=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),q=_.querySelector(".popup__button"),C=document.querySelector(".places__list"),b=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_new-card"),E=h.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_card-name"),g=E.querySelector(".popup__input_type_url"),k=h.querySelector(".popup__button"),x=document.querySelector(".popup_type_image"),T=x.querySelector(".popup__image"),A=x.querySelector(".popup__caption"),B=document.querySelector(".profile__image"),P=B.querySelector(".profile__image-avatar"),D=document.querySelector(".popup_type_avatar"),N=D.querySelector(".popup__form"),O=N.querySelector(".popup__input_avatar"),j=D.querySelector(".popup__button"),w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},J=[t("cards","GET"),t("users/me","GET")],M=function(e){var t=e.name,n=e.link;T.src=n,T.alt=t,A.textContent=t,u(x)};d.addEventListener("click",(function(){y.value=v.textContent,m.value=S.textContent,p(f,w),u(_)})),b.addEventListener("click",(function(){E.reset(),p(E,w),u(h)})),B.addEventListener("click",(function(){N.reset(),p(N,w),u(D)})),N.addEventListener("submit",(function(e){var n;e.preventDefault(),j.textContent="Сохранение...",(n=O.value,t("users/me/avatar","PATCH",JSON.stringify({avatar:n}))).then((function(e){P.src=e.avatar,i(D)})).catch((function(e){return console.log(e)})).finally((function(){return j.textContent="Сохранить"}))})),f.addEventListener("submit",(function(e){var n,o;e.preventDefault(),q.textContent="Сохранение...",(n=y.value,o=m.value,t("users/me","PATCH",JSON.stringify({name:n,about:o}))).then((function(e){v.textContent=e.name,S.textContent=e.about,i(_)})).catch((function(e){return console.log(e)})).finally((function(){return q.textContent="Сохранить"}))})),E.addEventListener("submit",(function(e){var c,u;e.preventDefault(),k.textContent="Сохранение...",(c=L.value,u=g.value,t("cards","POST",JSON.stringify({name:c,link:u}))).then((function(e){C.prepend(o(e,e.owner._id,(function(t){r(t,e._id)}),(function(t){n(t,e._id)}),M)),i(h),E.reset()})).catch((function(e){return console.log(e)})).finally((function(){return k.textContent="Сохранить"}))})),Promise.all(J).then((function(e){v.textContent=e[1].name,S.textContent=e[1].about,P.src=e[1].avatar,e[0].forEach((function(t){t.isLiked=t.likes.some((function(t){return t._id===e[1]._id}))})),e[0].forEach((function(t){return C.append(o(t,e[1]._id,(function(e){r(e,t._id)}),(function(e){n(e,t._id)}),M))}))})).catch((function(e){return console.log(e)})),a(_),a(h),a(x),a(D),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);s(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),s(n,o,t)}))}))}(t,e)}))}(w)})();