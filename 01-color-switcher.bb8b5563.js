const t={body:document.querySelector("body"),btnStart:document.querySelector(".js-start"),btnStop:document.querySelector(".js-stop")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.btnStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.bb8b5563.js.map
