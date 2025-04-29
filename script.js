document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle(rotacao-botao)
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade. getAttribute ('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })

     const aumenteForteBotao = document.getElementById('aumentar-fonte');
     const diminuiForteBotao = document.getElementById('diminuir-forte');

    let tamanhoAtualForte = 1;
     aumenteForteBotao.addEventListener('click', function(){
        tamanhoAtualForte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualForte}rem'
     })
     diminuiForteBotao.addEventListener('click', function(){
        tamanhoAtualForte -= 0.1;
        document.body.style.fontSize = '$(tamanhoAtualForte}rem'
     })
    
})
