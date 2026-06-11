/* UML 3.1 — Diagrama de Casos de Uso — SVG injetável */
window.SVG_UML_CASOS = `
<svg viewBox="0 0 1640 1000" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif" font-size="13">
  <defs>
    <marker id="setaUC" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto">
      <path d="M0,0 L10,5.5 L0,11" fill="none" stroke="#16384F" stroke-width="1.4"></path>
    </marker>
  </defs>
  <style>
    .elipse { fill: #E6F5EE; stroke: #1E7A50; stroke-width: 1.6; }
    .elipse-inc { fill: #E8F0F6; stroke: #16384F; stroke-width: 1.6; }
    .uc-cod { font-size: 11px; font-weight: 700; fill: #1E7A50; }
    .uc-nome { font-size: 12.5px; font-weight: 600; fill: #16384F; }
    .assoc { stroke: #4A6478; stroke-width: 1.4; }
    .dep { stroke: #16384F; stroke-width: 1.4; stroke-dasharray: 6 4; fill: none; marker-end: url(#setaUC); }
    .estereotipo { font-size: 11.5px; font-style: italic; fill: #16384F; }
    .ator-nome { font-size: 13px; font-weight: 700; fill: #16384F; text-anchor: middle; }
    .ator { stroke: #16384F; stroke-width: 2; fill: none; }
  </style>

  <!-- Fronteira do sistema -->
  <rect x="320" y="60" width="1000" height="880" rx="14" fill="#FFFFFF" stroke="#16384F" stroke-width="2"></rect>
  <text x="820" y="95" text-anchor="middle" font-family="Sora, Arial" font-weight="700" font-size="18" fill="#16384F">Sistema VacinaFácil</text>

  <!-- ── Atores ── -->
  <g class="ator">
    <circle cx="150" cy="310" r="16"></circle>
    <line x1="150" y1="326" x2="150" y2="370"></line>
    <line x1="122" y1="342" x2="178" y2="342"></line>
    <line x1="150" y1="370" x2="128" y2="402"></line>
    <line x1="150" y1="370" x2="172" y2="402"></line>
  </g>
  <text x="150" y="426" class="ator-nome">Cidadão</text>

  <g class="ator">
    <circle cx="1490" cy="240" r="16"></circle>
    <line x1="1490" y1="256" x2="1490" y2="300"></line>
    <line x1="1462" y1="272" x2="1518" y2="272"></line>
    <line x1="1490" y1="300" x2="1468" y2="332"></line>
    <line x1="1490" y1="300" x2="1512" y2="332"></line>
  </g>
  <text x="1490" y="356" class="ator-nome">Técnico de</text>
  <text x="1490" y="372" class="ator-nome">Enfermagem</text>

  <g class="ator">
    <circle cx="1490" cy="590" r="16"></circle>
    <line x1="1490" y1="606" x2="1490" y2="650"></line>
    <line x1="1462" y1="622" x2="1518" y2="622"></line>
    <line x1="1490" y1="650" x2="1468" y2="682"></line>
    <line x1="1490" y1="650" x2="1512" y2="682"></line>
  </g>
  <text x="1490" y="706" class="ator-nome">Gestor da UBS</text>

  <g class="ator">
    <circle cx="1490" cy="810" r="16"></circle>
    <line x1="1490" y1="826" x2="1490" y2="870"></line>
    <line x1="1462" y1="842" x2="1518" y2="842"></line>
    <line x1="1490" y1="870" x2="1468" y2="902"></line>
    <line x1="1490" y1="870" x2="1512" y2="902"></line>
  </g>
  <text x="1490" y="926" class="ator-nome">Administrador</text>
  <text x="1490" y="942" class="ator-nome">do Sistema</text>

  <!-- ── Casos de uso: coluna Cidadão ── -->
  <g>
    <ellipse cx="540" cy="160" rx="110" ry="32" class="elipse"></ellipse>
    <text x="540" y="155" text-anchor="middle" class="uc-cod">UC-01</text>
    <text x="540" y="172" text-anchor="middle" class="uc-nome">Cadastrar/Autenticar</text>

    <ellipse cx="540" cy="260" rx="110" ry="32" class="elipse"></ellipse>
    <text x="540" y="250" text-anchor="middle" class="uc-cod">UC-02</text>
    <text x="540" y="265" text-anchor="middle" class="uc-nome">Visualizar Carteirinha</text>
    <text x="540" y="280" text-anchor="middle" class="uc-nome">Digital</text>

    <ellipse cx="540" cy="390" rx="110" ry="32" class="elipse"></ellipse>
    <text x="540" y="385" text-anchor="middle" class="uc-cod">UC-03</text>
    <text x="540" y="402" text-anchor="middle" class="uc-nome">Agendar Vacina</text>

    <ellipse cx="540" cy="500" rx="110" ry="32" class="elipse"></ellipse>
    <text x="540" y="495" text-anchor="middle" class="uc-cod">UC-06</text>
    <text x="540" y="512" text-anchor="middle" class="uc-nome">Buscar UBS Próxima</text>

    <ellipse cx="540" cy="600" rx="110" ry="32" class="elipse"></ellipse>
    <text x="540" y="595" text-anchor="middle" class="uc-cod">UC-07</text>
    <text x="540" y="612" text-anchor="middle" class="uc-nome">Receber Notificações</text>
  </g>

  <!-- ── Casos de uso: coluna central (extend/include) ── -->
  <g>
    <ellipse cx="850" cy="180" rx="112" ry="32" class="elipse"></ellipse>
    <text x="850" y="170" text-anchor="middle" class="uc-cod">UC-05</text>
    <text x="850" y="185" text-anchor="middle" class="uc-nome">Exportar Carteirinha</text>
    <text x="850" y="200" text-anchor="middle" class="uc-nome">PDF</text>

    <ellipse cx="850" cy="320" rx="112" ry="32" class="elipse"></ellipse>
    <text x="850" y="310" text-anchor="middle" class="uc-cod">UC-04</text>
    <text x="850" y="325" text-anchor="middle" class="uc-nome">Cancelar/Remarcar</text>
    <text x="850" y="340" text-anchor="middle" class="uc-nome">Agendamento</text>

    <ellipse cx="850" cy="460" rx="112" ry="32" class="elipse-inc"></ellipse>
    <text x="850" y="455" text-anchor="middle" class="uc-nome">Verificar Estoque</text>
    <text x="850" y="470" text-anchor="middle" class="uc-nome">da UBS</text>
  </g>

  <!-- ── Casos de uso: coluna direita ── -->
  <g>
    <ellipse cx="1160" cy="160" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="150" text-anchor="middle" class="uc-cod">UC-09</text>
    <text x="1160" y="165" text-anchor="middle" class="uc-nome">Consultar Agendamentos</text>
    <text x="1160" y="180" text-anchor="middle" class="uc-nome">do Dia</text>

    <ellipse cx="1160" cy="290" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="285" text-anchor="middle" class="uc-cod">UC-08</text>
    <text x="1160" y="302" text-anchor="middle" class="uc-nome">Registrar Vacinação</text>

    <ellipse cx="1160" cy="420" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="410" text-anchor="middle" class="uc-cod">UC-10</text>
    <text x="1160" y="425" text-anchor="middle" class="uc-nome">Buscar Paciente</text>
    <text x="1160" y="440" text-anchor="middle" class="uc-nome">por CPF</text>

    <ellipse cx="1160" cy="550" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="545" text-anchor="middle" class="uc-cod">UC-11</text>
    <text x="1160" y="562" text-anchor="middle" class="uc-nome">Controlar Estoque</text>

    <ellipse cx="1160" cy="650" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="640" text-anchor="middle" class="uc-cod">UC-12</text>
    <text x="1160" y="655" text-anchor="middle" class="uc-nome">Visualizar Relatórios</text>
    <text x="1160" y="670" text-anchor="middle" class="uc-nome">de Cobertura</text>

    <ellipse cx="1160" cy="750" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="740" text-anchor="middle" class="uc-cod">UC-13</text>
    <text x="1160" y="755" text-anchor="middle" class="uc-nome">Receber Alerta de</text>
    <text x="1160" y="770" text-anchor="middle" class="uc-nome">Estoque Crítico</text>

    <ellipse cx="1160" cy="870" rx="112" ry="32" class="elipse"></ellipse>
    <text x="1160" y="860" text-anchor="middle" class="uc-cod">UC-14</text>
    <text x="1160" y="875" text-anchor="middle" class="uc-nome">Gerenciar UBS</text>
    <text x="1160" y="890" text-anchor="middle" class="uc-nome">e Usuários</text>
  </g>

  <!-- ── Associações ator–caso ── -->
  <g class="assoc">
    <line x1="186" y1="330" x2="430" y2="170"></line>
    <line x1="186" y1="340" x2="430" y2="265"></line>
    <line x1="186" y1="355" x2="430" y2="390"></line>
    <line x1="186" y1="365" x2="430" y2="495"></line>
    <line x1="186" y1="375" x2="430" y2="595"></line>

    <line x1="1454" y1="270" x2="1272" y2="170"></line>
    <line x1="1454" y1="285" x2="1272" y2="290"></line>
    <line x1="1454" y1="300" x2="1272" y2="410"></line>

    <line x1="1454" y1="620" x2="1272" y2="555"></line>
    <line x1="1454" y1="630" x2="1272" y2="650"></line>
    <line x1="1454" y1="645" x2="1272" y2="745"></line>

    <line x1="1454" y1="850" x2="1272" y2="868"></line>
  </g>

  <!-- ── Dependências include / extend ── -->
  <g>
    <path class="dep" d="M745,210 L655,248"></path>
    <text x="700" y="218" class="estereotipo" text-anchor="middle">«extend»</text>

    <path class="dep" d="M742,343 L655,378"></path>
    <text x="698" y="350" class="estereotipo" text-anchor="middle">«extend»</text>

    <path class="dep" d="M648,408 L742,442"></path>
    <text x="695" y="440" class="estereotipo" text-anchor="middle">«include»</text>

    <path class="dep" d="M1160,192 L1160,258"></path>
    <text x="1168" y="230" class="estereotipo">«include»</text>

    <path class="dep" d="M1160,388 L1160,322"></path>
    <text x="1168" y="360" class="estereotipo">«include»</text>
  </g>
</svg>`;
