/* BPMN AS-IS — Processo de Vacinação Atual (Sem Sistema) — SVG injetável */
window.SVG_BPMN_ASIS = `
<svg viewBox="0 0 1870 790" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif" font-size="13.5">
  <defs>
    <marker id="setaA" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#16384F"></path>
    </marker>
  </defs>
  <style>
    .tarefa { fill: #FFFFFF; stroke: #16384F; stroke-width: 1.6; rx: 10; }
    .txt { fill: #16384F; }
    .fluxo { stroke: #16384F; stroke-width: 1.6; fill: none; marker-end: url(#setaA); }
    .rot { font-size: 11.5px; font-weight: 600; fill: #4A6478; }
    .gargalo { fill: #C0392B; }
    .gargalo-txt { fill: #FFFFFF; font-size: 11px; font-weight: 700; }
  </style>

  <!-- Piscina -->
  <rect x="40" y="40" width="1810" height="700" fill="none" stroke="#16384F" stroke-width="2"></rect>
  <rect x="40" y="40" width="36" height="700" fill="#E8F0F6" stroke="#16384F" stroke-width="2"></rect>
  <text x="58" y="390" transform="rotate(-90 58 390)" text-anchor="middle" font-family="Sora, Arial" font-weight="700" font-size="15" fill="#16384F">Processo de Vacinação Atual (Sem Sistema)</text>

  <!-- Raias -->
  <g stroke="#9FB4C2" stroke-width="1.2">
    <line x1="76" y1="215" x2="1850" y2="215"></line>
    <line x1="76" y1="390" x2="1850" y2="390"></line>
    <line x1="76" y1="565" x2="1850" y2="565"></line>
  </g>
  <g font-family="Sora, Arial" font-weight="600" font-size="13" fill="#16384F">
    <text x="92" y="64">Cidadão</text>
    <text x="92" y="239">Recepcionista da UBS</text>
    <text x="92" y="414">Técnico de Enfermagem</text>
    <text x="92" y="589">Gestor da UBS</text>
  </g>

  <!-- ── Raia 1: Cidadão ── -->
  <circle cx="120" cy="120" r="15" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></circle>
  <text x="120" y="155" text-anchor="middle" class="rot">Início</text>

  <rect x="160" y="92" width="160" height="56" rx="10" class="tarefa"></rect>
  <text x="240" y="116" text-anchor="middle" class="txt">Lembra da vacina</text>
  <text x="240" y="133" text-anchor="middle" class="txt">por acaso</text>

  <rect x="355" y="92" width="160" height="56" rx="10" class="tarefa"></rect>
  <text x="435" y="116" text-anchor="middle" class="txt">Procura carteirinha</text>
  <text x="435" y="133" text-anchor="middle" class="txt">física</text>

  <path d="M580,95 L605,120 L580,145 L555,120 Z" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></path>
  <text x="580" y="125" text-anchor="middle" font-weight="700" fill="#16384F">✕</text>
  <text x="580" y="82" text-anchor="middle" class="rot">Encontrou?</text>

  <rect x="520" y="162" width="125" height="42" rx="9" class="tarefa"></rect>
  <text x="582" y="188" text-anchor="middle" class="txt">Solicita 2ª via</text>

  <rect x="645" y="92" width="175" height="56" rx="10" class="tarefa"></rect>
  <text x="732" y="116" text-anchor="middle" class="txt">Desloca-se à UBS</text>
  <text x="732" y="133" text-anchor="middle" class="txt">sem agendamento</text>

  <path class="fluxo" d="M135,120 L160,120"></path>
  <path class="fluxo" d="M320,120 L355,120"></path>
  <path class="fluxo" d="M515,120 L555,120"></path>
  <path class="fluxo" d="M605,120 L645,120"></path>
  <text x="618" y="112" class="rot">Sim</text>
  <path class="fluxo" d="M580,145 L580,162"></path>
  <text x="588" y="158" class="rot">Não</text>
  <path class="fluxo" d="M645,183 L700,183 L700,148"></path>

  <!-- Cidadão → Recepcionista -->
  <path class="fluxo" d="M732,148 L732,252"></path>

  <!-- ── Raia 2: Recepcionista ── -->
  <rect x="645" y="252" width="175" height="56" rx="10" class="tarefa"></rect>
  <text x="732" y="276" text-anchor="middle" class="txt">Anota nome em</text>
  <text x="732" y="293" text-anchor="middle" class="txt">lista manual</text>

  <rect x="865" y="252" width="180" height="56" rx="10" class="tarefa"></rect>
  <text x="955" y="276" text-anchor="middle" class="txt">Consulta estoque em</text>
  <text x="955" y="293" text-anchor="middle" class="txt">ficha de papel</text>

  <path d="M1115,255 L1140,280 L1115,305 L1090,280 Z" fill="#FFFFFF" stroke="#16384F" stroke-width="1.6"></path>
  <text x="1115" y="285" text-anchor="middle" font-weight="700" fill="#16384F">✕</text>
  <text x="1115" y="242" text-anchor="middle" class="rot">Vacina disponível?</text>

  <rect x="975" y="322" width="180" height="46" rx="9" class="tarefa"></rect>
  <text x="1065" y="342" text-anchor="middle" class="txt">Informa cidadão:</text>
  <text x="1065" y="358" text-anchor="middle" class="txt">"volte outro dia"</text>

  <circle cx="1210" cy="345" r="15" fill="#FAEAE8" stroke="#C0392B" stroke-width="4"></circle>
  <text x="1210" y="378" text-anchor="middle" class="rot" fill="#C0392B">Vai embora sem vacina</text>

  <rect x="1180" y="252" width="135" height="56" rx="10" class="tarefa"></rect>
  <text x="1247" y="285" text-anchor="middle" class="txt">Chama cidadão</text>

  <path class="fluxo" d="M820,280 L865,280"></path>
  <path class="fluxo" d="M1045,280 L1090,280"></path>
  <path class="fluxo" d="M1115,305 L1115,322"></path>
  <text x="1122" y="318" class="rot">Não</text>
  <path class="fluxo" d="M1140,280 L1180,280"></path>
  <text x="1148" y="272" class="rot">Sim</text>
  <path class="fluxo" d="M1155,345 L1195,345"></path>

  <!-- Recepcionista → Técnico -->
  <path class="fluxo" d="M1315,280 L1345,280 L1345,420 L1147,420 L1147,449"></path>

  <!-- ── Raia 3: Técnico ── -->
  <rect x="1070" y="449" width="155" height="56" rx="10" class="tarefa"></rect>
  <text x="1147" y="473" text-anchor="middle" class="txt">Verifica carteirinha</text>
  <text x="1147" y="490" text-anchor="middle" class="txt">em papel</text>

  <rect x="1255" y="449" width="115" height="56" rx="10" class="tarefa"></rect>
  <text x="1312" y="482" text-anchor="middle" class="txt">Aplica vacina</text>

  <rect x="1400" y="449" width="155" height="56" rx="10" class="tarefa"></rect>
  <text x="1477" y="473" text-anchor="middle" class="txt">Anota à mão na</text>
  <text x="1477" y="490" text-anchor="middle" class="txt">carteirinha</text>

  <rect x="1585" y="449" width="155" height="56" rx="10" class="tarefa"></rect>
  <text x="1662" y="473" text-anchor="middle" class="txt">Registra em</text>
  <text x="1662" y="490" text-anchor="middle" class="txt">planilha interna</text>

  <circle cx="1790" cy="477" r="15" fill="#E6F5EE" stroke="#1E7A50" stroke-width="4"></circle>
  <text x="1790" y="515" text-anchor="middle" class="rot" fill="#1E7A50">Atendimento</text>
  <text x="1790" y="530" text-anchor="middle" class="rot" fill="#1E7A50">concluído</text>

  <path class="fluxo" d="M1225,477 L1255,477"></path>
  <path class="fluxo" d="M1370,477 L1400,477"></path>
  <path class="fluxo" d="M1555,477 L1585,477"></path>
  <path class="fluxo" d="M1740,477 L1775,477"></path>

  <!-- Técnico → Gestor -->
  <path class="fluxo" d="M1662,505 L1662,540 L1230,540 L1230,624"></path>

  <!-- ── Raia 4: Gestor ── -->
  <rect x="1140" y="624" width="180" height="56" rx="10" class="tarefa"></rect>
  <text x="1230" y="648" text-anchor="middle" class="txt">Consolida planilhas</text>
  <text x="1230" y="665" text-anchor="middle" class="txt">semanalmente</text>

  <rect x="1375" y="624" width="190" height="56" rx="10" class="tarefa"></rect>
  <text x="1470" y="648" text-anchor="middle" class="txt">Envia relatório manual</text>
  <text x="1470" y="665" text-anchor="middle" class="txt">à Secretaria</text>

  <circle cx="1625" cy="652" r="15" fill="#FFFFFF" stroke="#16384F" stroke-width="4"></circle>
  <text x="1625" y="690" text-anchor="middle" class="rot">Fim</text>

  <path class="fluxo" d="M1320,652 L1375,652"></path>
  <path class="fluxo" d="M1565,652 L1610,652"></path>

  <!-- ── Gargalos (etiquetas vermelhas) ── -->
  <g>
    <rect x="318" y="48" width="235" height="24" rx="12" class="gargalo"></rect>
    <text x="435" y="64" text-anchor="middle" class="gargalo-txt">① Carteirinha frequentemente perdida</text>
    <line x1="435" y1="72" x2="435" y2="92" stroke="#C0392B" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="612" y="170" width="245" height="24" rx="12" class="gargalo" transform="translate(33,-122)"></rect>
    <text x="767" y="64" text-anchor="middle" class="gargalo-txt">② Deslocamento sem garantia de vacina</text>
    <line x1="755" y1="72" x2="745" y2="92" stroke="#C0392B" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="640" y="330" width="190" height="24" rx="12" class="gargalo"></rect>
    <text x="735" y="346" text-anchor="middle" class="gargalo-txt">③ Filas sem hora marcada</text>
    <line x1="735" y1="330" x2="735" y2="308" stroke="#C0392B" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="1352" y="535" width="250" height="24" rx="12" class="gargalo"></rect>
    <text x="1477" y="551" text-anchor="middle" class="gargalo-txt">④ Letra ilegível e dados duplicados</text>
    <line x1="1477" y1="535" x2="1477" y2="505" stroke="#C0392B" stroke-width="1.4" stroke-dasharray="3 3"></line>

    <rect x="1105" y="700" width="250" height="24" rx="12" class="gargalo"></rect>
    <text x="1230" y="716" text-anchor="middle" class="gargalo-txt">⑤ Consolidação semanal com atrasos</text>
    <line x1="1230" y1="700" x2="1230" y2="680" stroke="#C0392B" stroke-width="1.4" stroke-dasharray="3 3"></line>
  </g>
</svg>`;
