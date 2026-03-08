import{a as d,i as J,S as E,A as U,R as W,b as C,N as I,P as M,c as z}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const S="/Group_Project_JS/assets/hero@1x-DW7JCWY_.webp",K="/Group_Project_JS/assets/hero@2x-BAmaVxfK.webp";function Y(){const e=document.createElement("link");e.rel="preload",e.as="image",e.href=S,e.setAttribute("imagesrcset",`${S} 1x, ${K} 2x`),e.fetchPriority="high",document.head.appendChild(e)}Y();d.defaults.baseURL="https://paw-hut.b.goit.study/api";async function Q(){return(await d.get("/categories")).data}async function X(e,t,s){let o=e?{page:t,limit:s,categoryId:e}:{page:t,limit:s};return(await d.get("/animals",{params:o})).data}function x(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}J.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function Z(e){return(await d.post("https://paw-hut.b.goit.study/api/orders",e)).data}const q=document.querySelector(".modalCloseButton");function ee(e){const t=document.getElementById("form-backdrop");if(!t)return;const s=t.querySelector("form");s&&(s.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("body-no-scroll"),s.addEventListener("submit",async o=>{var r,c;if(o.preventDefault(),!s.name.value.trim()||!s.tel.value.trim()){s.reportValidity();return}const a={name:s.name.value.trim(),phone:s.tel.value.trim(),animalId:s.dataset.animalId,comment:s.comment.value.trim()||"Немає коментаря"};try{te(),await Z(a),E.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(G){E.fire({icon:"error",title:"Помилка",text:((c=(r=G.response)==null?void 0:r.data)==null?void 0:c.message)||"Помилка при відправленні заявки"})}finally{se()}},{once:!0}))}function y(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("body-no-scroll")}q&&q.addEventListener("click",y);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&y()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&y()});const B=document.querySelector("#form-backdrop .loader");function te(){B.classList.remove("is-hidden")}function se(){B.classList.add("is-hidden")}const n={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function ae(e){return`
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
  `}function oe(e){if(!n.backdrop||!n.modalContent)return;n.modalContent.innerHTML=ae(e),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=n.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const s=t.dataset.animalId;ee(s),b()}),window.addEventListener("keydown",O)}function b(){n.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",O)}function O(e){e.code==="Escape"&&b()}var _;(_=n.closeBtn)==null||_.addEventListener("click",b);var A;(A=n.backdrop)==null||A.addEventListener("click",e=>{e.target===n.backdrop&&b()});function re(e){return h.find(t=>t._id===e)}let h=[],p="all",f=1,g,$=ne();function ne(){return window.innerWidth>=1440?9:8}const v=document.querySelector(".our-pets-categories");v.addEventListener("click",le);async function ie(){try{const e=await Q();ce(e)}catch(e){x(e.status)}}function ce(e){let t=e.map(s=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${s._id}" aria-label="${s.name}" type="button">${s.name}</button>
      </li>`).join("");v.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function le(e){if(e.target.dataset.id!==p&&e.target.closest("button")){let t=v.querySelector(".active");t&&t.classList.remove("active"),p=e.target.dataset.id,e.target.classList.add("active"),k()}}const L=document.querySelector(".our-pets-list");async function k(e=!1){D(),j(),e||(L.innerHTML="",f=1);const t=p==="all"?"":p;try{const s=await X(t,f,$);g=Math.ceil(s.totalItems/$),de(s.animals),T(),e?h.push(...s.animals):h=s.animals}catch(s){x(s.status)}finally{pe()}}L.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const s=t.dataset.id,o=re(s);o&&oe(o)});function de(e){let t=e.map(s=>{let o=s.categories.map(a=>`<li class="pets-category"><p>${a.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");L.insertAdjacentHTML("beforeend",t)}const w=document.querySelector("#pets-pagination");w.addEventListener("click",ue);function T(){return g&&f<g?(me(),!0):(D(),!1)}async function ue(){T()&&(f+=1,k(!0))}function D(){w.classList.add("is-hidden")}function me(){w.classList.remove("is-hidden")}const F=document.querySelector(".loader");function pe(){F.classList.add("is-hidden")}function j(){F.classList.remove("is-hidden")}async function fe(){j(),await ie(),await k()}fe();const P="/Group_Project_JS/assets/sprite-DBtBz0EI.svg";document.addEventListener("DOMContentLoaded",function(){new U(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const s=t.querySelector(".faq-icon use");t.classList.contains("is-active")?s.setAttribute("href",`${P}#icon-close`):s.setAttribute("href",`${P}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const ye="https://paw-hut.b.goit.study/api/feedbacks";async function be(e=1){const t={limit:6,page:e};try{return(await d.get(ye,{params:t})).data}catch(s){console.log("Feedback error:",s)}}const he=document.querySelector(".textFedbacks");async function ge(e=1){try{const s=(await be(e)).feedbacks.map(({author:o,rate:a,description:r})=>`
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
      `).join("");he.innerHTML=s,document.querySelectorAll(".raty-stars").forEach(o=>{const a=o.dataset.score;new W(o,{starType:"i",score:a,readOnly:!0,halfShow:!0}).init()}),new C(".stories-swiper",{modules:[I,M],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const l=document.querySelector(".about-swiper"),u=l==null?void 0:l.closest(".about__slider");l&&u&&new C(l,{modules:[I,M,z],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:u.querySelector(".about__nav--prev"),nextEl:u.querySelector(".about__nav--next")},pagination:{el:u.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const m=document.querySelector(".footer__cat-decor");function R(){if(!m)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{m.style.left=`${t}%`,m.classList.add("is-visible"),setTimeout(()=>{m.classList.remove("is-visible"),R()},4e3)},e)}R();const N=document.querySelector(".nav-burgermenu"),H=document.querySelector(".mobile-close-icon"),i=document.querySelector(".mobile-modal"),V=document.querySelector("body");N.addEventListener("click",()=>{i.classList.add("is-active"),V.style.overflow="hidden"});H.addEventListener("click",()=>{i.classList.remove("is-active"),V.style.overflow="auto"});N.addEventListener("click",()=>{i.classList.add("is-active")});H.addEventListener("click",()=>{i.classList.remove("is-active")});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-active")&&i.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),i.classList.contains("is-active")&&i.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ge();
//# sourceMappingURL=index.js.map
