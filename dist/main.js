(()=>{"use strict";const e=JSON.parse('{"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {{price}} per year":"Just {{price}} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{{price}} <br>per week":"{{price}} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy","Restore":"Restore","Continue":"Continue"}'),r=JSON.parse('{"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {{price}} per year":"Nur {{price}} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{{price}} <br>per week":"{{price}} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie","Restore":"Wiederherstellen","Continue":"Weiter"}'),t=JSON.parse('{"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {{price}} per year":"Solo {{price}} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad","Restore":"Restaurar","Continue":"Continuar"}'),i=JSON.parse('{"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {{price}} per year":"Seulement {{price}} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{{price}} <br>per week":"{{price}} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité","Restore":"Restaurer","Continue":"Continuer"}'),a=JSON.parse('{"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {{price}} per year":"わずか{{price}}/年","WEEKLY ACCESS":"週ごとのアクセス","{{price}} <br>per week":"{{price}}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー","Restore":"復元する","Continue":"続行する"}'),n=JSON.parse('{"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {{price}} per year":"Apenas {{price}} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade","Restore":"Restaurar","Continue":"Continuar"}');let s=new URLSearchParams(document.location.search).get("lang")||navigator.language.split("-")[0];document.getElementsByTagName("html")[0].setAttribute("lang",s),document.getElementsByTagName("body")[0].classList.add(s);const c={localization:{en:e,de:r,es:t,fr:i,ja:a,pt:n},getLocalization:function(){return this.localization[s]||this.localization.en}},o=document.getElementById("sub-1"),l=document.getElementById("sub-2"),E=document.getElementById("main-button");let b=c.getLocalization(),u=document.querySelectorAll("[data-localization]"),d={"com.bp.wallpaper.year":"$30.99","com.bp.wallpaper.week1":"$0.48","com.bp.wallpaper.week2":"$6.99"};function A(e,r){e.classList.add("active"),r.classList.remove("active")}u.forEach((function(e){let r=b[e.dataset.localization];-1!=r.indexOf("{{price}}")&&(r=r.replace("{{price}}",d[e.dataset.sub])),e.innerHTML=r})),o.addEventListener("pointerdown",(function(){A(o,l)}),!1),l.addEventListener("pointerdown",(function(){A(l,o)}),!1),E.addEventListener("pointerdown",(function(){let e=document.querySelector(".active");window.location.href=e.dataset.link}),!1)})();