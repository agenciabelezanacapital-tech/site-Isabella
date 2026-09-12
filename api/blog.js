const ORIGIN = 'https://site-isabella-nu.vercel.app';
const sources = {
  ada: ['American Dental Association: facetas dentárias', 'https://www.mouthhealthy.org/all-topics-a-z/veneers'],
  cleveland: ['Cleveland Clinic: facetas, indicação e cuidados', 'https://my.clevelandclinic.org/health/treatments/23522-dental-veneers'],
  health: ['Healthdirect: tipos de facetas e planejamento', 'https://www.healthdirect.gov.au/veneers'],
  whitening: ['American Dental Association: clareamento dental', 'https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening'],
  bruxism: ['NHS: bruxismo', 'https://www.nhs.uk/symptoms/teeth-grinding/']
};
// Artigos liberados integralmente em 12/09/2026.
const posts = [
  {
    slug: 'quanto-custam-lentes-de-resina', date: '2026-09-12T17:35:00-03:00', category: 'Investimento',
    title: 'Lentes de resina em São Paulo: 10x de R$500 e o que considerar no orçamento',
    excerpt: 'Conheça a condição de 10x de R$500 no cartão, total de R$5.000, e entenda o que confirmar na avaliação com a Dra. Isabella.',
    intro: 'Perguntar o preço é uma etapa legítima de quem está considerando mudar o sorriso. Para decidir com tranquilidade, porém, você precisa entender a proposta completa. Duas condições de pagamento parecidas podem corresponder a tratamentos diferentes.',
    sections: [
      ['O que precisa estar explicado no orçamento', 'A quantidade de dentes envolvidos influencia o custo das facetas. Esse é um dos motivos para não comparar apenas o valor da parcela. Peça que a proposta identifique os dentes que serão tratados e o material previsto. [health]', 'Na consulta, vale perguntar o que faz parte do atendimento: avaliação, planejamento, execução e retornos. Confirme também se as manutenções futuras são cobradas separadamente. Ter essas informações por escrito ajuda a organizar o investimento sem surpresas.'],
      ['Como interpretar uma condição de parcelamento', 'A página da Dra. Isabella apresenta a condição de 10 parcelas de R$500 no cartão e informa que o valor final depende da avaliação clínica. A soma dessas parcelas é R$5.000. Essa informação, sozinha, não define quantos dentes serão incluídos no seu caso.', 'Antes de contratar, confirme o escopo, o total, as condições de pagamento e eventuais serviços adicionais. Evite presumir que um valor anunciado corresponde às duas arcadas ou a qualquer quantidade de lentes.'],
      ['Preço e resultado esperado precisam conversar', 'Anote o que você gostaria de mudar: cor, formato ou algum detalhe específico que incomoda. Leve essa lista para a avaliação e peça uma explicação sobre as opções. Um bom orçamento deve fazer sentido para o resultado que você procura e para o compromisso que consegue assumir.', 'Na página principal você pode conhecer os casos da Isabella e consultar o investimento antes de entrar em contato. A avaliação é o momento de transformar essas referências em uma proposta individual.']
    ]
  },
  {
    slug: 'lentes-de-resina-resultado-natural', date: '2026-09-12T17:46:26-03:00', category: 'Naturalidade',
    title: 'Lentes de resina naturais: o que observar além da cor branca',
    excerpt: 'Como conversar sobre formato, proporção e referências para buscar um sorriso que combine com você.',
    intro: 'Quando alguém diz que quer um sorriso natural, pode estar falando de coisas diferentes: uma mudança discreta, dentes menos uniformes ou uma cor que não chame tanta atenção. Explicar o que essa palavra significa para você é um bom começo para o planejamento.',
    sections: [
      ['Transforme uma preferência em uma conversa concreta', 'Em vez de pedir apenas “um sorriso bonito”, conte o que deseja preservar e o que gostaria de mudar. Você gosta do formato atual? Prefere uma transformação discreta? Quer corrigir um detalhe que aparece nas fotos? Essas respostas tornam a conversa mais objetiva.', 'No trabalho apresentado pela Dra. Isabella, o planejamento considera formato, textura, brilho e cor em relação ao rosto. Você pode consultar o portfólio e selecionar exemplos para discutir na avaliação, sem esperar uma reprodução idêntica.'],
      ['Use fotografias como referência, não como promessa', 'Ao comparar imagens, observe se a boca aparece de frente e de lado, se os dentes estão visíveis por inteiro e se há registros do rosto. Luz, enquadramento e edição podem mudar a impressão de cor. Uma foto isolada não permite avaliar toda a qualidade clínica de um tratamento.', 'Leve referências do que você gosta e do que não gosta. É mais útil explicar os motivos da preferência do que escolher um sorriso de outra pessoa como modelo obrigatório.'],
      ['O material é apenas uma parte da decisão', 'Na técnica direta, o profissional modela a resina aderida ao dente, endurece o material com luz e realiza o acabamento. A escolha da cor faz parte desse processo. [ada]', 'Peça para entender como as suas preferências serão discutidas antes da execução. O resultado possível precisa ser compatível com a avaliação do seu sorriso, e não apenas com uma imagem salva no celular.']
    ]
  },
  {
    slug: 'resina-ou-porcelana-como-escolher', date: '2026-09-12T17:46:26-03:00', category: 'Planejamento',
    title: 'Resina ou porcelana: quais perguntas ajudam a escolher?',
    excerpt: 'Entenda as diferenças gerais e leve uma comparação mais útil para a avaliação.',
    intro: 'A escolha entre resina e porcelana costuma começar por uma comparação de preços. Mas uma decisão informada também considera a indicação, o que você espera mudar e como pretende cuidar do tratamento ao longo do tempo.',
    sections: [
      ['Existem diferenças entre os materiais', 'As facetas de resina podem exigir menos remoção de esmalte e são mais fáceis de reparar em algumas situações. Em comparação à porcelana, apresentam menor resistência a manchas e desgaste. Essas diferenças gerais não determinam, sozinhas, a melhor opção para você. [ada]', 'Na avaliação, pergunte como essas características se relacionam com os seus dentes. Uma vantagem apresentada em um anúncio só é relevante quando faz sentido para o caso concreto.'],
      ['Compare propostas com o mesmo objetivo', 'Peça que o profissional explique quais dentes seriam tratados em cada alternativa, quais mudanças são esperadas e como funciona o acompanhamento. Se duas propostas têm escopos diferentes, comparar apenas o total pode levar a uma conclusão equivocada.', 'Também vale perguntar sobre a possibilidade de reparos, o tempo necessário para o atendimento e os custos de manutenção. Não existe obrigação de decidir durante a primeira conversa.'],
      ['Evite escolher por rótulos', 'Expressões como “o melhor material” ou “o sorriso definitivo” não substituem uma explicação individual. Procure entender por que determinada opção está sendo indicada e quais limitações precisam ser consideradas.', 'A Dra. Isabella apresenta na página principal seu trabalho com lentes em resina. Conhecer esse portfólio pode ajudar você a formular perguntas sobre o resultado que deseja. A decisão final deve vir depois da avaliação e do esclarecimento da proposta.']
    ]
  },
  {
    slug: 'lente-de-resina-precisa-desgastar', date: '2026-09-12T17:46:26-03:00', category: 'Antes de decidir',
    title: 'Lente de resina precisa desgastar o dente?',
    excerpt: 'Por que a preservação dental precisa ser discutida antes de qualquer procedimento.',
    intro: 'A possibilidade de preservar os dentes costuma pesar muito na decisão por um tratamento estético. Por isso, a pergunta sobre desgaste merece uma resposta individual, com explicação do que está sendo proposto e por quê.',
    sections: [
      ['Não aceite uma garantia genérica', 'A colocação de facetas de resina pode exigir algum preparo do dente para acomodar o material. A necessidade deve ser avaliada pelo profissional. Não presuma que o nome “lente” garante ausência de desgaste ou que qualquer tratamento poderá ser removido sem consequências. [health]', 'Antes de autorizar a execução, peça uma explicação clara sobre o preparo previsto. Você deve conseguir distinguir o que será acrescentado ao dente e o que, eventualmente, precisará ser ajustado.'],
      ['Três perguntas para levar à avaliação', 'Pergunte: haverá remoção de estrutura dental? Qual é o motivo? Existem alternativas que atendam ao meu objetivo? Essas perguntas não servem para escolher uma técnica sozinho, mas para compreender a recomendação recebida.', 'Se uma explicação parecer técnica demais, peça que ela seja traduzida em exemplos. Também é válido solicitar tempo para pensar antes de decidir.'],
      ['Preservar também envolve definir bem o objetivo', 'Conte se você deseja uma mudança ampla ou se um detalhe específico já resolveria o que incomoda. Quanto mais clara for essa expectativa, melhor será a conversa sobre a extensão da proposta.', 'Fotos da internet não mostram o que foi necessário fazer em cada dente. Use os registros como referências estéticas e reserve as decisões sobre preparo para a consulta. Na página da Isabella você encontra informações sobre o atendimento e o investimento para organizar esse próximo passo.']
    ]
  },
  {
    slug: 'cuidados-manutencao-lentes-de-resina', date: '2026-09-12T17:46:26-03:00', category: 'Cuidados',
    title: 'Cuidados com lentes de resina: o que entra na rotina depois do tratamento',
    excerpt: 'Higiene, retornos e planejamento da manutenção também fazem parte da decisão.',
    intro: 'Pensar na rotina depois do procedimento é tão útil quanto escolher a aparência do novo sorriso. Antes de contratar, entenda quais cuidados serão necessários e como você poderá manter o acompanhamento dentro da sua agenda.',
    sections: [
      ['A higiene continua necessária', 'Dentes com facetas continuam precisando de escovação e limpeza entre os dentes. Uma escova macia, creme dental fluoretado não abrasivo e consultas regulares fazem parte dos cuidados gerais. Evite usar os dentes para abrir embalagens. [cleveland]', 'Peça orientações adequadas aos produtos que você já utiliza. Se tiver dificuldade com algum cuidado, conte isso na consulta para receber uma demonstração. Não tente improvisar polimentos em casa.'],
      ['Combine os retornos antes de começar', 'Pergunte quando deve ser o primeiro retorno, como os próximos serão definidos e qual canal usar se surgir uma dúvida. Confirme quais atendimentos estão incluídos na proposta e quais podem ter cobrança adicional.', 'A página da Isabella menciona acompanhamento e polimento periódico. O intervalo adequado para você deve ser confirmado no atendimento, considerando a avaliação individual.'],
      ['Uma rotina possível vale mais que uma promessa', 'Se você viaja muito ou tem poucos horários livres, inclua isso na conversa. Organizar os retornos é parte prática do planejamento, não um detalhe para resolver apenas depois.', 'Guarde as orientações recebidas e anote alterações que queira relatar. Se algo não parecer certo, entre em contato com a profissional em vez de esperar apenas pelo próximo retorno. Conhecer o custo e a dinâmica desse acompanhamento ajuda a decidir com mais segurança financeira e mais clareza sobre o compromisso de cuidado.']
    ]
  },
  {
    slug: 'lentes-de-resina-mancham-clareamento', date: '2026-09-12T17:46:26-03:00', category: 'Cor do sorriso',
    title: 'Lentes de resina mancham? E o clareamento muda a cor delas?',
    excerpt: 'Entenda por que resina e dentes naturais precisam ser considerados no planejamento da cor.',
    intro: 'Quem procura um sorriso mais claro frequentemente pensa no clareamento e nas lentes como caminhos equivalentes. Eles têm propostas diferentes. Vale discutir a sequência do tratamento antes de escolher a cor ou comprar produtos por conta própria.',
    sections: [
      ['Clareamento não atua da mesma forma na resina', 'Segundo a American Dental Association, o clareamento não altera a cor de facetas, coroas ou restaurações como altera a de dentes naturais. Além disso, nem toda alteração de cor responde ao clareamento. [whitening]', 'Se você já tem resinas ou pensa em clarear os dentes, avise a profissional antes de iniciar. A conversa deve incluir os dentes que não serão tratados com lentes, para que você compreenda como o conjunto será planejado.'],
      ['Mudanças de aparência merecem avaliação', 'A resina pode apresentar manchas e desgaste ao longo do tempo. Café, chá e vinho estão entre as bebidas que merecem atenção em relação à pigmentação das facetas. [ada]', 'Uma mudança percebida no espelho não permite definir em casa se o caso pede limpeza, polimento, reparo ou outra conduta. Evite testar receitas abrasivas para tentar recuperar a cor. Relate o que mudou e quando você começou a notar.'],
      ['Escolha referências que façam sentido para você', 'Na avaliação, diga se prefere uma mudança discreta ou uma cor mais clara. Leve exemplos, mas lembre que telas e iluminação alteram a aparência das fotografias.', 'Peça para entender as limitações da opção escolhida e como será o acompanhamento. A decisão sobre cor fica mais tranquila quando você sabe o que esperar do material e não depende de uma promessa de que o sorriso permanecerá exatamente igual para sempre.']
    ]
  },
  {
    slug: 'bruxismo-lentes-de-resina', date: '2026-09-12T17:46:26-03:00', category: 'Avaliação',
    title: 'Quem tem bruxismo pode colocar lentes de resina?',
    excerpt: 'O que contar na consulta quando existe apertamento ou hábito de ranger os dentes.',
    intro: 'Ter interesse em melhorar o sorriso e perceber sinais de apertamento ao mesmo tempo pode gerar dúvidas. A resposta sobre lentes não deve vir de uma fotografia ou de uma comparação com alguém que fez o tratamento. Ela depende de avaliação.',
    sections: [
      ['Conte o que você percebe, mesmo sem diagnóstico', 'O bruxismo envolve ranger ou apertar os dentes e pode acontecer durante o sono ou quando a pessoa está acordada. Pode estar associado a desgaste, danos dentários e desconforto. Um dentista pode avaliar esses sinais e, quando indicado, recomendar proteção personalizada. [bruxism]', 'Vale relatar episódios de quebra, sensibilidade, sensação de mandíbula cansada ou comentários de alguém que ouviu você ranger os dentes. Esses relatos ajudam a consulta, mas não confirmam sozinhos o diagnóstico.'],
      ['A indicação estética precisa considerar esse histórico', 'O apertamento ou ranger dos dentes pode tornar as facetas uma escolha inadequada em determinados casos. Por isso, a indicação exige cautela e avaliação do profissional. [health]', 'Pergunte se há alguma etapa que deva acontecer antes da proposta estética, como será o acompanhamento e quais limites precisam ser considerados. Não compre uma placa por conta própria como forma de garantir que o tratamento será indicado.'],
      ['O que levar para a conversa', 'Se já usa uma placa ou recebeu orientações anteriores, informe isso e leve os registros disponíveis. Explique também o que você espera mudar no sorriso. Assim, a conversa não fica restrita à aparência nem ignora seu objetivo estético.', 'A proposta deve deixar claros o planejamento, os cuidados e o investimento. A página da Dra. Isabella apresenta seu trabalho; a avaliação é o espaço para discutir se ele corresponde às necessidades do seu caso.']
    ]
  },
  {
    slug: 'quantos-dentes-colocar-lentes-de-resina', date: '2026-09-12T17:46:26-03:00', category: 'Planejamento',
    title: 'Preço das lentes de resina: como a quantidade de dentes entra no orçamento',
    excerpt: 'Viu a condição de 10x de R$500? Entenda por que é preciso confirmar os dentes incluídos na proposta individual.',
    intro: 'Ao pesquisar lentes em resina, é comum encontrar propostas com quantidades diferentes. Isso pode dar a impressão de que existe um número ideal para todos. A pergunta mais útil, porém, é quais dentes precisam ser considerados para o que você deseja mudar.',
    sections: [
      ['A quantidade não deve ser uma escolha automática', 'Facetas podem ser colocadas em um ou mais dentes. Elas não substituem a correção da mordida ou o alinhamento ortodôntico quando esses cuidados são necessários. [health]', 'Em vez de chegar à consulta decidido por uma quantidade, explique seu objetivo. Você pode apontar um detalhe isolado ou dizer que gostaria de discutir o sorriso como um conjunto. A indicação deve vir da avaliação.'],
      ['Peça para entender o desenho da proposta', 'Solicite que a profissional mostre quais dentes estão incluídos e explique a razão de cada escolha. Pergunte também como ficará a relação com os dentes que não receberão resina.', 'Se estiver comparando orçamentos, confira se ambos contemplam a mesma quantidade e as mesmas etapas. Uma proposta menor pode atender a outro objetivo, e uma maior não é automaticamente melhor para você.'],
      ['Quantidade, investimento e expectativa precisam estar alinhados', 'Antes de contratar, confirme por escrito o escopo e o total. Não deduza a quantidade de lentes a partir de uma parcela anunciada. Também não presuma que “sorriso completo” significa as duas arcadas: peça uma descrição objetiva.', 'Conhecer casos reais ajuda a encontrar referências, mas a quantidade usada em outra pessoa não define a sua. Na avaliação com a Isabella, leve suas dúvidas e peça um planejamento que você consiga compreender antes de decidir.']
    ]
  },
  {
    slug: 'primeira-avaliacao-lentes-de-resina', date: '2026-09-12T17:46:26-03:00', category: 'Sua consulta',
    title: 'Avaliação para lentes de resina: o que perguntar sobre preço e parcelamento',
    excerpt: 'Valor total, parcelas, retornos e manutenção: prepare suas perguntas para entender a proposta antes de contratar.',
    intro: 'Você não precisa chegar à primeira consulta sabendo qual técnica escolher. O mais útil é levar suas expectativas e estar disposto a entender as possibilidades. A avaliação deve ajudar a organizar a decisão, inclusive quando ainda existem dúvidas sobre o investimento.',
    sections: [
      ['Anote o que incomoda e o que deseja preservar', 'Faça uma lista curta: o que você gostaria de mudar no sorriso e o que já gosta nele? Selecione algumas fotos de referência e explique o motivo de cada escolha. Vale incluir exemplos de resultados que você não deseja.', 'Conte sobre tratamentos anteriores e leve os registros que tiver disponíveis. Se houver alguma dificuldade de agenda, receio ou dúvida importante, fale disso no início da conversa.'],
      ['Entenda a indicação antes de discutir a execução', 'A avaliação de dentes e gengivas é importante para decidir sobre facetas. Problemas como cáries extensas ou doença gengival precisam ser considerados e tratados antes de uma proposta estética adequada. [cleveland]', 'A página da Isabella descreve uma etapa de conversa, exame e fotos para alinhar expectativas. Pergunte como isso se aplica a você e quais informações ainda serão necessárias para concluir o planejamento.'],
      ['Saia com uma proposta compreensível', 'Confira quais dentes estão incluídos, quais são as etapas, quantos encontros estão previstos e como funcionam os retornos. Pergunte sobre valor total, pagamento e manutenção. Se algo não estiver claro, peça que a explicação seja retomada.', 'Antes de agendar, confirme também o valor da própria avaliação e os detalhes do atendimento. Você pode consultar o portfólio e a seção de investimento da LP para chegar à conversa com uma referência, sem tratar o anúncio como orçamento individual.']
    ]
  },
  {
    slug: 'como-escolher-profissional-lentes-resina-sao-paulo', date: '2026-09-12T17:46:26-03:00', category: 'Escolha consciente',
    title: 'Como escolher uma profissional de lentes em resina em São Paulo',
    excerpt: 'Portfólio, clareza da proposta e acompanhamento: critérios para ir além da localização e do preço.',
    intro: 'Escolher quem vai cuidar do seu sorriso envolve confiança, mas também informações concretas. Um perfil bonito pode despertar interesse. Para decidir, vale conhecer o trabalho, conversar sobre suas expectativas e entender como será o atendimento.',
    sections: [
      ['Conheça quem realiza os procedimentos', 'Procure a identificação da cirurgiã-dentista e o registro profissional informado. Na página da Isabella estão o nome completo usado no atendimento, o CRO-SP 148618 e informações sobre sua formação. Use esses dados como ponto de partida para conhecer a profissional.', 'Observe o portfólio com calma. Busque referências que se aproximem do que você deseja e pergunte sobre as limitações da comparação. Imagens não substituem uma avaliação individual.'],
      ['Preste atenção à clareza da conversa', 'Uma proposta compreensível deve permitir que você saiba o que está sendo indicado, quais dentes estão envolvidos e como será o acompanhamento. Anote suas dúvidas e observe se há espaço para esclarecê-las sem pressa.', 'Ao comparar opções, considere o conjunto: planejamento, execução, retornos e investimento. O menor valor da parcela não revela sozinho o custo completo nem o escopo do atendimento.'],
      ['Considere a rotina de deslocamento', 'A Isabella informa atendimento na zona sul de São Paulo, próximo ao metrô Eucaliptos, com hora marcada. Antes de confirmar, peça o endereço completo e verifique como encaixar consultas e retornos na sua rotina.', 'Se você vem de outra região, converse sobre a agenda antes de organizar a viagem. Escolher com informação significa entender tanto o tratamento proposto quanto a logística para acompanhá-lo. Visite a página principal para conhecer resultados, condições de investimento e o caminho para solicitar uma avaliação.']
    ]
  }
];


