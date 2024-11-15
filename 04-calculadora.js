const display = document.querySelector (`#display`)

const botoes = document.querySelectorAll (`#botoes`)

const botoes_numericos = [...document.querySelectorAll (`.numerico`)]

const botao_operador = [...document.querySelectorAll (`.operador`)]

const botao_limpar = document.querySelector (`#botao_limpar`)

const botao_porcentagem = document.querySelector (`#botao_apagar`)

const botao_igual = document.querySelector (`#botao_igual`)

let resultado = document.querySelector (`.resultado`)



let sinal = false

let decimal = false

let operador_ativo = false



botoes_numericos.forEach ((el) => {

    el.addEventListener (`click`, (evt) => {

        sinal = false
        // Basicamente, a variável "sinal" ficará como "false" sempre que um botão numérico for pressionado; para mudar o sinal para "true", basta pressionar um botão operador!!

        if (evt.target.innerHTML === `.`) {

            if (!decimal) {

                decimal = true
                // Basicamente, a variável "decimal" será "true" quando a vírgula for pressionada, o que indica que outros valores serão adicionado após a vírgula!!

                if (display.innerHTML == `0`) {

                    display.innerHTML = `0.`

                } else {

                    display.innerHTML += evt.target.innerHTML

                }

                // O comando acima irá impedir que a vírgula seja repetida quando ela já estiver no display!!

            }

        } else {

            if (display.innerHTML == `0`) {

                display.innerHTML = ``

            }

            display.innerHTML += evt.target.innerHTML

        }

    })

})



botao_operador.forEach ((el) => {

    el.addEventListener (`click`, (evt) => {

        if (!sinal) {

            sinal = true
            // Nesse caso, a variável "sinal" ficará como "true" sempre que um botão operador for pressionado; para mudar o sinal para "false", basta pressionar um botão numérico!!

            decimal = false
            // Nesse caso, a variável "decimal" ficará como "true" para possibilitar o uso da vírgula após o uso de um operador!!

            if (evt.target.innerHTML == `x`) {

                display.innerHTML += `*`
                // O caso acima é o seguinte: se o botão "x" for pressionado, o sinal mostrado no display será o "*"!!

            } else {

                display.innerHTML += evt.target.innerHTML

            }

        }

    })

    operador_ativo = true

})



botao_igual.addEventListener (`click`, () => {

    if (display.innerHTML === `0`) {

        alert (`Por favor, adicione um valor..`)

    } else {

        sinal = false

        decimal = false

        resultado = eval (display.innerHTML)
        // Basicamente, a função "eval" faz todo o trabalho de cálculo automaticamente, ou seja, sem a necessidade de códigos operacionais!!

        display.innerHTML = resultado

    }

})



botao_apagar.addEventListener (`click`, () => {

    sinal = false

    decimal = false

    let numeroAtual = display.innerHTML

    if (numeroAtual !== `0`) {

        numeroAtual = numeroAtual.slice (0, -1)

        display.innerHTML =  numeroAtual || `0`

    }

})



botao_limpar.addEventListener (`click`, () => {

    sinal = false

    decimal = false

    display.innerHTML = `0`

    // Basicamente, quando o botão "Limpar" for pressionado, todos os valores digitados anteriormente serão substituidos pelo valor "0", além de permitir novamente o uso de botões numéricos e operadores!!

})