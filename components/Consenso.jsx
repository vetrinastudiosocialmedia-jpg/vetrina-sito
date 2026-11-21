import { META_PIXEL_ID, FINE_BLACK_FRIDAY } from "@/lib/site";

// Banner dei cookie + Meta Pixel, su tutte le pagine (inserito in app/layout.jsx).
//
// Come funziona (regole del Garante privacy):
//  - il pixel di Meta NON parte finché il visitatore non clicca "Accetta";
//  - "Rifiuta" ha lo stesso peso di "Accetta"; la scelta vale 6 mesi, poi il banner ricompare;
//  - il link "Preferenze cookie" (footer e Cookie policy) riapre il banner per cambiare idea.
//
// Eventi inviati a Meta (solo con consenso):
//  PageView su ogni pagina · Contact al clic su WhatsApp · InitiateCheckout al clic su un pacchetto
//  · Purchase sulla pagina di benvenuto dopo il pagamento (una volta per visita).
//
// È uno script piccolo scritto a mano (niente librerie) e resta nella pagina anche dopo
// l'ottimizzazione (data-vs-keep). Il banner viene creato dallo script, quindi senza
// JavaScript non compare e il pixel non parte.

const PREZZI = { essenziale: 49, crescita: 89, pro: 99 };

function codice(id) {
  return `(function(){
var ID=${JSON.stringify(id)},K="vs-consenso",SEI_MESI=15552000000,d=document,w=window,caricato=false;
var PREZZI=${JSON.stringify(PREZZI)},SCONTO=Date.now()<${FINE_BLACK_FRIDAY}?0.8:1;
function leggi(){try{var v=localStorage.getItem(K);if(!v)return null;var p=v.split("|");if(Date.now()-(+p[1]||0)>SEI_MESI)return null;return p[0]}catch(e){return null}}
function salva(v){try{localStorage.setItem(K,v+"|"+Date.now())}catch(e){}}
function ev(n,p){if(caricato&&w.fbq)w.fbq("track",n,p||{})}
function valore(piano){return Math.round((PREZZI[piano]||0)*SCONTO*100)/100}
function acquisto(){try{var q=new URLSearchParams(location.search);if(location.pathname.indexOf("/benvenuto")!==0||q.get("pagato")!=="1")return;if(sessionStorage.getItem("vs-px-acq"))return;sessionStorage.setItem("vs-px-acq","1");var pi=q.get("piano")||"";ev("Purchase",{value:valore(pi),currency:"EUR",content_name:pi})}catch(e){}}
function pixel(){if(caricato)return;caricato=true;
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(w,d,"script","https://connect.facebook.net/en_US/fbevents.js");
w.fbq("consent","grant");w.fbq("init",ID);w.fbq("track","PageView");acquisto()}
function revoca(){if(w.fbq)w.fbq("consent","revoke");caricato=false;var h=location.hostname.replace(/^www\\./,"");["_fbp","_fbc"].forEach(function(c){d.cookie=c+"=; Max-Age=0; path=/";d.cookie=c+"=; Max-Age=0; path=/; domain=."+h})}
function banner(){var b=d.getElementById("vs-cookie");if(b){b.hidden=false;return}
b=d.createElement("div");b.id="vs-cookie";b.setAttribute("role","region");b.setAttribute("aria-label","Preferenze cookie");
b.innerHTML='<p>Usiamo il pixel di Meta, <strong>solo se accetti</strong>, per misurare i risultati delle nostre pubblicità su Facebook e Instagram e mostrarle a chi ha già visitato il sito. Il sito funziona uguale anche se rifiuti. <a href="/cookie/">Cookie policy</a></p><div class="vs-cookie-btn"><button type="button" data-v="no">Rifiuta</button><button type="button" data-v="si">Accetta</button></div>';
b.addEventListener("click",function(e){var v=e.target&&e.target.getAttribute&&e.target.getAttribute("data-v");if(!v)return;salva(v);b.hidden=true;if(v==="si")pixel();else revoca()});
d.body.appendChild(b)}
d.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest("a");if(!a)return;
if(a.hasAttribute("data-vs-cookie")){e.preventDefault();banner();return}
var h=a.href||"";
if(h.indexOf("buy.stripe.com")>-1){var pi=a.getAttribute("data-umami-event-piano")||"";ev("InitiateCheckout",{content_name:pi,value:valore(pi),currency:"EUR"})}
else if(h.indexOf("wa.me/")>-1){ev("Contact")}});
var s=leggi();if(s==="si")pixel();else if(!s)banner();
})();`;
}

export default function Consenso() {
  if (!META_PIXEL_ID) return null;
  return <script data-vs-keep="" dangerouslySetInnerHTML={{ __html: codice(META_PIXEL_ID) }} />;
}
