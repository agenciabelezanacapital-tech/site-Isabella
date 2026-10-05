const ORIGIN = 'https://www.isabellalentesderesina.com.br';
const WA = 'https://wa.me/5511987217718?text=Ol%C3%A1%2C%20Dra.%20Isabella!%20Li%20o%20blog%20sobre%20lentes%20em%20resina%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

// Fontes externas citaveis. A chave e usada no texto como [chave].
const sources = {
  ada: ['American Dental Association: facetas dentarias', 'https://www.mouthhealthy.org/all-topics-a-z/veneers'],
  cleveland: ['Cleveland Clinic: facetas, indicacao e cuidados', 'https://my.clevelandclinic.org/health/treatments/23522-dental-veneers'],
  health: ['Healthdirect: tipos de facetas e planejamento', 'https://www.healthdirect.gov.au/veneers'],
  whitening: ['American Dental Association: clareamento dental', 'https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening'],
  bruxism: ['NHS: bruxismo', 'https://www.nhs.uk/symptoms/teeth-grinding/'],
  sensitivity: ['American Dental Association: sensibilidade dentaria', 'https://www.mouthhealthy.org/all-topics-a-z/sensitive-teeth'],
  gum: ['Cleveland Clinic: doenca periodontal', 'https://my.clevelandclinic.org/health/diseases/10950-gum-periodontal-disease'],
  hygiene: ['American Dental Association: higiene bucal diaria', 'https://www.mouthhealthy.org/all-topics-a-z/brushing-your-teeth'],
  cfo: ['Conselho Federal de Odontologia: codigo de etica odontologica', 'https://website.cfo.org.br/legislacao/codigo-de-etica-odontologica/']
};

// Os artigos vivem em content/posts.json. Cada um tem uma data de publicacao;
// o artigo so aparece no site depois que essa data chega.
const posts = require('../content/posts.json');

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pathFor = p => '/blog/' + p.slug;
const byDateDesc = (a,b) => new Date(b.date) - new Date(a.date);
const published = (now = Date.now()) => posts.filter(p => new Date(p.date).getTime() <= now).sort(byDateDesc);
const dateLabel = d => new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'long',year:'numeric'}).format(new Date(d));
const rich = text => esc(text).replace(/\[([a-z]+)\]/g, (whole,key) => sources[key]
  ? `<a class="source" href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]}</a>`
  : whole);
const meta = p => `<span class="category">${esc(p.category)}</span><time datetime="${p.date}">${dateLabel(p.date)}</time>`;

function layout(title, description, path, body, schema, noindex=false) {
  const graph = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Dra. Isabella Medeiros</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${noindex?'noindex,follow':'index,follow,max-image-preview:large,max-snippet:-1'}"><link rel="canonical" href="${ORIGIN}${path}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${ORIGIN}${path}"><meta property="og:type" content="${graph[0]&&graph[0]['@type']==='BlogPosting'?'article':'website'}"><meta name="theme-color" content="#090806"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/blog.css">${graph.length?`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>`:''}<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18369143887"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-18369143887');</script></head><body><a class="skip" href="#conteudo">Pular para o conteudo</a><header><div class="wrap nav"><a class="brand" href="/">Dra. Isabella Medeiros<span>CRO-SP 148618 &middot; S&atilde;o Paulo</span></a><nav aria-label="Navegacao principal"><a href="/blog">Blog</a><a href="/#investimento">Investimento</a></nav></div></header><main id="conteudo">${body}</main><footer class="wrap footer"><p class="signature">Dra. Isabella Medeiros</p><p>Cirurgi&atilde;-dentista &middot; CRO-SP 148618 &middot; S&atilde;o Paulo</p><p>Conte&uacute;do educativo produzido pela equipe editorial BNC. N&atilde;o substitui uma avalia&ccedil;&atilde;o odontol&oacute;gica individual.</p><a href="/">Conhecer o atendimento</a> &middot; <a href="/blog">Todos os artigos</a></footer></body></html>`;
}

const cta = `<aside class="next-step"><span class="category">Lentes em resina &middot; S&atilde;o Paulo</span><h2>Conhe&ccedil;a o trabalho.<br><em>Entenda o investimento.</em></h2><p><strong>10x de R$497 no cart&atilde;o.</strong><br>Condi&ccedil;&atilde;o apresentada na p&aacute;gina de atendimento. O valor final depende da avalia&ccedil;&atilde;o cl&iacute;nica. Confirme os dentes inclu&iacute;dos na sua proposta.</p><a class="button" href="/#investimento">Ver investimento e atendimento</a> <a class="button" href="${WA}" target="_blank" rel="noopener">Falar no WhatsApp</a></aside>`;

const faqBlock = p => (p.faq && p.faq.length)
  ? `<section class="article-faq"><h2>Perguntas frequentes</h2>${p.faq.map(f=>`<details class="faq-q"><summary>${esc(f[0])}</summary><p>${rich(f[1])}</p></details>`).join('')}</section>`
  : '';

const faqSchema = p => (p.faq && p.faq.length)
  ? {'@type':'FAQPage','@id':ORIGIN+pathFor(p)+'#faq',mainEntity:p.faq.map(f=>({'@type':'Question',name:f[0],acceptedAnswer:{'@type':'Answer',text:f[1].replace(/\[[a-z]+\]/g,'').trim()}}))}
  : null;

