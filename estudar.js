function podeEstudar(concluiuInsinoMedio,idade,cursandoOutraFaculdade){
    return concluiuInsinoMedio &&idade>=18 &&!cursandoOutraFaculdade}

    let concluiuInsinoMedio = true
    let idade = 22
    let cursandoOutraFaculdade = false

    let resultado = podeEstudar(concluiuInsinoMedio,idade,cursandoOutraFaculdade)

    if(resultado){
        console.log("vc pode entrar na faculdade")
    }
    else{
        console.log("vc não pode entrar na falculdade")

    }