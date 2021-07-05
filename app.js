const botonConvertir = document.getElementById("botonConvertir");

botonConvertir.addEventListener("click", function(){
    var cantidadDinero = document.getElementById("dinero").value;
    var divisaSeleccionada = document.getElementById("divisa-seleccionada").value;

    if (cantidadDinero != ""){
        var divisaCalcular = document.getElementById("divisa-calcular").value;
        var resultado;
        switch(divisaCalcular){
            case "euros":
                switch(divisaSeleccionada){
                    case "euros": 
                        resultado = cantidadDinero;
                        break;
                    case "dolares":
                        resultado = cantidadDinero * 1.19;
                        break;
                    case "libras": 
                        resultado = cantidadDinero * 0.86;
                        break;
                };
                break;

            case "dolares":
                switch(divisaSeleccionada){
                    case "euros":
                        resultado = cantidadDinero * 0.84;
                        break;
                    case "dolares": 
                        resultado = cantidadDinero;
                        break;
                    case "libras": 
                        resultado = cantidadDinero * 0.72;
                        break;
                };
                break;

            case "libras":
                switch(divisaSeleccionada){
                    case "euros": 
                        resultado = cantidadDinero * 1.17;
                        break;
                    case "dolares": 
                        resultado = cantidadDinero * 1.39;
                        break;
                    case "libras": 
                        resultado = cantidadDinero;
                        break;
                };
                break;
        }

        document.getElementById("resultado").innerHTML = cantidadDinero + " " + divisaSeleccionada + " son " + resultado + " " + divisaCalcular;
        
    } else {
        document.getElementById("resultado").innerHTML = "No has introducido ninguna cantidad";
    }
})