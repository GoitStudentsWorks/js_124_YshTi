import{a as d,i as G,S,A as U,R as z,b as I,N as C,P as _,c as J}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();d.defaults.baseURL="https://paw-hut.b.goit.study/api";async function K(){return(await d.get("/categories")).data}async function W(e,t,s){let o=e?{page:t,limit:s,categoryId:e}:{page:t,limit:s};return(await d.get("/animals",{params:o})).data}function B(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}G.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function Q(e){return(await d.post("https://paw-hut.b.goit.study/api/orders",e)).data}const q=document.querySelector(".modalCloseButton");function X(e){const t=document.getElementById("form-backdrop");if(!t)return;const s=t.querySelector("form");s&&(s.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("body-no-scroll"),s.addEventListener("submit",async o=>{var n,c;if(o.preventDefault(),!s.name.value.trim()||!s.tel.value.trim()){s.reportValidity();return}const a={name:s.name.value.trim(),phone:s.tel.value.trim(),animalId:s.dataset.animalId,comment:s.comment.value.trim()||"Немає коментаря"};try{Y(),await Q(a),S.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(V){S.fire({icon:"error",title:"Помилка",text:((c=(n=V.response)==null?void 0:n.data)==null?void 0:c.message)||"Помилка при відправленні заявки"})}finally{Z()}},{once:!0}))}function y(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("body-no-scroll")}q&&q.addEventListener("click",y);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&y()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&y()});const O=document.querySelector("#form-backdrop .loader");function Y(){O.classList.remove("is-hidden")}function Z(){O.classList.add("is-hidden")}const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function ee(e){return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${e.species}</p>
        <h2 class="animal-name">${e.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${e.age}</span> 
            <span class="meta-key">${e.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${e.description||"Опис скоро з’явиться"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Здоров’я:</h3>
                <p class="trait-text">${e.health||"Тваринка здорова та обстежена"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Поведінка:</h3>
                <p class="trait-text">${e.behavior||"Спокійна та дружелюбна"}</p>
            </li>
        </ul>
        
        <button type="button" class="btn-adopt" data-animal-id="${e._id||""}"" >Взяти додому</button>
    </div>
  `}function te(e){if(!r.backdrop||!r.modalContent)return;r.modalContent.innerHTML=ee(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=r.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const s=t.dataset.animalId;X(s),b()}),window.addEventListener("keydown",T)}function b(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",T)}function T(e){e.code==="Escape"&&b()}var M;(M=r.closeBtn)==null||M.addEventListener("click",b);var A;(A=r.backdrop)==null||A.addEventListener("click",e=>{e.target===r.backdrop&&b()});function se(e){return g.find(t=>t._id===e)}let g=[],p="all",f=1,h,$=ae();function ae(){return window.innerWidth>=1440?9:8}const v=document.querySelector(".our-pets-categories");v.addEventListener("click",re);async function oe(){try{const e=await K();ne(e)}catch(e){B(e.status)}}function ne(e){let t=e.map(s=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${s._id}" aria-label="${s.name}" type="button">${s.name}</button>
      </li>`).join("");v.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function re(e){if(e.target.dataset.id!==p&&e.target.closest("button")){let t=v.querySelector(".active");t&&t.classList.remove("active"),p=e.target.dataset.id,e.target.classList.add("active"),k()}}const L=document.querySelector(".our-pets-list");async function k(e=!1){D(),R(),e||(L.innerHTML="",f=1);const t=p==="all"?"":p;try{const s=await W(t,f,$);h=Math.ceil(s.totalItems/$),ie(s.animals),x(),e?g.push(...s.animals):g=s.animals}catch(s){B(s.status)}finally{de()}}L.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const s=t.dataset.id,o=se(s);o&&te(o)});function ie(e){let t=e.map(s=>{let o=s.categories.map(a=>`<li class="pets-category"><p>${a.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${s.image}"
          alt="${s.species}"
        />
        <p class="pets-species">${s.species}</p>
        <h3 class="pets-name">${s.name}</h3>
        <ul class="pets-categories">
          ${o}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${s.age}</li>
          <li class="pets-personal-item">${s.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${s.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${s._id}" aria-label="Дізнатись більше про ${s.name}">Дізнатись більше</button>
      </li>`}).join("");L.insertAdjacentHTML("beforeend",t)}const w=document.querySelector("#pets-pagination");w.addEventListener("click",ce);function x(){return h&&f<h?(le(),!0):(D(),!1)}async function ce(){x()&&(f+=1,k(!0))}function D(){w.classList.add("is-hidden")}function le(){w.classList.remove("is-hidden")}const F=document.querySelector(".loader");function de(){F.classList.add("is-hidden")}function R(){F.classList.remove("is-hidden")}async function ue(){R(),await oe(),await k()}ue();const P="/Group_Project_JS/assets/sprite-DBtBz0EI.svg";document.addEventListener("DOMContentLoaded",function(){new U(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const s=t.querySelector(".faq-icon use");t.classList.contains("is-active")?s.setAttribute("href",`${P}#icon-close`):s.setAttribute("href",`${P}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const me="https://paw-hut.b.goit.study/api/feedbacks";async function pe(e=1){const t={limit:6,page:e};try{return(await d.get(me,{params:t})).data}catch(s){console.log("Feedback error:",s)}}const fe=document.querySelector(".textFedbacks");async function ye(e=1){try{const s=(await pe(e)).feedbacks.map(({author:o,rate:a,description:n})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${a}"></div>

            <p class="feedback-description">
              ${n}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");fe.innerHTML=s,document.querySelectorAll(".raty-stars").forEach(o=>{const a=o.dataset.score;new z(o,{starType:"i",score:a,readOnly:!0,halfShow:!0}).init()}),new I(".stories-swiper",{modules:[C,_],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const l=document.querySelector(".about-swiper"),u=l==null?void 0:l.closest(".about__slider");l&&u&&new I(l,{modules:[C,_,J],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:u.querySelector(".about__nav--prev"),nextEl:u.querySelector(".about__nav--next")},pagination:{el:u.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const m=document.querySelector(".footer__cat-decor");function N(){if(!m)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{m.style.left=`${t}%`,m.classList.add("is-visible"),setTimeout(()=>{m.classList.remove("is-visible"),N()},4e3)},e)}N();const j=document.querySelector(".nav-burgermenu"),H=document.querySelector(".mobile-close-icon"),i=document.querySelector(".mobile-modal"),E=document.querySelector("body");console.log(E);j.addEventListener("click",()=>{i.classList.add("is-active"),E.style.overflow="hidden"});H.addEventListener("click",()=>{i.classList.remove("is-active"),E.style.overflow="auto"});j.addEventListener("click",()=>{i.classList.add("is-active")});H.addEventListener("click",()=>{i.classList.remove("is-active")});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-active")&&i.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),i.classList.contains("is-active")&&i.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ye();
//# sourceMappingURL=index.js.map
