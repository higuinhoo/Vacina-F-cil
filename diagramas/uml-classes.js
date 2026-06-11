/* UML 3.2 — Diagrama de Classes (visão conceitual) — SVG injetável */
window.SVG_UML_CLASSES = (function () {
  function classe(x, y, w, nome, attrs) {
    var headerH = 36, linhaH = 21, padB = 10;
    var h = headerH + attrs.length * linhaH + padB;
    var s = '<g>';
    s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" fill="#FFFFFF" stroke="#16384F" stroke-width="1.8"></rect>';
    s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + headerH + '" rx="6" fill="#E6F5EE" stroke="#16384F" stroke-width="1.8"></rect>';
    s += '<rect x="' + x + '" y="' + (y + headerH - 8) + '" width="' + w + '" height="8" fill="#E6F5EE"></rect>';
    s += '<line x1="' + x + '" y1="' + (y + headerH) + '" x2="' + (x + w) + '" y2="' + (y + headerH) + '" stroke="#16384F" stroke-width="1.8"></line>';
    s += '<text x="' + (x + w / 2) + '" y="' + (y + 24) + '" text-anchor="middle" font-family="Sora, Arial" font-weight="700" font-size="14.5" fill="#16384F">' + nome + '</text>';
    attrs.forEach(function (a, i) {
      s += '<text x="' + (x + 14) + '" y="' + (y + headerH + 16 + i * linhaH) + '" font-size="13" fill="#16384F">− ' + a + '</text>';
    });
    s += '</g>';
    return s;
  }

  var svg = '<svg viewBox="0 0 1560 860" xmlns="http://www.w3.org/2000/svg" font-family="Inter, Arial, sans-serif">';
  svg += '<style>.rel { stroke: #4A6478; stroke-width: 1.6; fill: none; } .mult { font-size: 12.5px; font-weight: 700; fill: #1E7A50; }</style>';

  /* ── Relacionamentos (atrás das classes) ── */
  svg += '<g class="rel">'
    + '<line x1="320" y1="180" x2="470" y2="180"></line>'                       /* Cidadao—Agendamento */
    + '<path d="M320,230 L395,230 L395,485 L470,485"></path>'                    /* Cidadao—Dose */
    + '<line x1="205" y1="261" x2="205" y2="470"></line>'                        /* Cidadao—Notificacao */
    + '<path d="M585,228 L585,345 L870,345"></path>'                             /* Agendamento—Vacina */
    + '<line x1="700" y1="184" x2="1230" y2="184"></line>'                       /* Agendamento—UBS */
    + '<line x1="1345" y1="270" x2="1345" y2="450"></line>'                      /* UBS—EstoqueVacina */
    + '<path d="M1230,505 L985,505 L985,410"></path>'                            /* EstoqueVacina—Vacina */
    + '<path d="M700,470 L920,470 L920,410"></path>'                             /* Dose—Vacina */
    + '<line x1="585" y1="539" x2="585" y2="690"></line>'                        /* Dose—ProfissionalSaude */
    + '</g>';

  /* ── Multiplicidades ── */
  svg += '<g class="mult">'
    + '<text x="330" y="172">1</text><text x="438" y="172">0..*</text>'
    + '<text x="330" y="248">1</text><text x="430" y="477">0..*</text>'
    + '<text x="213" y="284">1</text><text x="213" y="462">0..*</text>'
    + '<text x="594" y="252">*</text><text x="838" y="337">1</text>'
    + '<text x="708" y="176">*</text><text x="1200" y="176">1</text>'
    + '<text x="1353" y="292">1</text><text x="1353" y="442">1..*</text>'
    + '<text x="1190" y="497">*</text><text x="994" y="432">1</text>'
    + '<text x="708" y="462">*</text><text x="928" y="432">1</text>'
    + '<text x="594" y="560">*</text><text x="594" y="682">1</text>'
    + '</g>';

  /* ── Classes ── */
  svg += classe(90, 110, 230, 'Cidadao', ['cpf', 'nome', 'dataNascimento', 'email', 'telefone']);
  svg += classe(470, 140, 230, 'Agendamento', ['dataHora', 'status']);
  svg += classe(870, 280, 230, 'Vacina', ['nome', 'fabricante', 'doencaAlvo', 'intervaloReforco']);
  svg += classe(470, 430, 230, 'Dose', ['dataAplicacao', 'lote', 'numeroDose']);
  svg += classe(1230, 140, 230, 'UBS', ['nome', 'endereco', 'latitude', 'longitude']);
  svg += classe(1230, 450, 230, 'EstoqueVacina', ['quantidadeAtual', 'nivelCritico', 'dataValidade']);
  svg += classe(470, 690, 230, 'ProfissionalSaude', ['nome', 'coren', 'perfil']);
  svg += classe(90, 470, 230, 'Notificacao', ['tipo', 'mensagem', 'canal', 'dataEnvio']);

  svg += '</svg>';
  return svg;
})();
