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
        let jornadaMensual=22*jornadaSemanal
        console.log(`<<< horas mensuales: ${jornadaMensual} >>>`);
        return jornadaMensual;
    };
    
   
    function valoresCategoria(vBasico){        
        console.log(vCategoria);
        let elegirCategoria = confirm(`El trabajador tiene categorìa "operaciones"?`);
        if (elegirCategoria){
            vCategoria.jornada = parseInt(prompt(`Ingresá la cantidad de horas semanales del trabajador`));
            vCategoria.basicoCategoria = vBasico/36*vCategoria.jornada
            vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(vCategoria);

            return vCategoria;   
        }
        else {
            vCategoria.jornada=48;            
            vCategoria.basicoCategoria = vBasico
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
        basico = parseFloat(prompt(`Ingresá el sueldo básico sobre el cuál se debe hacer el cálculo de los haberes`));
        console.log(`Basico: $${basico}`);
        basico=valoresCategoria(basico).basicoCategoria;
        console.log(`Basico: $${basico}`);
        return basico
    };

    function pedirAntiguedad(){
        let antiguedad = basico*parseInt(prompt(`Ingresá la antigüedad del trabajador`))/100;
        console.log(`Antigüedad: $${antiguedad}`);
        return antiguedad
    };

    function pedirPresentismo(){
        let presentismo=0;
        let cobraPresentismoPerfecto = confirm(`No tuvo faltas en el mes`);
        if (cobraPresentismoPerfecto){
            presentismo=basico*0.1;
            console.log(`Presentismo: $${presentismo}`);
            return presentismo
        } else {
            let cobraPresentismo = confirm(`Las faltas fueron justificadas?`);
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

    function pedirPuntualidad(){
        let puntualidad=0;
        let cobraPuntualidad = confirm(`No tuvo llegadas tarde en el mes`);
        if (cobraPuntualidad){
            puntualidad=basico*0.005;
            console.log(`Puntualidad: $${puntualidad}`);
            return puntualidad
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
        let extras50=parseInt(prompt(`Ingresá la cantidad de horas extras al 50%.\n  Si no trabajó horas extras al 50% ingrese 0`));
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

        let extras100=parseInt(prompt(`Ingresá la cantidad de horas extras al 50%.\n  Si no trabajó horas extras al 50% ingrese 0`));
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
    

    function calcularNetoRem(){
        let sumaNetoRem=0
        let valorBasico=pedirBasico();
        sumaNetoRem=sumaNetoRem+valorBasico;
        console.log (`Subtotal: $${sumaNetoRem}`);
        let valorAntiguedad= pedirAntiguedad();
        sumaNetoRem=sumaNetoRem+valorAntiguedad;
        console.log (`Subtotal: $${sumaNetoRem}`);
        let valorPresentismo = pedirPresentismo();
        sumaNetoRem=sumaNetoRem+valorPresentismo;
        console.log (`Subtotal: $${sumaNetoRem}`);
        let valorPuntualidad= pedirPuntualidad();
        sumaNetoRem=sumaNetoRem+valorPuntualidad;
        console.log (`Subtotal: $${sumaNetoRem}`);
        let valorExtras50 = pedirExtrasAlCincuenta();
        sumaNetoRem=sumaNetoRem+valorExtras50;
        console.log (`Subtotal: $${sumaNetoRem}`);
        let valorExtras100=pedirExtrasAlCien();
        sumaNetoRem=sumaNetoRem+valorExtras100;
        console.log (`Total Neto Remunerativo: $${sumaNetoRem}`);
        return sumaNetoRem;

    };

   /*  function calcularNetoNoRem(){
        //proximamente
    }; */

   /*  function calcularDescuentos(totalNetoRem){
        //proximamente                  
    }; */

    function calcularSueldo(){
        //let netoRem= alcularNetoRem();
        calcularNetoRem();
        //calcularNetoNoRem(); proximamente
        //calcularDescuentos(netoRem);
    };

    calcularSueldo();


    
       
        
    


        


}) // fin del Load