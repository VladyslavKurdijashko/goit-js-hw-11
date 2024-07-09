import{a as c,i,S as l}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",u="44820639-952f0c833853b1e1c1ece8d2c",m=async s=>{try{return(await c.get(d,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}},f=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(o=>`
    <a href="${o.largeImageURL}" class="gallery-item">
      <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${o.likes}</p>
        <p class="info-item"><b>Views:</b> ${o.views}</p>
        <p class="info-item"><b>Comments:</b> ${o.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",n),new l(".gallery a").refresh()},p=()=>{document.querySelector(".loader").classList.remove("hidden")},y=()=>{document.querySelector(".loader").classList.add("hidden")},h=document.querySelector(".search-form"),g=document.querySelector(".search-input");h.addEventListener("submit",async s=>{s.preventDefault();const r=g.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query!"});return}p();try{const n=await m(r);f(n)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{y()}});
//# sourceMappingURL=commonHelpers.js.map
