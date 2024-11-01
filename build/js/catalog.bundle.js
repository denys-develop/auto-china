!function(){"use strict";document.querySelectorAll(".auto-card").forEach((function(e){e.addEventListener("click",(t=>{const a=e.querySelector(".btn-favorite");if(t.target.classList.contains("icon-favorite-btn")){const t=e.querySelector(".fav-btn-modal");a.classList.toggle("btn-favorite--selected"),e.querySelector(".btn-favorite--selected")&&(t.style.display="block",setTimeout((function(){t.style.display="none"}),1200))}}))})),function(){const e=document.querySelector(".catalog__items-icon-tile"),t=document.querySelector(".catalog__items-icon-row"),a=document.querySelector(".catalog__items-icon-tile-svg"),l=document.querySelector(".catalog__items-icon-row-svg"),o=document.querySelector(".catalog__item"),n=document.querySelector(".catalog__item-2");e.addEventListener("click",(()=>{o.classList.remove("hide"),n.classList.add("hide"),l.classList.remove("scale"),a.classList.add("scale")})),t.addEventListener("click",(()=>{o.classList.add("hide"),n.classList.remove("hide"),a.classList.remove("scale"),l.classList.add("scale")}))}(),document.querySelectorAll(".volume-range-control").forEach((e=>{const t={minSlider:e.querySelector(".min-volume"),maxSlider:e.querySelector(".max-volume"),minValueInput:e.querySelector(".min-value"),maxValueInput:e.querySelector(".max-value"),sliderTrack:e.querySelector(".slider-track")},{minSlider:a,maxSlider:l,minValueInput:o,maxValueInput:n,sliderTrack:s}=t,r=parseFloat(e.dataset.min),c=parseFloat(e.dataset.max);function i(e){const t=parseFloat(a.value),s=parseFloat(l.value);"min"===e&&t>=s&&(a.value=s-.1),"max"===e&&s<=t&&(l.value=t+.1),o.value=a.value,n.value=l.value,d()}function u(e){let t=parseFloat(o.value),s=parseFloat(n.value);"min"===e?(t=Math.max(r,Math.min(t,l.value-.1)),a.value=t,o.value=t):"max"===e&&(s=Math.min(c,Math.max(s,a.value+.1)),l.value=s,n.value=s),d()}function d(){const e=parseFloat(a.value),t=parseFloat(l.value),o=(e-r)/(c-r)*100,n=(t-r)/(c-r)*100;s.style.setProperty("--min-value",o/100),s.style.setProperty("--max-value",n/100),s.classList.add("active")}[a,l,o,n].forEach((e=>{e.min=r,e.max=c})),a.value=o.value,l.value=n.value,a.addEventListener("input",(()=>i("min"))),l.addEventListener("input",(()=>i("max"))),o.addEventListener("input",(()=>u("min"))),n.addEventListener("input",(()=>u("max"))),d()})),function(){function e(e){e.value=t(e.dataset.rawValue||e.value)}function t(e){return parseFloat(e).toLocaleString("ru-RU")}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".new-slider").forEach((a=>{const l=a.querySelector(".new-min-volume"),o=a.querySelector(".new-max-volume"),n=a.querySelector(".new-min-value"),s=a.querySelector(".new-max-value"),r=parseFloat(a.dataset.min),c=parseFloat(a.dataset.max);l.value=r,o.value=c,n.dataset.rawValue=r,s.dataset.rawValue=c,e(n),e(s),l.addEventListener("input",(()=>{let t=parseFloat(l.value);t>=parseFloat(o.value)&&(t=parseFloat(o.value)-parseFloat(l.step)),n.dataset.rawValue=t,e(n),e(s)})),o.addEventListener("input",(()=>{let t=parseFloat(o.value);t<=parseFloat(l.value)&&(t=parseFloat(l.value)+parseFloat(o.step)),s.dataset.rawValue=t,e(s),e(n)})),[n,s].forEach((a=>{a.addEventListener("input",(()=>{a.dataset.rawValue=a.value.replace(/\s/g,""),e(a)})),a.addEventListener("blur",(()=>{a.value=t(a.dataset.rawValue)}))}))}))}))}(),function e(){document.querySelectorAll(".filter").forEach((function(e){const t=e.querySelector(".filter__link"),a=e.querySelector(".filter__link-hide"),l=e.querySelector(".filter__items-hidden");t&&a&&l&&(t.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",a.style.display="block",l.style.display="block"})),a.addEventListener("click",(e=>{e.preventDefault(),a.style.display="none",t.style.display="block",l.style.display="none"})))})),document.addEventListener("DOMContentLoaded",(()=>{e()}))}(),function(){const e=document.querySelector(".mobile-nav-btn2"),t=document.querySelector(".mobile-nav2"),a=document.querySelector(".nav-icon2");e.onclick=function(){t.classList.toggle("mobile-nav--open"),a.classList.toggle("nav-icon--active")}}(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".filters"),t=document.querySelector(".header2"),a=document.querySelector(".catalog__items-filters-right"),l=document.querySelector(".filters-mobile-btnClose");a.addEventListener("click",(()=>{e.style.display="block",t.style.display="none"})),l.addEventListener("click",(()=>{e.style.display="none",t.style.display="block"}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=Object.fromEntries(Object.entries({filters:".catalog__items-filters-modal",catalogModal:".catalog-modal",openFiltersButton:".catalog__items-filters-left",closeFiltersButton:".catalog-modal-btnClose",body:"body",headerOverlay:".header-overlay"}).map((([e,t])=>[e,document.querySelector(t)]))),{filters:t,catalogModal:a,openFiltersButton:l,closeFiltersButton:o,body:n,headerOverlay:s}=e;if(l&&t&&a&&o&&s){const e=e=>{t.style.display=e,a.style.display=e,s.style.display=e,n.classList.toggle("no-scroll","block"===e)};l.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout((()=>e("block")),300)})),o.addEventListener("click",(()=>e("none"))),a.addEventListener("click",(t=>{t.target===a&&e("none")}))}else console.error("elements missing")}))}();