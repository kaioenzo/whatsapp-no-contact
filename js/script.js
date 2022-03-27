document.getElementById('enviar').onclick = () => {
    let { telefone, texto } = telefoneFiltrado();
    let url = `https://api.whatsapp.com/send?phone=55${telefone}&text=${texto}`
    if (telefone!="") {
        console.log(url)
        window.open(url)
    }else if(telefone=="") {
        alert('Digite um telefone válido!')
    }

    function telefoneFiltrado() {
        let telefone = document.getElementById('telefone').value;
        let texto = document.getElementById('texto').value;
        let regex=/(\s|\-|[a-z])/g;
        const telefoneFiltrado = telefone.replace(regex, ''); 
        const textoAjustado = telefoneFiltrado;
        telefone = textoAjustado;

        return { telefone, texto };
    
        
    }
}

