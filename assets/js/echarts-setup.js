let echartsTheme=determineComputedTheme();document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&document.querySelectorAll("pre>code.language-echarts").forEach((e=>{const t=e.textContent,a=e.parentElement;a.classList.add("unloaded");let r=document.createElement("div");if(r.classList.add("echarts"),a.after(r),"dark"===echartsTheme)var n=echarts.init(r,"dark-fresh-cut");else n=echarts.init(r);n.setOption(JSON.parse(t)),window.addEventListener("resize",(function(){n.resize()}))}))}));