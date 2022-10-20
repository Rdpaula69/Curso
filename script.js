const textoEntrada = document.querySelector("#textoEntrada");
const textoSaida = document.querySelector("#textoSaida");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDescriptografar = document.querySelector("#btnDesencriptar");
const btnCopiar = document.querySelector("btnCopiar");
const aparece = document.querySelector('[data-aparece]');
const desaparece = document.querySelector('[data-desaparece]');
const chave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "o er"], ["u", "ufat"]];

function criptografar(stringAux) {
    for (let i = 0; i < chave.length; i++) {
        if (stringAux.includes(chave[i][0])) {
          stringAux = stringAux.replaceAll(chave[i][0], chave[i][1])
        }
    }
    return stringAux;
}

function descriptografar(stringAuxDescriptado) {
  for (let i = 0; i < chave.length; i++) {
    if (stringAuxDescriptado.includes(chave[i][1])) {
      stringAuxDescriptado = stringAuxDescriptado.replaceAll(chave[i][1], chave[i][0])
    }
  }
  return stringAuxDescriptado;
}

function mostraResultado() {
    aparece.style.display = 'flex';
    desaparece.style.display = 'none';
}

function escondeResultado() {
    aparece.style.display = 'none';
    desaparece.style.display = 'flex';
}

aparece.style.display = 'none';
btnEncriptar.onclick = (e) => {
    e.preventDefault();
    let textoEncriptado = criptografar(textoEntrada.value);
    textoSaida.value = textoEncriptado;
    textoEntrada.value = '';
    mostraResultado(); 
}

btnDescriptografar.onclick = (e) => {
    e.preventDefault();
    escondeResultado();
    

}