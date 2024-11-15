const div_data = document.querySelector (`#div_data`)

const div_mensagem = document.querySelector (`#div_mensagem`)

const voltar = document.querySelector (`#voltar`)



if (voltar) {

    voltar.addEventListener (`click`, () => {

    window.location.href='../index.html'

})

}





let data = new Date ()

let dia_atual = data.getDate ()

let mes_atual = data.getMonth ()

if (mes_atual < 12) {

    mes_atual = data.getMonth () + 1

}


dia_atual = dia_atual < 10 ? `0` + dia_atual : dia_atual

mes_atual = mes_atual < 10 ? `0` + dia_atual : mes_atual


const data_resumida = `${dia_atual}/${mes_atual}/${data.getFullYear ()}`


div_data.innerHTML = `Data de Hoje:<br/>- ${data_resumida}`



const relogio = () => {

    data = new Date ()
    // O comando acima irá carregar a DATA ATUAL!!


    let hora = data.getHours ()
    // O comando acima irá carregar as HORAS ATUAIS!!

    hora = hora < 10 ? `0` + hora : hora
    // O comando acima irá acrescentar um "0" em horas com apenas UM DÍGITO (ex: "1:00" será "01:00"; "2:00" será "02:00" etc..)!!

    
    let minuto = data.getMinutes ()
    // O comando acima irá carregar os MINUTOS ATUAIS!!

    minuto = minuto < 10 ? `0` + minuto : minuto
    // O comando acima irá acrescentar um "0" em minutos com apenas UM DÍGITO (ex: "10:5" será "10:05"; "11:1" será "11:01" etc..)!!


    let segundo = data.getSeconds ()
    // O comando acima irá carregar os SEGUNDOS ATUAIS!!

    segundo = segundo < 10 ? `0` + segundo : segundo
    // O comando acima irá acrescentar um "0" em segundos com apenas UM DÍGITO (ex: "10:00:1" será "10:00:01"; "11:10:5" será "11:10:05" etc..)!!


    const hora_completa = `${hora}:${minuto}:${segundo}`

    
    if (hora >= 0 && hora < 13) {

        div_mensagem.innerHTML = `Bom diaaa!!<br/>Agora são:<br/>- ${hora_completa}..`

    } else if (hora >= 13 && hora < 19) {

        div_mensagem.innerHTML = `Boa tardeee!!<br/>Agora são:<br/>- ${hora_completa}..`

    } else {

        div_mensagem.innerHTML = `Boa Noiteee!!<br/>Agora são:<br/>- ${hora_completa}..`

    }

}

let intervalo = setInterval (relogio, 1000)