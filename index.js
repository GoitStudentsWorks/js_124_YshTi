import{a as l,A as P,R as S,S as $,N as A,P as k}from"./assets/vendor-CIqe7luc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();l.defaults.baseURL="https://paw-hut.b.goit.study/api";async function C(){try{return(await l.get("/categories")).data}catch(e){throw e}}async function E(e,a,t){let r=e?{page:a,limit:t,categoryId:e}:{page:a,limit:t};try{return(await l.get("/animals",{params:r})).data}catch(s){throw s}}let g=[],i="all",c=1,u;function M(){return window.innerWidth>=1440?9:8}const p=document.querySelector(".our-pets-categories");p.addEventListener("click",q);async function O(){try{const e=await C();T(e)}catch(e){console.log("Categories load error:",e)}}function T(e){let a=e.map(t=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${t._id}" type="button">${t.name}</button>
      </li>`).join("");p.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
          Всі
        </button>
      </li>`+a}function q(e){if(e.target.dataset.id!==i&&e.target.closest("button")){let a=p.querySelector(".active");a&&a.classList.remove("active"),i=e.target.dataset.id,e.target.classList.add("active"),f()}}const y=document.querySelector(".our-pets-list");async function f(e=!1){b(),L(),e||(y.innerHTML="",c=1);const a=i==="all"?"":i,t=M();try{const r=await E(a,c,t);u=Math.ceil(r.totalItems/t),I(r.animals),h(),e?g.push(...r.animals):g=r.animals}catch{console.log("error")}finally{R()}}function I(e){let a=e.map(t=>{let r=t.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${t.image}"
          alt="${t.species}"
        />
        <p class="pets-species">${t.species}</p>
        <h3 class="pets-name">${t.name}</h3>
        <ul class="pets-categories">
          ${r}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${t.age}</li>
          <li class="pets-personal-item">${t.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${t.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${t._id}">Дізнатись більше</button>
      </li>`}).join("");y.insertAdjacentHTML("beforeend",a)}const m=document.querySelector("#pets-pagination");m.addEventListener("click",H);function h(){return u&&c<u?(N(),!0):(b(),!1)}async function H(){h()&&(c+=1,f(!0))}function b(){m.classList.add("IsHidden")}function N(){m.classList.remove("IsHidden")}const w=document.querySelector(".loader");function R(){w.classList.add("IsHidden")}function L(){w.classList.remove("IsHidden")}async function _(){L(),await O(),await f()}_();document.addEventListener("DOMContentLoaded",function(){new P(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const j="https://paw-hut.b.goit.study/api/feedbacks";async function B(e=1){const a={limit:6,page:e};try{return(await l.get(j,{params:a})).data}catch(t){console.log("Feedback error:",t)}}const x=document.querySelector(".textFedbacks");async function D(e=1){try{const t=(await B(e)).feedbacks.map(({author:r,rate:s,description:o})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${s}"></div>

            <p class="feedback-description">
              ${o}
            </p>

            <p class="feedback-author">
              ${r}
            </p>

          </div>
        </li>
      `).join("");x.innerHTML=t,document.querySelectorAll(".raty-stars").forEach(r=>{const s=r.dataset.score;new S(r,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new $(".stories-swiper",{modules:[A,k],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(a){console.log(a)}}const n=document.querySelector(".footer__cat-decor");function v(){if(!n)return;const e=Math.floor(Math.random()*8e3)+40,a=Math.floor(Math.random()*81)+5;setTimeout(()=>{n.style.left=`${a}%`,n.classList.add("is-visible"),setTimeout(()=>{n.classList.remove("is-visible"),v()},4e3)},e)}v();D();
//# sourceMappingURL=index.js.map
