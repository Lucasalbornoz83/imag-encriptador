    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    /*Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

   function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }

    function encriptar(stringEncriptada){

        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        
      stringEncriptada = stringEncriptada.toLowerCase();


        for (let i=0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
            
        }
        return stringEncriptada;

    }


    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }



    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        } 
        return stringDesencriptada;
    }


    function btncopiar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }


    function copiarTexto() {
        // Obtener el textarea del mensaje
        var mensajeTextarea = document.querySelector('.mensaje');
    
        // Seleccionar el texto
        mensajeTextarea.select();
        mensajeTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
        // Copiar el texto al portapapeles
        document.execCommand("copy");
    
        // Borrar el contenido del textarea
        mensajeTextarea.value = "";
    
        
    }
    
    // Añadir el evento de clic al botón "Copiar"
    document.querySelector('.copiar').addEventListener('click', copiarTexto);



   

    