function tabuada () {

    const numero = document.querySelector (`#input_numero`)

    const select_tabuada = document.querySelector (`#select_tabuada`)



    if (numero.value.length == 0) {

        alert (`Digite um número, por favor..`)

    } else {

        let num = Number (numero.value)

        let calculo = 1

        select_tabuada.innerHTML = ``

        while (calculo <= 100) {

            const item = document.createElement (`option`)

            item.text = `${num} x ${calculo} = ${num * calculo}`

            item.value = `select_tabuada${calculo}`

            select_tabuada.appendChild (item)

            calculo++

        }

    }

}