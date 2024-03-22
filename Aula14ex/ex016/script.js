function contar() {
    var ini = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.legth == 0){
        res.innerHTML = ('IMPOSSIVEL CONTAR!')
        // alert ('[Erro} Faltam Dados!')
    } else {
        res.innerHTML = ('Contando ... <br>')
        var i = Number (ini.value)
        var f = Number (fim.value)
        var p = Number (passo.value)

        if ( p <= 0) {
            alert ('Passo Inválido! considerando  PASSO 1')
            p = 1
        }

        if ( i < f){
            for (let c = i; c <= f; c+= p){
                res.innerHTML += (` ${c} \u{1F449}`)
            }
            // CONTAGEM CRESCENTE
        } else{
            for (let c = i; c >= f; c-= p){
                res.innerHTML += (` ${c} \u{1F449}`)
            } 
            // CONTAGEM REGRESSIVA
        }
    res.innerHTML += (`\u{1F3C1}`)
    }
}