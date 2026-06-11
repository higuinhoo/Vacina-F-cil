/* UML 3.3 — Diagrama de Atividades — SVG injetável */
window.SVG_UML_ATIVIDADES = (function () {
  function acao(cx, cy, txt, txt2) {
    var w = 210, h = 48;
    var s = '<rect x="' + (cx - w / 2) + '" y="' + (cy - h / 2) + '" width="' + w + '" height="' + h + '" rx="24" fill="#FFFFFF" stroke="#16384F" stroke-width="1.7"></rect>';
    if (txt2) {
      s += '<text x="' + cx + '" y="' + (cy - 3) + '" text-anchor="middle" font-size="13" font-weight="600" fill="#16384F">' + txt + '</text>';
      s += '<text x="' + cx + '" y="' + (cy + 14) + '" text-anchor="middle" font-size="13" font-weight="600" fill="#16384F">' + txt2 + '</text>';
    } else {
      s += '<text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-size="13" font-weight="600" fill="#16384F">' + txt + '</text>';
    }
    return s;
  }
  function decisao(cx, cy) {
    return '<path d="M' + (cx - 50) + ',' + cy + ' L' + cx + ',' + (cy - 30) + ' L' + (cx + 50) + ',' + cy + ' L' + cx + ',' + (cy + 30) + ' Z" fill="#E8F0F6" stroke="#16384F" stroke-width="1.7"></path>';
  }
  function fim(cx, cy) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="none" stroke="#16384F" stroke-width="2"></circle>'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="8" fill="#1E7A50"></circle>';
  }

  var svg = '<svg viewBox="0 0 1180 940" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif" font-size="13">';
  svg += '<defs><marker id="setaAT" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16384F"></path></marker></defs>';
  svg += '<style>.fl { stroke: #16384F; stroke-width: 1.6; fill: none; marker-end: url(#setaAT); } .guarda { font-size: 12px; font-weight: 700; fill: #1E7A50; } .nota { font-size: 11.5px; font-weight: 600; fill: #4A6478; }</style>';

  /* Partição: Dia do atendimento */
  svg += '<rect x="640" y="50" width="500" height="650" rx="12" fill="#F4F9F6" stroke="#9FB4C2" stroke-width="1.5" stroke-dasharray="8 5"></rect>';
  svg += '<text x="890" y="82" text-anchor="middle" font-family="Sora, Arial" font-weight="700" font-size="15" fill="#16384F">Dia do atendimento</text>';

  /* ── Coluna 1: agendamento ── */
  svg += '<circle cx="300" cy="64" r="9" fill="#16384F"></circle>';
  svg += acao(300, 123, 'Login');
  svg += acao(300, 203, 'Visualizar vacinas', 'pendentes');
  svg += decisao(300, 290);
  svg += '<text x="300" y="252" text-anchor="middle" class="guarda">[há pendentes?]</text>';
  svg += fim(470, 290);
  svg += '<text x="470" y="328" text-anchor="middle" class="nota">Calendário em dia</text>';
  svg += acao(300, 373, 'Selecionar vacina');
  svg += acao(300, 453, 'Buscar UBS disponíveis');
  svg += decisao(300, 540);
  svg += '<text x="392" y="525" class="guarda">[estoque confirmado?</text>';
  svg += '<text x="392" y="540" class="guarda">RN-003]</text>';
  svg += acao(300, 623, 'Selecionar data e horário');
  svg += acao(300, 703, 'Confirmar agendamento');
  svg += acao(300, 783, 'Enviar confirmação', '(RF-006)');

  svg += '<g class="fl">'
    + '<line x1="300" y1="73" x2="300" y2="99"></line>'
    + '<line x1="300" y1="147" x2="300" y2="179"></line>'
    + '<line x1="300" y1="227" x2="300" y2="260"></line>'
    + '<line x1="350" y1="290" x2="452" y2="290"></line>'
    + '<line x1="300" y1="320" x2="300" y2="349"></line>'
    + '<line x1="300" y1="397" x2="300" y2="429"></line>'
    + '<line x1="300" y1="477" x2="300" y2="510"></line>'
    + '<path d="M250,540 L160,540 L160,453 L195,453"></path>'
    + '<line x1="300" y1="570" x2="300" y2="599"></line>'
    + '<line x1="300" y1="647" x2="300" y2="679"></line>'
    + '<line x1="300" y1="727" x2="300" y2="759"></line>'
    + '<path d="M405,783 L560,783 L560,128 L675,128"></path>'
    + '</g>';
  svg += '<text x="362" y="282" class="guarda">[não]</text>';
  svg += '<text x="308" y="340" class="guarda">[sim]</text>';
  svg += '<text x="196" y="532" class="guarda">[não]</text>';
  svg += '<text x="308" y="592" class="guarda">[sim]</text>';

  /* ── Coluna 2: dia do atendimento ── */
  svg += acao(790, 128, 'Check-in na UBS');
  svg += acao(790, 218, 'Registrar vacinação', '(RF-010)');
  svg += acao(790, 308, 'Atualizar carteirinha', '(RF-011)');
  svg += acao(790, 398, 'Decrementar estoque', '(RF-012)');
  svg += decisao(790, 490);
  svg += '<text x="790" y="452" text-anchor="middle" class="guarda">[estoque crítico? RN-006]</text>';
  svg += acao(1010, 580, 'Alertar gestor');
  svg += fim(790, 620);
  svg += '<text x="790" y="658" text-anchor="middle" class="nota">Vacinação concluída</text>';

  svg += '<g class="fl">'
    + '<line x1="790" y1="152" x2="790" y2="194"></line>'
    + '<line x1="790" y1="242" x2="790" y2="284"></line>'
    + '<line x1="790" y1="332" x2="790" y2="374"></line>'
    + '<line x1="790" y1="422" x2="790" y2="460"></line>'
    + '<path d="M840,490 L1010,490 L1010,556"></path>'
    + '<line x1="790" y1="520" x2="790" y2="601"></line>'
    + '<path d="M1010,604 L1010,620 L809,620"></path>'
    + '</g>';
  svg += '<text x="852" y="482" class="guarda">[sim]</text>';
  svg += '<text x="798" y="548" class="guarda">[não]</text>';

  svg += '</svg>';
  return svg;
})();
