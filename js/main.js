"use strict"
window.addEventListener("load", function (){
    this.alert(`El proyecto cargó correctamente \nEste proyecto aun esta en desarrollo y no manipula el DOM\nPara ver como trabaja abrí la consola (F12)`);

    //Leer información ingresada por el usuario (Año, Mes, Categoria, Jornada, Asistencia, Antiguedad, Hs extras, Afiliaciones)


    let basico=0;   
    const vCategoria = {
        jornada:0,
        basicoCategoria:0,
        horasTotalesMes:0,
        valorHora:0
    };
    
    function calcularHorasMensuales(jornadaSemanal){
        let jornadaMensual=22*jornadaSemanal;
        console.log(`<<< horas mensuales: ${jornadaMensual} >>>`);
        return jornadaMensual;
    };
    
   
    function valoresCategoria(vBasico){        
        console.log(vCategoria);
        let elegirCategoria = confirm(`Si el trabajador tiene categorìa "operaciones" elija aceptar`);
        if (elegirCategoria){
            vCategoria.jornada = parseInt(prompt(`Ingrese la cantidad de horas semanales del trabajador\nEl valor debe ser entre 20 y 36hs`));
            vCategoria.basicoCategoria = vBasico/36*vCategoria.jornada;
            vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(vCategoria);

            return vCategoria;   
        }
        else {
            vCategoria.jornada=48;            
            vCategoria.basicoCategoria = vBasico;
            vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(vCategoria);
            return vCategoria;
        }
    };

    function pedirBasico(){
        /* definir la base de cálculo - a futuro esto haria una consulta a paritarias.JSON usando los datos de Año, Mes, Categorìa
        si la categoria es "operaciones" return basico=basico/39*jornada
        else return basico */
        basico = parseFloat(prompt(`Ingrese el sueldo básico mensual sobre el cuál se debe hacer el cálculo de los haberes`));
        console.log(`Basico: $${basico}`);
        basico=valoresCategoria(basico).basicoCategoria;
        console.log(`Basico: $${basico}`);
        return basico;
    };

    function pedirAntiguedad(){
        let antiguedad = basico*parseInt(prompt(`Ingresá la antigüedad del trabajador en años\n`))/100;
        console.log(`Antigüedad: $${antiguedad}`);
        return antiguedad;
    };

    function pedirPresentismo(basico, antiguedad, premios, extras50, extras100){
        let presentismo=0;
        let baseCalculo=basico+antiguedad+premios+extras50+extras100;
        let cobraPresentismoPerfecto = confirm(`Si no tuvo faltas en el mes elija aceptar`);
        if (cobraPresentismoPerfecto){
            presentismo=baseCalculo*0.1;
            console.log(`Presentismo: $${presentismo}`);
            return presentismo;
        } else {
            let cobraPresentismo = confirm(`Si todas las faltas fueron justificadas elija aceptar`);
            if (cobraPresentismo){
            presentismo=basico*0.06;
            console.log(`Presentismo: $${presentismo}`);
            return presentismo}
            else {
                console.log(`Presentismo: $${presentismo}`);
                return presentismo;
            }
        }
    };

    function pedirPuntualidad(basico, antiguedad, premios, extras50, extras100){
        let puntualidad=0;
        let baseCalculo=basico+antiguedad+premios+extras50+extras100;
        let cobraPuntualidad = confirm(`Si no tuvo llegadas tarde en el mes elija aceptar`);
        if (cobraPuntualidad){
            puntualidad=baseCalculo*0.005;
            console.log(`Puntualidad: $${puntualidad}`);
            return puntualidad;
        } else {
            console.log(`Puntualidad: $${puntualidad}`);
            return puntualidad;
        }
    };

    function calcularValorHora(basico, horasMensuales){
        let valorHora=basico/horasMensuales;
        console.log(`<<< Valor de la hora: $${valorHora} >>>`);
        return  valorHora;
    };
    

    function pedirExtrasAlCincuenta(){
        let valorExtras50=vCategoria.valorHora*1.5;    
        let extras50=parseInt(prompt(`Ingrese la cantidad de horas extras al 50%.\n  Si no trabajó horas extras al 50% ingrese 0`));
        if (extras50!==0){           
            console.log(`<<<<< valor de la hora: $${vCategoria.valorHora} >>>`);
            console.log(`<<<<< valor de la hora Extras 50%: $${valorExtras50} >>>`);
            console.log(`Horas Extras 50%: ${extras50*valorExtras50} `);
            return extras50=extras50*valorExtras50;
        } else {
            console.log(`Horas Extras 50%: $${extras50}`);
            return extras50;
        } 
    };

    function pedirExtrasAlCien(){
        let valorExtras100=vCategoria.valorHora*2;

        let extras100=parseInt(prompt(`Ingrese la cantidad de horas extras al 100%.\n  Si no trabajó horas extras al 100% ingrese 0`));
        if (extras100!==0){           
            console.log(`<<< valor de la hora: $${vCategoria.valorHora} >>>`);
            console.log(`<<< valor de la hora Extras 100%: $${valorExtras100} >>>`);
            console.log(`Horas Extras 100%: ${extras100*valorExtras100} `);
            return extras100=extras100*valorExtras100;
        } else {
            console.log(`Horas Extras 50%: $${extras100}`);
            return extras100;
        } 
    };
    
    function pedirPremiosyComisiones(){
        let premios=0;       
        let cobraPremios = confirm(`Si el trabajador cobra premios o comisiones en este mes elija aceptar`);
        if (cobraPremios){
            premios =parseFloat(prompt(`Ingrese el importe neto en concepto de premios y comisiones para esta liquidación`));
            console.log(`Premiosy comisiones: $${premios}`);
            return premios;
        } else {
            console.log(`Premiosy comisiones: $${premios}`);
            return premios;
        }
    };
    

    function calcularBrutoRem(){
        let sumaBrutoRem=0;
        let valorBasico=pedirBasico();
        sumaBrutoRem=sumaBrutoRem+valorBasico;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`);
        let valorAntiguedad= pedirAntiguedad();
        sumaBrutoRem=sumaBrutoRem+valorAntiguedad;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`);
        let valorPremios=pedirPremiosyComisiones();
        sumaBrutoRem=sumaBrutoRem+valorPremios;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`);
        
        let valorExtras50 = pedirExtrasAlCincuenta();
        sumaBrutoRem=sumaBrutoRem+valorExtras50;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`);
        let valorExtras100=pedirExtrasAlCien();
        sumaBrutoRem=sumaBrutoRem+valorExtras100;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`);

        let valorPresentismo = pedirPresentismo(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100);// el presentismo se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
        sumaBrutoRem=sumaBrutoRem+valorPresentismo;
        console.log (`Subtotal bruto: $${sumaBrutoRem}`); 
        let valorPuntualidad= pedirPuntualidad(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100); // la puntualidad  se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
        sumaBrutoRem=sumaBrutoRem+valorPuntualidad;
        
        console.log (`Total bruto Remunerativo: $${sumaBrutoRem}`);
        alert(`El total bruto es $${sumaBrutoRem}`);
        return sumaBrutoRem;

    };

   /*  function calcularBrutoNoRem(){
        //proximamente
    }; */
   

    function calcularDescuentos(totalBrutoRem){
        let sumaDescuentos=0;
        let jubilacion=totalBrutoRem*0.11;
        console.log(`valor jubilacion: $${jubilacion}`);
        sumaDescuentos+=jubilacion;
        console.log (`Subtotal descuentos: $${sumaDescuentos}`);  
        let leyINSSJP=totalBrutoRem*0.03;
        console.log(`valor INSSJP: $${leyINSSJP}`);
        sumaDescuentos+=leyINSSJP;
        console.log (`Subtotal descuentos: $${sumaDescuentos}`);   
        let obraSocial=totalBrutoRem*0.03;
        console.log(`valor obra Social: $${obraSocial}`);
        sumaDescuentos+=obraSocial;
        console.log (`Subtotal descuentos: $${sumaDescuentos}`);  
        let aporteSolidarioGremio=totalBrutoRem*0.025; //verificar valor con delegados   
        console.log(`valor aporte Solidario Gremio: $${aporteSolidarioGremio}`);
        sumaDescuentos+=aporteSolidarioGremio;
        console.log (`Total descuentos: $${sumaDescuentos}`);  
        alert(`El total de descuentos es $${sumaDescuentos}`);
        return sumaDescuentos;           
    }; 

    function calcularSueldo(){
        let brutoRem= calcularBrutoRem();
        //calcularBrutoNoRem(); proximamente
        let descuentos = calcularDescuentos(brutoRem);
        let haberesNetos = brutoRem - descuentos;
        console.log (`Total de bolsillo: $${haberesNetos}`); 
        alert(`Los haberes netos a depositar son : $${haberesNetos}`);
        return haberesNetos;
    };

    calcularSueldo();
    
}) // fin del Load