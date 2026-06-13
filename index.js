import{a as i,S as c,i as f}from"./assets/vendor-BezXTN6Z.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){return i.get("https://pixabay.com/api/",{params:{key:"56280987-1afa6b4fe9ec70137831f4fea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const n={formEl:document.querySelector(".js-form"),submitBtn:document.querySelector(".js-submit-btn"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},p=new c(".js-gallery a"),d=o=>{const a=o.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
    <img
    class="gallery-image"
      src="${s.webformatURL}"
      alt="${s.tags}"
    /></a>
    <div class="info-img">
    <p class="info">
    <span class="info-label">Likes</span>
    <span class="info-value">${s.likes}</span>
    </p>
    <p class="info">
    <span class="info-label">Views</span> 
    <span class="info-value">${s.views}</span>
    </p>
    <p class="info">
    <span class="info-label">Comments</span> 
    <span class="info-value">${s.comments}</span>
    </p>
    <p class="info">
    <span class="info-label">Downloads</span> 
    <span class="info-value">${s.downloads}</span>
    </p>
    </div>
    </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",a),p.refresh()},m=()=>{n.gallery.innerHTML=""},y=()=>{n.loader.classList.add("is-visible")},g=()=>{n.loader.classList.remove("is-visible")};n.formEl.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(n.formEl).get("search-text");s.trim()&&(y(),setTimeout(()=>{u(s).then(t=>{if(!t.hits.length){f.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}return t.hits}).then(t=>{t.length&&(m(),d(t))}).catch(t=>console.log(t)).finally(()=>g())},0),o.target.reset())});
//# sourceMappingURL=index.js.map
