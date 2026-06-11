/* BPMN TO-BE — Processo de Vacinação com VacinaFácil — SVG injetável */
window.SVG_BPMN_TOBE = `
<svg viewBox="0 0 1870 790" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif" font-size="13.5">
  <defs>
    <marker id="setaB" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#16384F"></path>
    </marker>
  </defs>
  <style>
    .tarefaB { fill: #FFFFFF; stroke: #16384F; stroke-width: 1.6; }
    .txtB { fill: #16384F; }
    .fluxoB { stroke: #16384F; stroke-width: 1.6; fill: none; marker-end: url(#setaB); }
    .rotB { font-size: 11.5px; font-weight: 600; fill: #4A6478; }
    .melhoria { fill: #1E7A50; }
    .melhoria-txt { fill: #FFFFFF; font-size: 11px; font-weight: 700; }
  </style>

  <!-- Piscina -->
  <rect x="40" y="40" width="1810" height="700" fill="none" stroke="#16384F" stroke-width="2"></rect>
  <rect x="40" y="40" width="36" height="700" fill="#E6F5EE" stroke="#16384F" stroke-width="2"></rect>
  <text x="58" y="390" transform="rotate(-90 58 390)" text-anchor="middle" font-family="Sora, Arial" font-weight="700" font-size="15" fill="#1E7A50">Processo de Vacinação com VacinaFácil</text>

  <!-- Raias -->
  <g stroke="#9FB4C2" stroke-width="1.2">
    <line x1="76" y1="215" x2="1850" y2="215"></line>
    <line x1="76" y1="390" x2="1850" y2="390"></line>
    <line x1="76" y1="565" x2="1850" y2="565"></line>
  </g>
  <g font-family="Sora, Arial" font-weight="600" font-size="13" fill="#16384F">
    <text x="92" y="64">Cidadão</text>
    <text x="92" y="239">Sistema VacinaFácil</text>
    <text x="92" y="414">Técnico de Enfermagem</text>
    <text x="92" y="589">Gestor da UBS</text>
  </g>

  <!-- ── Sistema (linha A): início + notificação ── -->
  <circle cx="120" cy="268" r="15" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></circle>
  <text x="120" y="303" text-anchor="middle" class="rotB">Início</text>

  <rect x="160" y="240" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="245" y="264" text-anchor="middle" class="txtB">Envia notificação</text>
  <text x="245" y="281" text-anchor="middle" class="txtB">push (RF-008)</text>

  <path class="fluxoB" d="M135,268 L160,268"></path>
  <path class="fluxoB" d="M245,240 L245,120 L360,120"></path>

  <!-- ── Cidadão ── -->
  <rect x="360" y="92" width="150" height="56" rx="10" class="tarefaB"></rect>
  <text x="435" y="116" text-anchor="middle" class="txtB">Acessa app</text>
  <text x="435" y="133" text-anchor="middle" class="txtB">VacinaFácil</text>

  <rect x="545" y="92" width="165" height="56" rx="10" class="tarefaB"></rect>
  <text x="627" y="116" text-anchor="middle" class="txtB">Visualiza carteirinha</text>
  <text x="627" y="133" text-anchor="middle" class="txtB">digital</text>

  <rect x="745" y="92" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="830" y="116" text-anchor="middle" class="txtB">Seleciona vacina</text>
  <text x="830" y="133" text-anchor="middle" class="txtB">e busca UBS</text>

  <path d="M985,95 L1010,120 L985,145 L960,120 Z" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></path>
  <text x="985" y="125" text-anchor="middle" font-weight="700" fill="#16384F">✕</text>
  <text x="985" y="82" text-anchor="middle" class="rotB">UBS com estoque? (RN-003)</text>

  <rect x="1150" y="92" width="150" height="56" rx="10" class="tarefaB"></rect>
  <text x="1225" y="116" text-anchor="middle" class="txtB">Agenda data</text>
  <text x="1225" y="133" text-anchor="middle" class="txtB">e horário</text>

  <path class="fluxoB" d="M510,120 L545,120"></path>
  <path class="fluxoB" d="M710,120 L745,120"></path>
  <path class="fluxoB" d="M915,120 L960,120"></path>
  <path class="fluxoB" d="M1010,120 L1150,120"></path>
  <text x="1022" y="112" class="rotB">Sim</text>

  <!-- NÃO: sistema sugere alternativa e retorna -->
  <rect x="950" y="240" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="1035" y="264" text-anchor="middle" class="txtB">Sistema sugere</text>
  <text x="1035" y="281" text-anchor="middle" class="txtB">UBS alternativa</text>
  <path class="fluxoB" d="M985,145 L985,200 L1035,200 L1035,240"></path>
  <text x="993" y="165" class="rotB">Não</text>
  <path class="fluxoB" d="M950,268 L925,268 L925,60 L985,60 L985,95"></path>

  <!-- ── Sistema (linha A): confirmação e lembretes ── -->
  <rect x="1140" y="240" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="1225" y="264" text-anchor="middle" class="txtB">Confirma por</text>
  <text x="1225" y="281" text-anchor="middle" class="txtB">e-mail/SMS (RF-006)</text>

  <rect x="1345" y="240" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="1430" y="264" text-anchor="middle" class="txtB">Agenda lembretes</text>
  <text x="1430" y="281" text-anchor="middle" class="txtB">D-7 e D-1</text>

  <path class="fluxoB" d="M1225,148 L1225,240"></path>
  <path class="fluxoB" d="M1310,268 L1345,268"></path>
  <path class="fluxoB" d="M1430,240 L1430,120 L1475,120"></path>

  <!-- ── Cidadão: comparece ── -->
  <rect x="1475" y="92" width="170" height="56" rx="10" class="tarefaB"></rect>
  <text x="1560" y="116" text-anchor="middle" class="txtB">Comparece no</text>
  <text x="1560" y="133" text-anchor="middle" class="txtB">horário agendado</text>

  <path class="fluxoB" d="M1560,148 L1560,449"></path>

  <!-- ── Técnico ── -->
  <rect x="1475" y="449" width="160" height="56" rx="10" class="tarefaB"></rect>
  <text x="1555" y="473" text-anchor="middle" class="txtB">Consulta agenda</text>
  <text x="1555" y="490" text-anchor="middle" class="txtB">digital do dia</text>

  <rect x="1240" y="449" width="195" height="56" rx="10" class="tarefaB"></rect>
  <text x="1337" y="473" text-anchor="middle" class="txtB">Registra vacinação:</text>
  <text x="1337" y="490" text-anchor="middle" class="txtB">lote e dose (RF-010)</text>

  <path class="fluxoB" d="M1475,477 L1435,477"></path>
  <path class="fluxoB" d="M1337,449 L1337,373"></path>

  <!-- ── Sistema (linha B): atualização automática ── -->
  <rect x="1180" y="317" width="165" height="56" rx="10" class="tarefaB"></rect>
  <text x="1262" y="341" text-anchor="middle" class="txtB">Atualiza carteirinha</text>
  <text x="1262" y="358" text-anchor="middle" class="txtB">(RF-011)</text>

  <rect x="1385" y="317" width="165" height="56" rx="10" class="tarefaB"></rect>
  <text x="1467" y="341" text-anchor="middle" class="txtB">Decrementa estoque</text>
  <text x="1467" y="358" text-anchor="middle" class="txtB">(RF-012)</text>

  <path d="M1610,320 L1635,345 L1610,370 L1585,345 Z" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></path>
  <text x="1610" y="350" text-anchor="middle" font-weight="700" fill="#16384F">✕</text>
  <text x="1572" y="308" text-anchor="end" class="rotB">Estoque ≤ crítico? (RN-006)</text>

  <path class="fluxoB" d="M1345,345 L1385,345"></path>
  <path class="fluxoB" d="M1550,345 L1585,345"></path>

  <!-- NÃO: fim direto -->
  <path class="fluxoB" d="M1610,320 L1610,285"></path>
  <text x="1618" y="305" class="rotB">Não</text>
  <circle cx="1610" cy="268" r="15" fill="#E6F5EE" stroke="#1E7A50" stroke-width="4"></circle>
  <text x="1655" y="258" class="rotB" fill="#1E7A50">Vacinação registrada</text>
  <text x="1655" y="273" class="rotB" fill="#1E7A50">e rastreável</text>

  <!-- SIM: alerta ao gestor -->
  <rect x="1665" y="317" width="180" height="56" rx="10" class="tarefaB"></rect>
  <text x="1755" y="341" text-anchor="middle" class="txtB">Alerta automático</text>
  <text x="1755" y="358" text-anchor="middle" class="txtB">ao Gestor</text>
  <path class="fluxoB" d="M1635,345 L1665,345"></path>
  <text x="1640" y="337" class="rotB">Sim</text>
  <path class="fluxoB" d="M1755,373 L1755,624"></path>

  <!-- ── Gestor ── -->
  <rect x="1640" y="624" width="185" height="56" rx="10" class="tarefaB"></rect>
  <text x="1732" y="648" text-anchor="middle" class="txtB">Acessa painel em</text>
  <text x="1732" y="665" text-anchor="middle" class="txtB">tempo real (RF-014)</text>

  <circle cx="1592" cy="652" r="15" fill="#E6F5EE" stroke="#1E7A50" stroke-width="4"></circle>
  <text x="1592" y="690" text-anchor="middle" class="rotB" fill="#1E7A50">Fim</text>
  <path class="fluxoB" d="M1640,652 L1610,652"></path>

  <!-- ── Melhorias (etiquetas verdes) ── -->
  <g>
    <rect x="160" y="312" width="280" height="24" rx="12" class="melhoria"></rect>
    <text x="300" y="328" text-anchor="middle" class="melhoria-txt">① Notificação proativa elimina esquecimento</text>
    <line x1="245" y1="312" x2="245" y2="296" stroke="#1E7A50" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="1100" y="48" width="250" height="24" rx="12" class="melhoria"></rect>
    <text x="1225" y="64" text-anchor="middle" class="melhoria-txt">② Agendamento com estoque garantido</text>
    <line x1="1225" y1="72" x2="1225" y2="92" stroke="#1E7A50" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="1240" y="528" width="200" height="24" rx="12" class="melhoria"></rect>
    <text x="1340" y="544" text-anchor="middle" class="melhoria-txt">③ Registro digital instantâneo</text>
    <line x1="1337" y1="528" x2="1337" y2="505" stroke="#1E7A50" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="1490" y="528" width="215" height="24" rx="12" class="melhoria" transform="translate(0,14)"></rect>
    <text x="1597" y="558" text-anchor="middle" class="melhoria-txt">④ Alerta automático de estoque</text>
    <line x1="1700" y1="542" x2="1748" y2="450" stroke="none"></line>

    <rect x="1635" y="695" width="190" height="24" rx="12" class="melhoria"></rect>
    <text x="1730" y="711" text-anchor="middle" class="melhoria-txt">⑤ Relatórios em tempo real</text>
    <line x1="1730" y1="695" x2="1730" y2="680" stroke="#1E7A50" stroke-width="1.4" stroke-dasharray="3 3"></line>
  </g>
</svg>`;
