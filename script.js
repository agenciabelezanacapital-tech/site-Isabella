const WHATSAPP='5511987217718';
const MESSAGE='Olá, Dra. Isabella! Vi a página sobre lentes em resina com resultado natural e gostaria de agendar uma avaliação.';
document.querySelectorAll('.zap').forEach(a=>{a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;a.target='_blank';a.rel='noopener';});
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.rev').forEach(el=>observer.observe(el));

const track=document.getElementById('depoimentos-track');
if(track){
  const viewport=track.parentElement;
  const items=Array.from(track.children);
  const dotsWrap=document.getElementById('depoimentos-dots');
  const prevBtn=document.querySelector('.carousel-btn[data-dir="-1"]');
  const nextBtn=document.querySelector('.carousel-btn[data-dir="1"]');
  let index=0;

  const dots=items.map((_,i)=>{
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='carousel-dot'+(i===0?' active':'');
    dot.setAttribute('aria-label','Ir para depoimento '+(i+1));
    dot.addEventListener('click',()=>goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(i){
    index=Math.max(0,Math.min(items.length-1,i));
    track.style.transform=`translateX(-${index*100}%)`;
    dots.forEach((d,di)=>d.classList.toggle('active',di===index));
    prevBtn.disabled=index===0;
    nextBtn.disabled=index===items.length-1;
  }

  prevBtn.addEventListener('click',()=>goTo(index-1));
  nextBtn.addEventListener('click',()=>goTo(index+1));

  let startX=0,deltaX=0,dragging=false;
  track.addEventListener('pointerdown',e=>{
    dragging=true;startX=e.clientX;deltaX=0;
    track.classList.add('dragging');
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove',e=>{
    if(!dragging)return;
    deltaX=e.clientX-startX;
    const pct=(deltaX/viewport.offsetWidth)*100;
    track.style.transform=`translateX(calc(-${index*100}% + ${pct}%))`;
  });
  const endDrag=()=>{
    if(!dragging)return;
    dragging=false;
    track.classList.remove('dragging');
    const threshold=viewport.offsetWidth*.18;
    if(deltaX<-threshold)goTo(index+1);
    else if(deltaX>threshold)goTo(index-1);
    else goTo(index);
  };
  track.addEventListener('pointerup',endDrag);
  track.addEventListener('pointercancel',endDrag);

  goTo(0);
}
