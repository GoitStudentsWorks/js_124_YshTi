import{a as d,i as U,S as q,A as W,R as z,b as C,N as I,P as x,c as G}from"./assets/vendor-BIIFLgS-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const B="/js_124_YshTi/assets/hero@1x-DW7JCWY_.webp",K="/js_124_YshTi/assets/hero@2x-BAmaVxfK.webp",c=document.createElement("link");c.rel="preload";c.as="image";c.href=B;c.setAttribute("imagesrcset",`${B} 1x, ${K} 2x`);c.setAttribute("fetchpriority","high");document.head.appendChild(c);d.defaults.baseURL="https://paw-hut.b.goit.study/api";async function J(){return(await d.get("/categories")).data}async function Q(e,t,s){let o=e?{page:t,limit:s,categoryId:e}:{page:t,limit:s};return(await d.get("/animals",{params:o})).data}function T(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}U.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function X(e){return(await d.post("https://paw-hut.b.goit.study/api/orders",e)).data}const $=document.querySelector(".modalCloseButton");function Z(e){const t=document.getElementById("form-backdrop");if(!t)return;const s=t.querySelector("form");s&&(s.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("body-no-scroll"),s.addEventListener("submit",async o=>{var r,i;if(o.preventDefault(),!s.name.value.trim()||!s.tel.value.trim()){s.reportValidity();return}const a={name:s.name.value.trim(),phone:s.tel.value.trim(),animalId:s.dataset.animalId,comment:s.comment.value.trim()||"Немає коментаря"};try{ee(),await X(a),q.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(Y){q.fire({icon:"error",title:"Помилка",text:((i=(r=Y.response)==null?void 0:r.data)==null?void 0:i.message)||"Помилка при відправленні заявки"})}finally{te()}},{once:!0}))}function y(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("body-no-scroll")}$&&$.addEventListener("click",y);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&y()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&y()});const O=document.querySelector("#form-backdrop .loaderOverlay");function ee(){O.classList.remove("is-hidden")}function te(){O.classList.add("is-hidden")}const n={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function se(e){return`
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
  `}function ae(e){if(!n.backdrop||!n.modalContent)return;n.modalContent.innerHTML=se(e),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=n.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const s=t.dataset.animalId;Z(s),b()}),window.addEventListener("keydown",D)}function b(){n.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",D)}function D(e){e.code==="Escape"&&b()}var A;(A=n.closeBtn)==null||A.addEventListener("click",b);var M;(M=n.backdrop)==null||M.addEventListener("click",e=>{e.target===n.backdrop&&b()});function oe(e){return g.find(t=>t._id===e)}let g=[],p="all",f=1,v,P=re();function re(){return window.innerWidth>=1440?9:8}const L=document.querySelector(".our-pets-categories");L.addEventListener("click",ce);async function ne(){try{const e=await J();ie(e)}catch(e){T(e.status)}}function ie(e){let t=e.map(s=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${s._id}" aria-label="${s.name}" type="button">${s.name}</button>
      </li>`).join("");L.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function ce(e){if(e.target.dataset.id!==p&&e.target.closest("button")){let t=L.querySelector(".active");t&&t.classList.remove("active"),p=e.target.dataset.id,e.target.classList.add("active"),w()}}const k=document.querySelector(".our-pets-list");async function w(e=!1){j(),N(),e||(k.innerHTML="",f=1);const t=p==="all"?"":p;try{const s=await Q(t,f,P);v=Math.ceil(s.totalItems/P),le(s.animals),F(),e?g.push(...s.animals):g=s.animals}catch(s){T(s.status)}finally{me()}}k.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const s=t.dataset.id,o=oe(s);o&&ae(o)});function le(e){let t=e.map(s=>{let o=s.categories.map(a=>`<li class="pets-category"><p>${a.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");k.insertAdjacentHTML("beforeend",t)}const E=document.querySelector("#pets-pagination");E.addEventListener("click",de);function F(){return v&&f<v?(ue(),!0):(j(),!1)}async function de(){F()&&(f+=1,w(!0))}function j(){E.classList.add("is-hidden")}function ue(){E.classList.remove("is-hidden")}const R=document.querySelector(".loader");function me(){R.classList.add("is-hidden")}function N(){R.classList.remove("is-hidden")}async function pe(){N(),await ne(),await w()}pe();const _="/js_124_YshTi/assets/sprite-DBtBz0EI.svg";document.addEventListener("DOMContentLoaded",function(){new W(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const s=t.querySelector(".faq-icon use");t.classList.contains("is-active")?s.setAttribute("href",`${_}#icon-close`):s.setAttribute("href",`${_}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const fe="https://paw-hut.b.goit.study/api/feedbacks";async function ye(e=1){const t={limit:6,page:e};try{return(await d.get(fe,{params:t})).data}catch(s){console.log("Feedback error:",s)}}const be=document.querySelector(".textFedbacks");async function he(e=1){try{const s=(await ye(e)).feedbacks.map(({author:o,rate:a,description:r})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${a}"></div>

            <p class="feedback-description">
              ${r}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");be.innerHTML=s,document.querySelectorAll(".raty-stars").forEach(o=>{const a=o.dataset.score;new z(o,{starType:"i",score:a,readOnly:!0,halfShow:!0}).init()}),new C(".stories-swiper",{modules:[I,x],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const l=document.querySelector(".about-swiper"),u=l==null?void 0:l.closest(".about__slider");l&&u&&new C(l,{modules:[I,x,G],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:u.querySelector(".about__nav--prev"),nextEl:u.querySelector(".about__nav--next")},pagination:{el:u.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const m=document.querySelector(".footer__cat-decor");function V(){if(!m)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{m.style.left=`${t}%`,m.classList.add("is-visible"),setTimeout(()=>{m.classList.remove("is-visible"),V()},4e3)},e)}V();const ge=document.querySelector(".nav-burgermenu"),ve=document.querySelector(".mobile-close-icon"),h=document.querySelector(".mobile-modal"),H=document.body;ge.addEventListener("click",()=>{h.classList.add("is-active"),H.style.overflow="hidden"});function S(){h.classList.remove("is-active"),H.style.overflow=""}ve.addEventListener("click",S);document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-active")&&S()});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){const s=this.getAttribute("href"),o=document.querySelector(s);o&&(t.preventDefault(),h.classList.contains("is-active")&&S(),o.scrollIntoView({behavior:"smooth",block:"start"}))})});he();
//# sourceMappingURL=index.js.map