const covers = [
  ['hero-sorriso.webp','Detalhe de sorriso do portfólio da Dra. Isabella'],
  ['mosaico-resultado.webp','Resultado de lentes em resina visto de lado'],
  ['textura-natural.webp','Detalhe de textura e acabamento de lentes em resina'],
  ['mosaico-tons-pele.webp','Sorriso apresentado no portfólio da Dra. Isabella'],
  ['hero-sorriso.webp','Sorriso com lentes em resina'],
  ['textura-natural.webp','Detalhe da cor e do acabamento das lentes'],
  ['mosaico-resultado.webp','Sorriso do portfólio de lentes em resina'],
  ['mosaico-tons-pele.webp','Resultado de lentes em resina do portfólio'],
  ['dra-isabella-perfil.webp','Dra. Isabella Medeiros'],
  ['dra-isabella-perfil.webp','Dra. Isabella Medeiros, cirurgiã-dentista']
];
posts.forEach((p,i)=>{p.image='/fotos/'+covers[i][0];p.imageAlt=covers[i][1];});

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pathFor = p => '/blog/' + p.slug;
const published = () => posts;
const dateLabel = d => new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(d));
const rich = text => esc(text).replace(/\[(ada|cleveland|health|whitening|bruxism)\]/g, (_,key) => `<a class="source" href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]}</a>`);
const meta = p => `<span class="category">${esc(p.category)}</span><time datetime="${p.date}">${dateLabel(p.date)}</time>`;
function layout(title, description, path, body, schema, noindex=false) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Dra. Isabella Medeiros</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${noindex?'noindex,follow':'index,follow'}"><link rel="canonical" href="${ORIGIN}${path}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${ORIGIN}${path}"><meta property="og:type" content="${schema?.['@type']==='BlogPosting'?'article':'website'}"><meta name="theme-color" content="#090806"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/blog.css">${schema?`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org',...schema}).replace(/</g,'\\u003c')}</script>`:''}<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18369143887"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-18369143887');</script></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><header><div class="wrap nav"><a class="brand" href="/">Dra. Isabella Medeiros<span>CRO-SP 148618 · São Paulo</span></a><nav aria-label="Navegação principal"><a href="/blog">Blog</a><a href="/#investimento">Investimento</a></nav></div></header><main id="conteudo">${body}</main><footer class="wrap footer"><p class="signature">Dra. Isabella Medeiros</p><p>Cirurgiã-dentista · CRO-SP 148618 · São Paulo</p><p>Conteúdo educativo produzido pela equipe editorial BNC. Não substitui uma avaliação odontológica individual.</p><a href="/">Conhecer o atendimento</a> · <a href="/blog">Todos os artigos</a></footer></body></html>`;
}
const cta = `<aside class="next-step"><span class="category">Lentes em resina · São Paulo</span><h2>Conheça o trabalho.<br><em>Entenda o investimento.</em></h2><p><strong>10x de R$500 no cartão · total de R$5.000.</strong><br>Condição apresentada na página de atendimento. O valor final depende da avaliação clínica. Confirme os dentes incluídos e as condições da sua proposta.</p><a class="button" href="/#investimento">Ver investimento e atendimento</a></aside>`;
function indexPage(now) {
  const live=published(now);
  const cards=live.map(p=>`<article class="editorial-card"><a class="card-link" href="${pathFor(p)}"><span class="category">${esc(p.category)}</span><h2>${esc(p.title)}</h2><p class="card-subtitle">${esc(p.excerpt)}</p><div class="card-image"><img src="${p.image}" alt="${esc(p.imageAlt)}" loading="lazy" width="900" height="600"></div><div class="card-bottom"><span>Ler artigo</span><span aria-hidden="true">↗</span></div></a></article>`).join('');
  const body=`<div class="wrap"><section class="blog-intro"><p class="category">Blog · Dra. Isabella Medeiros</p><h1>Lentes em resina.<br><em>Informação para decidir.</em></h1><p>Investimento, resultados naturais e cuidados: encontre respostas para planejar seu sorriso com clareza.</p></section><section class="editorial-grid" aria-label="Artigos sobre lentes em resina">${cards}</section>${cta}</div>`;
  return layout('Blog sobre lentes de resina', 'Preço, parcelamento, naturalidade e cuidados com lentes em resina em São Paulo. Leia os artigos da Dra. Isabella.', '/blog',body,{'@type':'Blog',name:'Blog sobre lentes de resina',url:ORIGIN+'/blog',blogPost:live.map(p=>({'@type':'BlogPosting',headline:p.title,url:ORIGIN+pathFor(p),datePublished:p.date}))});
}
function articlePage(p,now) {
  const count=[p.intro,...p.sections.flat()].join(' ').split(/\s+/).length;
  const related=published(now).filter(x=>x.slug!==p.slug).slice(0,2);
  const body=`<article class="wrap article"><a class="back" href="/blog">← Voltar ao blog</a><div class="meta">${meta(p)}<span>${Math.max(2,Math.ceil(count/180))} min de leitura</span></div><h1>${esc(p.title)}</h1><p class="standfirst">${esc(p.excerpt)}</p><figure class="article-cover"><img src="${p.image}" alt="${esc(p.imageAlt)}" width="1200" height="800" fetchpriority="high"><figcaption>Imagem do portfólio da Dra. Isabella para ilustrar o tema. A indicação e os resultados variam conforme o caso.</figcaption></figure><p class="byline">Por Equipe editorial BNC · Horário de São Paulo</p><div class="article-body"><p>${rich(p.intro)}</p>${p.sections.map(s=>`<section><h2>${esc(s[0])}</h2>${s.slice(1).map(t=>`<p>${rich(t)}</p>`).join('')}</section>`).join('')}${cta}</div>${related.length?`<section class="related"><h2>Continue a leitura</h2>${related.map(x=>`<a href="${pathFor(x)}">${esc(x.title)} <span aria-hidden="true">↗</span></a>`).join('')}</section>`:''}</article>`;
  return layout(p.title,p.excerpt,pathFor(p),body,{'@type':'BlogPosting',headline:p.title,description:p.excerpt,datePublished:p.date,dateModified:p.date,inLanguage:'pt-BR',mainEntityOfPage:ORIGIN+pathFor(p),author:{'@type':'Organization',name:'Equipe editorial BNC'},publisher:{'@type':'Organization',name:'Dra. Isabella Medeiros',url:ORIGIN}});
}
function handle(req,res,now=Date.now()) {
  res.setHeader('Cache-Control','no-store');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(!['GET','HEAD'].includes(req.method||'GET')){res.setHeader('Allow','GET, HEAD');res.statusCode=405;return res.end();}
  const url=new URL(req.url,ORIGIN);
  let slug=typeof req.query?.slug==='string'?req.query.slug:url.searchParams.get('slug');
  if(slug===null||slug===undefined)slug=url.pathname.replace(/^\/blog\/?/,'').replace(/\/$/,'');
  if(url.pathname==='/api/blog'&&!slug)slug='';
  if(slug==='sitemap.xml'){
    res.setHeader('Content-Type','application/xml; charset=utf-8');
    res.statusCode=200;
    return res.end(req.method==='HEAD'?'':`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${ORIGIN}/blog</loc></url>${published(now).map(p=>`<url><loc>${ORIGIN}${pathFor(p)}</loc><lastmod>${p.date}</lastmod></url>`).join('')}</urlset>`);
  }
  res.setHeader('Content-Type','text/html; charset=utf-8');
  if(!slug){res.statusCode=200;return res.end(req.method==='HEAD'?'':indexPage(now));}
  const p=published(now).find(p=>p.slug===slug);
  res.statusCode=p?200:404;
  if(!p)res.setHeader('X-Robots-Tag','noindex');
  return res.end(req.method==='HEAD'?'':p?articlePage(p,now):layout('Artigo não disponível','Volte ao blog para consultar os artigos disponíveis.','/blog',`<div class="wrap article"><h1>Artigo não disponível</h1><p>Consulte as leituras já publicadas e a agenda do blog.</p><a class="button" href="/blog">Voltar ao blog</a></div>`,null,true));
}
module.exports=(req,res)=>handle(req,res);
// Interface de verificação local. O horário nunca é recebido de uma requisição.
module.exports.check={posts,published,indexPage,articlePage,handle};