function indexPage(now) {
  const live = published(now);
  const cards = live.map(p=>`<article class="editorial-card"><a class="card-link" href="${pathFor(p)}"><span class="category">${esc(p.category)}</span><h2>${esc(p.title)}</h2><p class="card-subtitle">${esc(p.excerpt)}</p><div class="card-image"><img src="${p.image}" alt="${esc(p.imageAlt)}" loading="lazy" width="900" height="600"></div><div class="card-bottom"><span>Ler artigo</span><span aria-hidden="true">&#8599;</span></div></a></article>`).join('');
  const body = `<div class="wrap"><section class="blog-intro"><p class="category">Blog &middot; Dra. Isabella Medeiros</p><h1>Lentes em resina.<br><em>Informa&ccedil;&atilde;o para decidir.</em></h1><p>Investimento, resultados naturais e cuidados: encontre respostas para planejar seu sorriso com clareza. Conte&uacute;do novo todo dia.</p></section><section class="editorial-grid" aria-label="Artigos sobre lentes em resina">${cards}</section>${cta}</div>`;
  return layout('Blog sobre lentes de resina', 'Preco, parcelamento, durabilidade, naturalidade e cuidados com lentes em resina em Sao Paulo. Artigos novos todo dia.', '/blog', body, {'@type':'Blog','@id':ORIGIN+'/blog',name:'Blog sobre lentes de resina',url:ORIGIN+'/blog',inLanguage:'pt-BR',blogPost:live.slice(0,30).map(p=>({'@type':'BlogPosting',headline:p.title,url:ORIGIN+pathFor(p),datePublished:p.date}))});
}

function articlePage(p, now) {
  const count = [p.intro, ...p.sections.flat()].join(' ').split(/\s+/).length;
  const related = published(now).filter(x=>x.slug!==p.slug).slice(0,3);
  const body = `<article class="wrap article"><a class="back" href="/blog">&larr; Voltar ao blog</a><div class="meta">${meta(p)}<span>${Math.max(2,Math.ceil(count/180))} min de leitura</span></div><h1>${esc(p.title)}</h1><p class="standfirst">${esc(p.excerpt)}</p><figure class="article-cover"><img src="${p.image}" alt="${esc(p.imageAlt)}" width="1200" height="800" fetchpriority="high"><figcaption>Imagem do portf&oacute;lio da Dra. Isabella para ilustrar o tema. A indica&ccedil;&atilde;o e os resultados variam conforme o caso.</figcaption></figure><p class="byline">Por Equipe editorial BNC &middot; Hor&aacute;rio de S&atilde;o Paulo</p><div class="article-body"><p>${rich(p.intro)}</p>${p.sections.map(s=>`<section><h2>${esc(s[0])}</h2>${s.slice(1).map(t=>`<p>${rich(t)}</p>`).join('')}</section>`).join('')}${faqBlock(p)}${cta}</div>${related.length?`<section class="related"><h2>Continue a leitura</h2>${related.map(x=>`<a href="${pathFor(x)}">${esc(x.title)} <span aria-hidden="true">&#8599;</span></a>`).join('')}</section>`:''}</article>`;
  const article = {'@type':'BlogPosting','@id':ORIGIN+pathFor(p)+'#artigo',headline:p.title,description:p.excerpt,datePublished:p.date,dateModified:p.dateModified||p.date,inLanguage:'pt-BR',image:ORIGIN+p.image,mainEntityOfPage:ORIGIN+pathFor(p),isPartOf:{'@id':ORIGIN+'/blog'},author:{'@type':'Organization',name:'Equipe editorial BNC'},publisher:{'@type':'Organization',name:'Dra. Isabella Medeiros',url:ORIGIN},about:{'@type':'MedicalProcedure',name:'Facetas em resina composta'}};
  const graph = [article];
  const fq = faqSchema(p);
  if (fq) graph.push(fq);
  return layout(p.seoTitle||p.title, p.seoDescription||p.excerpt, pathFor(p), body, graph);
}

function handle(req, res, now = Date.now()) {
  res.setHeader('Cache-Control','public, max-age=0, s-maxage=600, stale-while-revalidate=86400');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(!['GET','HEAD'].includes(req.method||'GET')){res.setHeader('Allow','GET, HEAD');res.statusCode=405;return res.end();}
  const url = new URL(req.url, ORIGIN);
  let slug = typeof req.query?.slug==='string' ? req.query.slug : url.searchParams.get('slug');
  if(slug===null||slug===undefined) slug = url.pathname.replace(/^\/blog\/?/,'').replace(/\/$/,'');
  if(url.pathname==='/api/blog'&&!slug) slug='';
  if(slug==='sitemap.xml'){
    res.setHeader('Content-Type','application/xml; charset=utf-8');
    res.statusCode=200;
    return res.end(req.method==='HEAD'?'':`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${ORIGIN}/blog</loc><changefreq>daily</changefreq><priority>0.9</priority></url>${published(now).map(p=>`<url><loc>${ORIGIN}${pathFor(p)}</loc><lastmod>${p.dateModified||p.date}</lastmod><priority>0.7</priority></url>`).join('')}</urlset>`);
  }
  res.setHeader('Content-Type','text/html; charset=utf-8');
  if(!slug){res.statusCode=200;return res.end(req.method==='HEAD'?'':indexPage(now));}
  const p = published(now).find(x=>x.slug===slug);
  res.statusCode = p?200:404;
  if(!p) res.setHeader('X-Robots-Tag','noindex');
  return res.end(req.method==='HEAD'?'':p?articlePage(p,now):layout('Artigo nao disponivel','Volte ao blog para consultar os artigos disponiveis.','/blog',`<div class="wrap article"><h1>Artigo n&atilde;o dispon&iacute;vel</h1><p>Consulte as leituras j&aacute; publicadas no blog.</p><a class="button" href="/blog">Voltar ao blog</a></div>`,null,true));
}

module.exports = (req,res)=>handle(req,res);
module.exports.check = {posts, published, indexPage, articlePage, handle, sources, ORIGIN};
