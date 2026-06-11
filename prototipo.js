/* VacinaFácil — Entrega 1: lógica de navegação (dados 100% hardcoded, sem chamadas externas) */
(function () {
  'use strict';

  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  /* ───── Toast ───── */
  function toast(msg) {
    var area = $('#toast-area');
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    area.appendChild(el);
    setTimeout(function () { el.style.opacity = '0'; el.style.transition = 'opacity 0.3s'; }, 2800);
    setTimeout(function () { area.removeChild(el); }, 3200);
  }

  /* ───── Seletor de perfil ───── */
  $$('.vf-seg button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $$('.vf-seg button').forEach(function (b) { b.classList.remove('ativo'); });
      btn.classList.add('ativo');
      $$('.perfil').forEach(function (p) { p.classList.remove('ativo'); });
      $('#perfil-' + btn.dataset.perfil).classList.add('ativo');
    });
  });

  /* ───── Navegação entre telas do cidadão ───── */
  function mostrarTela(id) {
    $$('#perfil-cidadao .tela').forEach(function (t) { t.classList.remove('ativa'); });
    var tela = $('#' + id);
    tela.classList.add('ativa');
    tela.scrollTop = 0;
    if (id === 'tela-04') reiniciarCheck();
  }

  function reiniciarCheck() {
    var circ = $('.check-circulo');
    var traco = $('.check-traco');
    circ.style.animation = 'none';
    traco.style.animation = 'none';
    void circ.offsetWidth;
    circ.style.animation = '';
    traco.style.animation = '';
  }

  /* Tela-01 Login */
  $('#btn-entrar').addEventListener('click', function () {
    var cpfOk = $('#cpf').value.trim() !== '';
    var senhaOk = $('#senha').value.trim() !== '';
    $('#erro-cpf').classList.toggle('visivel', !cpfOk);
    $('#erro-senha').classList.toggle('visivel', !senhaOk);
    if (cpfOk && senhaOk) mostrarTela('tela-02');
  });
  $('#btn-govbr').addEventListener('click', function () { mostrarTela('tela-02'); });
  $('#link-cadastro').addEventListener('click', function () {
    $('#aviso-cadastro').classList.add('visivel');
  });

  /* Tela-02 Carteirinha */
  $$('.aba').forEach(function (aba) {
    aba.addEventListener('click', function () {
      $$('.aba').forEach(function (a) { a.classList.remove('ativa'); });
      aba.classList.add('ativa');
      var soPendentes = aba.dataset.aba === 'pendentes';
      $$('#vac-lista .vac-item').forEach(function (item) {
        item.classList.toggle('oculta', soPendentes && item.dataset.status === 'ok');
      });
    });
  });
  $('#btn-pdf').addEventListener('click', function () { toast('Carteirinha exportada em PDF (RF-020).'); });
  $('#fab-agendar').addEventListener('click', function () { mostrarTela('tela-03'); });
  $('#nav-agendar').addEventListener('click', function () { mostrarTela('tela-03'); });

  /* Tela-03 Agendamento — estado da seleção */
  var selecao = {
    vacina: 'DTP 1º reforço',
    ubs: 'UBS Jardim Esperança',
    data: 'Sex, 12/06',
    hora: '10:30'
  };

  function irPasso(n) {
    [1, 2, 3].forEach(function (i) {
      $('#passo-' + i).classList.toggle('ativo', i === n);
      var ind = $('#ind-' + i);
      ind.classList.toggle('ativo', i === n);
      ind.classList.toggle('feito', i < n);
    });
    $('#tela-03').scrollTop = 0;
  }

  $$('.vacina-card').forEach(function (card) {
    card.addEventListener('click', function () {
      $$('.vacina-card').forEach(function (c) { c.classList.remove('selecionado'); });
      card.classList.add('selecionado');
      selecao.vacina = card.dataset.vacina;
    });
  });
  $$('.ubs-item:not([disabled])').forEach(function (item) {
    item.addEventListener('click', function () {
      $$('.ubs-item').forEach(function (u) { u.classList.remove('selecionado'); });
      item.classList.add('selecionado');
      selecao.ubs = item.dataset.ubs;
    });
  });
  $$('#chips-data .chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      $$('#chips-data .chip').forEach(function (c) { c.classList.remove('selecionado'); });
      chip.classList.add('selecionado');
      selecao.data = chip.dataset.data;
    });
  });
  $$('#grade-horarios .hora:not([disabled])').forEach(function (h) {
    h.addEventListener('click', function () {
      $$('#grade-horarios .hora').forEach(function (x) { x.classList.remove('selecionado'); });
      h.classList.add('selecionado');
      selecao.hora = h.dataset.hora;
    });
  });

  $('#btn-passo2').addEventListener('click', function () { irPasso(2); });
  $('#btn-passo3').addEventListener('click', function () {
    $('#res-vacina').textContent = selecao.vacina;
    $('#res-ubs').textContent = selecao.ubs;
    $('#res-data').textContent = selecao.data;
    $('#res-hora').textContent = selecao.hora;
    irPasso(3);
  });
  $('#ag-voltar').addEventListener('click', function () {
    mostrarTela('tela-02');
    irPasso(1);
  });
  $('#btn-confirmar').addEventListener('click', function () {
    $('#conf-vacina').textContent = selecao.vacina;
    $('#conf-ubs').textContent = selecao.ubs;
    $('#conf-data').textContent = selecao.data;
    $('#conf-hora').textContent = selecao.hora;
    mostrarTela('tela-04');
  });

  /* Tela-04 Confirmação */
  $('#btn-calendario').addEventListener('click', function () { toast('Adicionado ao calendário.'); });
  $('#btn-voltar-inicio').addEventListener('click', function () {
    mostrarTela('tela-02');
    irPasso(1);
  });

  /* ───── Tela-05 Painel do Técnico ───── */
  $('#busca-paciente').addEventListener('input', function () {
    var termo = this.value.trim().toLowerCase();
    var visiveis = 0;
    $$('#agenda-lista .agenda-item').forEach(function (item) {
      var corresponde = termo === '' || item.dataset.busca.indexOf(termo) !== -1;
      item.style.display = corresponde ? '' : 'none';
      if (corresponde) visiveis++;
    });
    $('#sem-resultado').style.display = visiveis === 0 ? 'block' : 'none';
  });

  var botaoAtual = null;
  $$('#agenda-lista .btn-registrar:not([disabled])').forEach(function (btn) {
    btn.addEventListener('click', function () {
      botaoAtual = btn;
      $('#modal-paciente').textContent = 'Paciente: ' + btn.dataset.paciente;
      $('#modal-vacina').value = btn.dataset.vacina;
      $('#modal-lote').value = '';
      $('#modal-dose').value = '';
      $('#erro-lote').classList.remove('visivel');
      $('#erro-dose').classList.remove('visivel');
      $('#modal-fundo').classList.add('aberto');
    });
  });
  $('#modal-cancelar').addEventListener('click', function () {
    $('#modal-fundo').classList.remove('aberto');
  });
  $('#modal-fundo').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('aberto');
  });
  $('#modal-salvar').addEventListener('click', function () {
    var loteOk = $('#modal-lote').value.trim() !== '';
    var doseOk = $('#modal-dose').value !== '';
    $('#erro-lote').classList.toggle('visivel', !loteOk);
    $('#erro-dose').classList.toggle('visivel', !doseOk);
    if (!loteOk || !doseOk) return;
    $('#modal-fundo').classList.remove('aberto');
    if (botaoAtual) {
      botaoAtual.textContent = '✓ Concluído';
      botaoAtual.disabled = true;
      botaoAtual.closest('.agenda-item').classList.add('concluido');
      botaoAtual = null;
      var c = $('#m-concluidos'), p = $('#m-pendentes');
      c.textContent = parseInt(c.textContent, 10) + 1;
      p.textContent = Math.max(0, parseInt(p.textContent, 10) - 1);
    }
    toast('(RF-011/RF-012) Carteirinha atualizada · estoque decrementado.');
  });

  /* ───── Tela-06 Dashboard do Gestor ───── */
  $('#btn-relatorio').addEventListener('click', function () {
    toast('(RN-010) Relatório com dados anonimizados gerado com sucesso.');
  });
})();
