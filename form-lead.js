/*
  Formulário de lead da Dra. Isabella Medeiros
  Intercepta os CTAs de WhatsApp, coleta nome e telefone, grava na planilha,
  dispara a conversão do Google e o evento da Meta, e manda a pessoa para a conversa.

  Configuração obrigatória: ENDPOINT e TOKEN.
*/
(function () {
  'use strict';

  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbwS_L_ihhWzGOg0IVCepO1XZ21XhT6Tb_JBU2ZugSQ0dyBz197ccqg9tz4wj-8eSBvr/exec';
  var TOKEN = 'isa_NDM_1Rupps-YNKGpBTwkZctlF4IoBp46';
  var WHATSAPP = '5511987217718';
  var CONVERSAO_GOOGLE = 'AW-18369143887/5YMbCMaAwtscEM_Ii7dE';

  var PIXEL_META = '857423647365167';

  if (ENDPOINT.indexOf('COLE_AQUI') === 0) {
    console.warn('[form-lead] ENDPOINT nao configurado. O formulario abre, mas nada e gravado na planilha.');
  }

  /* ---------- pixel da Meta, so onde a pagina ainda nao carrega o dele ---------- */
  if (typeof window.fbq === 'undefined') {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('set', 'autoConfig', false, PIXEL_META);
    fbq('init', PIXEL_META);
    fbq('track', 'PageView');
  }

  /* ---------- origem, congelada na primeira pagina da sessao ---------- */
  function origem() {
    var p = new URLSearchParams(location.search);
    var dados = {
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_content: p.get('utm_content') || '',
      utm_term: p.get('utm_term') || '',
      clickId: p.get('gclid') ? 'gclid:' + p.get('gclid')
             : (p.get('fbclid') ? 'fbclid:' + p.get('fbclid') : ''),
      referrer: document.referrer || ''
    };
    try {
      var guardada = sessionStorage.getItem('isa_origem');
      if (!guardada) { sessionStorage.setItem('isa_origem', JSON.stringify(dados)); return dados; }
      return JSON.parse(guardada);
    } catch (e) { return dados; }
  }

  /* ---------- sigla curta da origem, para a mensagem do WhatsApp ---------- */
  function sigla(o) {
    var s = (o.utm_source || '').toLowerCase();
    if (o.clickId.indexOf('gclid') === 0 || s.indexOf('google') === 0) return 'GG';
    if (o.clickId.indexOf('fbclid') === 0 || s.indexOf('instagram') === 0 || s.indexOf('facebook') === 0 || s === 'ig' || s === 'meta') return 'IG';
    if (s) return s.slice(0, 2).toUpperCase();
    if ((o.referrer || '').indexOf('google.') > -1) return 'OR';
    return 'ST';
  }

  /* ---------- telefone em formato internacional, para conversoes otimizadas ---------- */
  function e164(bruto) {
    var d = (bruto || '').replace(/\D/g, '');
    if (!d) return '';
    if (d.length === 10 || d.length === 11) return '+55' + d;
    if (d.length === 12 || d.length === 13) return '+' + d;
    return '+55' + d;
  }

  function telefoneValido(bruto) {
    var d = (bruto || '').replace(/\D/g, '');
    return d.length >= 10 && d.length <= 13;
  }

  /* ---------- estilos, injetados para nao mexer no style.css ---------- */
  var css = ''
    + '.isa-ov{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(5,4,3,.82);backdrop-filter:blur(3px)}'
    + '.isa-ov.on{display:flex}'
    + '.isa-bx{width:100%;max-width:420px;background:#121010;border:1px solid rgba(201,169,110,.35);border-radius:14px;padding:26px 22px;color:#f3efe9;box-shadow:0 20px 60px rgba(0,0,0,.6);position:relative}'
    + '.isa-bx h3{font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:26px;line-height:1.2;margin:0 0 6px}'
    + '.isa-bx h3 em{color:#c9a96e;font-style:italic}'
    + '.isa-bx p.isa-sub{font-family:"Outfit",system-ui,sans-serif;font-size:14px;line-height:1.5;color:#b9b0a4;margin:0 0 18px}'
    + '.isa-bx label{display:block;font-family:"Outfit",system-ui,sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#c9a96e;margin:0 0 6px}'
    + '.isa-bx input{width:100%;box-sizing:border-box;background:#0a0908;border:1px solid rgba(201,169,110,.3);border-radius:8px;padding:13px 14px;color:#f3efe9;font-family:"Outfit",system-ui,sans-serif;font-size:16px;margin:0 0 14px}'
    + '.isa-bx input:focus{outline:none;border-color:#c9a96e}'
    + '.isa-bx button.isa-go{width:100%;cursor:pointer;background:#c9a96e;color:#0a0908;border:0;border-radius:999px;padding:15px 18px;font-family:"Outfit",system-ui,sans-serif;font-size:16px;font-weight:600}'
    + '.isa-bx button.isa-go[disabled]{opacity:.6;cursor:default}'
    + '.isa-bx .isa-lgpd{font-family:"Outfit",system-ui,sans-serif;font-size:11px;line-height:1.5;color:#8d857a;margin:12px 0 0;text-align:center}'
    + '.isa-bx .isa-erro{font-family:"Outfit",system-ui,sans-serif;font-size:13px;color:#e08a7a;margin:0 0 10px;display:none}'
    + '.isa-bx .isa-erro.on{display:block}'
    + '.isa-x{position:absolute;top:10px;right:14px;background:none;border:0;color:#8d857a;font-size:24px;line-height:1;cursor:pointer}';

  var estilo = document.createElement('style');
  estilo.textContent = css;
  document.head.appendChild(estilo);

  /* ---------- modal ---------- */
  var ov = document.createElement('div');
  ov.className = 'isa-ov';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = ''
    + '<div class="isa-bx">'
    + '<button class="isa-x" type="button" aria-label="Fechar">&times;</button>'
    + '<h3>Vamos ver se o seu caso <em>se encaixa</em></h3>'
    + '<p class="isa-sub">Deixe seu nome e WhatsApp. A conversa abre em seguida, com tudo preenchido.</p>'
    + '<p class="isa-erro" id="isa-erro"></p>'
    + '<form id="isa-form" novalidate>'
    + '<label for="isa-nome">Seu nome</label>'
    + '<input id="isa-nome" name="nome" type="text" autocomplete="given-name" placeholder="Como prefere ser chamada" required>'
    + '<label for="isa-tel">Seu WhatsApp</label>'
    + '<input id="isa-tel" name="telefone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="(11) 90000-0000" required>'
    + '<button class="isa-go" type="submit">Abrir conversa no WhatsApp</button>'
    + '</form>'
    + '<p class="isa-lgpd">Ao enviar, voce concorda em receber o contato da equipe da Dra. Isabella Medeiros pelo WhatsApp.</p>'
    + '</div>';
  document.body.appendChild(ov);

  var form = ov.querySelector('#isa-form');
  var campoNome = ov.querySelector('#isa-nome');
  var campoTel = ov.querySelector('#isa-tel');
  var erro = ov.querySelector('#isa-erro');
  var botao = ov.querySelector('.isa-go');
  var secaoAtual = '';

  function abrir(secao) {
    secaoAtual = secao || '';
    ov.classList.add('on');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { campoNome.focus(); }, 60);
  }
  function fechar() {
    ov.classList.remove('on');
    document.body.style.overflow = '';
    erro.classList.remove('on');
  }
  ov.querySelector('.isa-x').addEventListener('click', fechar);
  ov.addEventListener('click', function (e) { if (e.target === ov) fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  /* ---------- envio ---------- */
  function gravar(dados) {
    if (ENDPOINT.indexOf('COLE_AQUI') === 0) return;
    var corpo = JSON.stringify(dados);
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([corpo], { type: 'text/plain;charset=UTF-8' }));
        return;
      }
    } catch (e) { /* cai no fetch abaixo */ }
    try {
      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: corpo, keepalive: true });
    } catch (e) {
      console.warn('[form-lead] falha ao enviar para a planilha', e);
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = campoNome.value.trim();
    var tel = campoTel.value.trim();

    if (nome.length < 2) { erro.textContent = 'Escreva seu nome para continuar.'; erro.classList.add('on'); campoNome.focus(); return; }
    if (!telefoneValido(tel)) { erro.textContent = 'Confira o numero do WhatsApp com DDD.'; erro.classList.add('on'); campoTel.focus(); return; }
    erro.classList.remove('on');
    botao.disabled = true;
    botao.textContent = 'Abrindo...';

    var o = origem();
    var tag = sigla(o);
    var fone = e164(tel);
    var texto = 'Ola, Dra. Isabella! Meu nome e ' + nome + '. Vim pelo site e quero saber sobre lentes em resina. [' + tag + ']';
    var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto);

    gravar({
      token: TOKEN,
      nome: nome,
      telefone: fone,
      secao: secaoAtual,
      pagina: location.pathname,
      url: location.href,
      referrer: o.referrer,
      utm_source: o.utm_source,
      utm_medium: o.utm_medium,
      utm_campaign: o.utm_campaign,
      utm_content: o.utm_content,
      utm_term: o.utm_term,
      click_id: o.clickId,
      dispositivo: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'celular' : 'computador'
    });

    try {
      if (typeof gtag === 'function') {
        gtag('set', 'user_data', { phone_number: fone });
        gtag('event', 'conversion', { send_to: CONVERSAO_GOOGLE, value: 1.0, currency: 'BRL' });
      }
    } catch (err) { console.warn('[form-lead] gtag', err); }

    try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (err) { console.warn('[form-lead] fbq', err); }

    /* a navegacao acontece sempre, com ou sem tag, depois de um respiro curto */
    setTimeout(function () { window.location.href = url; }, 250);
  });

  /* ---------- liga os CTAs existentes ---------- */
  function ligar() {
    var ctas = document.querySelectorAll('a.cta.zap, a[href*="wa.me/' + WHATSAPP + '"]');
    Array.prototype.forEach.call(ctas, function (a) {
      if (a.getAttribute('data-isa-ligado') === '1') return;
      a.setAttribute('data-isa-ligado', '1');
      a.removeAttribute('onclick');
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        var sec = a.closest('section');
        var nome = sec ? (sec.id || sec.className) : '';
        if (!nome && location.pathname.indexOf('/blog') === 0) nome = 'blog';
        abrir(nome);
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ligar);
  else ligar();
})();
