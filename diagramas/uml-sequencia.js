/* UML 3.4 — Diagrama de Sequência — SVG injetável */
window.SVG_UML_SEQUENCIA = (function () {
  var LX = { cid: 130, app: 400, api: 680, bd: 960, not: 1220, tec: 1470 };
  var FUNDO = 1330;

  function msg(x1, x2, y, txt, dashed) {
    return '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" stroke="#16384F" stroke-width="1.5" '
      + (dashed ? 'stroke-dasharray="6 4" marker-end="url(#setaSeqA)"' : 'marker-end="url(#setaSeq)"') + '></line>'
      + '<text x="' + ((x1 + x2) / 2) + '" y="' + (y - 7) + '" text-anchor="middle" font-size="12.5" '
      + (dashed ? 'fill="#4A6478"' : 'font-weight="600" fill="#16384F"') + '>' + txt + '</text>';
  }
  function cab(x, nome) {
    return '<rect x="' + (x - 88) + '" y="46" width="176" height="40" rx="8" fill="#16384F"></rect>'
      + '<text x="' + x + '" y="71" text-anchor="middle" font-family="Sora, Arial" font-weight="600" font-size="13.5" fill="#FFFFFF">' + nome + '</text>';
  }
  function ator(x, nome, nome2) {
    var s = '<g stroke="#16384F" stroke-width="2" fill="none">'
      + '<circle cx="' + x + '" cy="22" r="10"></circle>'
      + '<line x1="' + x + '" y1="32" x2="' + x + '" y2="56"></line>'
      + '<line x1="' + (x - 15) + '" y1="40" x2="' + (x + 15) + '" y2="40"></line>'
      + '<line x1="' + x + '" y1="56" x2="' + (x - 13) + '" y2="74"></line>'
      + '<line x1="' + x + '" y1="56" x2="' + (x + 13) + '" y2="74"></line></g>';
    s += '<text x="' + x + '" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#16384F">' + nome + '</text>';
    if (nome2) s += '<text x="' + x + '" y="107" text-anchor="middle" font-size="13" font-weight="700" fill="#16384F">' + nome2 + '</text>';
    return s;
  }

  var svg = '<svg viewBox="0 0 1620 1400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif" font-size="13">';
  svg += '<defs>'
    + '<marker id="setaSeq" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16384F"></path></marker>'
    + '<marker id="setaSeqA" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto"><path d="M0,0 L10,5.5 L0,11" fill="none" stroke="#16384F" stroke-width="1.3"></path></marker>'
    + '</defs>';

  /* Lifelines */
  Object.keys(LX).forEach(function (k) {
    svg += '<line x1="' + LX[k] + '" y1="110" x2="' + LX[k] + '" y2="' + FUNDO + '" stroke="#9FB4C2" stroke-width="1.3" stroke-dasharray="5 5"></line>';
  });

  svg += ator(LX.cid, 'Cidadão');
  svg += cab(LX.app, ':App');
  svg += cab(LX.api, ':API Backend');
  svg += cab(LX.bd, ':BancoDeDados');
  svg += cab(LX.not, ':ServicoNotificacao');
  svg += ator(LX.tec, 'Técnico de', 'Enfermagem');

  /* ── Bloco 1: autenticação ── */
  svg += '<text x="60" y="150" font-family="Sora, Arial" font-weight="700" font-size="13.5" fill="#1E7A50">Autenticação</text>';
  svg += msg(LX.cid, LX.app, 175, 'login(cpf, senha)');
  svg += msg(LX.app, LX.api, 210, 'POST /auth');
  svg += msg(LX.api, LX.bd, 245, 'validarCredenciais()');
  svg += msg(LX.bd, LX.api, 280, 'tokenJWT', true);
  svg += msg(LX.api, LX.app, 315, '200 OK + token', true);
  svg += msg(LX.app, LX.cid, 350, 'exibe carteirinha e pendências', true);

  /* ── Bloco 2: busca de UBS ── */
  svg += '<text x="60" y="400" font-family="Sora, Arial" font-weight="700" font-size="13.5" fill="#1E7A50">Busca de UBS</text>';
  svg += msg(LX.cid, LX.app, 425, 'buscarUBS(vacina, localizacao)');
  svg += msg(LX.app, LX.api, 460, 'GET /ubs?vacina=DTP&amp;lat=…');
  svg += msg(LX.api, LX.bd, 495, 'consultarEstoque()');
  svg += msg(LX.bd, LX.api, 530, 'lista UBS disponíveis', true);
  svg += msg(LX.api, LX.app, 565, 'UBS com estoque confirmado', true);
  svg += msg(LX.app, LX.cid, 600, 'exibe lista e mapa', true);

  /* ── Bloco 3: agendamento ── */
  svg += '<text x="60" y="650" font-family="Sora, Arial" font-weight="700" font-size="13.5" fill="#1E7A50">Agendamento</text>';
  svg += msg(LX.cid, LX.app, 675, 'confirmarAgendamento(ubsId, data, hora)');
  svg += msg(LX.app, LX.api, 710, 'POST /agendamentos');
  svg += msg(LX.api, LX.bd, 745, 'criarAgendamento()');
  svg += msg(LX.bd, LX.api, 780, 'agendamentoId', true);
  svg += msg(LX.api, LX.not, 815, 'enviarConfirmacao(email, sms)');
  /* notificação volta ao cidadão */
  svg += '<path d="M' + LX.not + ',850 L' + LX.not + ',872 L' + LX.cid + ',872" stroke="#16384F" stroke-width="1.5" stroke-dasharray="6 4" fill="none" marker-end="url(#setaSeqA)"></path>';
  svg += '<text x="' + ((LX.not + LX.cid) / 2) + '" y="865" text-anchor="middle" font-size="12.5" fill="#4A6478">e-mail + SMS de confirmação</text>';

  /* ── Frame: Dia do atendimento ── */
  svg += '<rect x="50" y="905" width="1530" height="400" rx="10" fill="none" stroke="#16384F" stroke-width="1.8"></rect>';
  svg += '<path d="M50,905 L290,905 L290,925 L272,943 L50,943 Z" fill="#E8F0F6" stroke="#16384F" stroke-width="1.8"></path>';
  svg += '<text x="66" y="930" font-family="Sora, Arial" font-weight="700" font-size="13.5" fill="#16384F">Dia do atendimento</text>';

  svg += msg(LX.cid, LX.app, 985, 'checkIn(agendamentoId)');
  svg += msg(LX.app, LX.api, 1020, 'PATCH /agendamentos/:id/checkin');
  svg += msg(LX.tec, LX.app, 1060, 'registrarDose(pacienteId, vacina, lote, dose)');
  svg += msg(LX.app, LX.api, 1095, 'POST /doses');
  svg += msg(LX.api, LX.bd, 1130, 'gravarDose() · atualizarCarteirinha() · decrementarEstoque()');
  svg += msg(LX.bd, LX.api, 1170, 'ok', true);
  svg += msg(LX.api, LX.app, 1205, '201 Created', true);
  svg += msg(LX.app, LX.tec, 1245, '"vacinação registrada" ✓', true);

  svg += '</svg>';
  return svg;
})();
