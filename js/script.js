document.getElementById('enviar').onclick = () => {
    let { telefone, texto } = telefoneFiltrado();
    let url = `https://api.whatsapp.com/send?phone=55${telefone}&text=${texto}`
    if (telefone!="") {
        window.open(url)
    }else if(telefone=="") {
        alert('Digite um telefone válido!')
    }

    function telefoneFiltrado() {
        let telefone = document.getElementById('telefone').value;
        let texto = document.getElementById('texto').value;
        let regex=/(\s|\-|[a-z])/g;
        const caracterInesperado = regex.test(telefone)
        if(telefone==""){
            alert(alertaVazio())
        }
        else if (caracterInesperado==true) {
            alert(alertaErro());
        }else{
        const telefoneFiltrado = telefone.replace(regex, ''); 
        const textoAjustado = telefoneFiltrado;
        telefone = textoAjustado;

        return { telefone, texto };}

        function alertaErro() {
            return 'Digite um telefone válido no formato (DDD)9xxxx-xxxx!';
        }
        function alertaVazio() {
            return 'Digite um telefone!';
        }
    }
}

