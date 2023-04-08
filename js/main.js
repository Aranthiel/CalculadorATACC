"use strict"
window.addEventListener("load", function (){
    alert(`El proyecto cargó correctamente \nEste proyecto aun esta en desarrollo y no manipula el DOM\nPara ver como trabaja abrí la consola (F12)`);
/* 
    fetch('../paritarias.json')

        .then(response => response.json())

        .then(datos => {
            console.log("fetch");
            console.log(datos.paritarias["2020"]["Diciembre"]["Categoría 2 Administrativo"]["no remunerativo"]) //5000
            console.log("datos");
            console.log (datos);
            console.log(datos.paritarias["2020"]);
            // 
        });
 */

///////////////////////////////////// DOM /////////////////////////////////////////////////////

let years=[2020,2021,2022,2023];  // deberia mapear el Json
let month2020=["Octubre", "Noviembre", "Diciembre"]; // deberia traer el JSON para el año 2020
let month2021=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let month2022=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let month2023=["Enero", "Febrero", "Marzo", "Abril"]

const selectAnio=document.querySelector("#anioSelect");
const selectMes=document.querySelector("#mesSelect");

function agregarOpcionSelect(opcion, selector){
    const option = document.createElement('option');
    const valor = opcion;
    option.value = valor;
    option.text = valor;
    selector.appendChild(option);
};

years.forEach(anio => agregarOpcionSelect(anio, selectAnio));
month2023.forEach(mes => agregarOpcionSelect(mes, selectMes));

const selectAntiguedad= document.querySelector("#antiguedadSelect");
const SelectDiasLicencia = document.querySelector("#diasLicenciaSelect");
const SelectExtras50 = document.querySelector("#hsExtra50Select");
const SelectExtras100 = document.querySelector("#hsExtra100Select");

function agregarOpcionSelectHasta(cantidad, selector){
    for ( var i=0; i<=(cantidad); i++){
        const option = document.createElement('option');    
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}
agregarOpcionSelectHasta((65-16), selectAntiguedad);
agregarOpcionSelectHasta((31), SelectDiasLicencia);
agregarOpcionSelectHasta((30), SelectExtras50);
agregarOpcionSelectHasta((30), SelectExtras100);


// let opcionAnio revisa que opcion de año es la seleccionada
//let mesesDisponibles = `month${opcionAnio}`  deberia dar como resultado una concatenacion "month2023"
//mesesDisponibles.forEach(mes => agregarOpcionSelect(mes, selectMes));


//////////////////////////////////////// FUNCIONES //////////////////////////////////////////////

    //Leer información ingresada por el usuario (Año, Mes, Categoria, Jornada, Asistencia, Antiguedad, Hs extras, Afiliaciones)


    let basico=0;   // declara e inicia la variable basico con valor 0
    const vCategoria = { // declara un objeto que contiene los valores de la categoria  necesarios para los calculos posteriores
        jornada:0,
        basicoCategoria:0,
        horasTotalesMes:0,
        valorHora:0
    };
    
    function calcularHorasMensuales(jornadaSemanal){ // se calcula la cantidad de horas mensuales para poder calcular el valor de la hora. considera que el mes tien 4 semanas
        let jornadaMensual=4*jornadaSemanal;
        console.log(`<<< horas mensuales: ${jornadaMensual} >>>`);
        r_1_1.innerHTML= `<p>${jornadaMensual}</p>`;
        return jornadaMensual;
    };
    
    
    function valoresCategoria(vBasico){  // establece los valores de la categoria necesarios para los calculos posteriores
        console.log(vCategoria);
        let esOperaciones = confirm(`Si el trabajador tiene categorìa "operaciones" elija aceptar`); //valor booleano que define si es necesario realizar un calculo por la proporcionaleidad de las hs o no
        if (esOperaciones){
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
        /* definir la base de cálculo - a futuro esto haria una consulta a paritarias.JSON usando los datos de Año, Mes, Categorìa */
        
        basico = parseFloat(prompt(`Ingrese el sueldo básico mensual sobre el cuál se debe hacer el cálculo de los haberes`));
        console.log(`Basico: $${basico.toFixed(2)}`);
        basico=valoresCategoria(basico).basicoCategoria;
        console.log(`Basico: $${basico.toFixed(2)}`);
        r_1_3.innerHTML= `<p>${basico.toFixed(2)}</p>`;
        return basico;
    };

    function pedirAntiguedad(){
        let aniosAntiguedad = parseInt(prompt(`Ingresá la antigüedad del trabajador en años\n`));
        let antiguedad = basico*aniosAntiguedad/100;
        console.log(`Antigüedad: $${antiguedad.toFixed(2)}`);
        r_2_1.innerHTML= `<p>${aniosAntiguedad}</p>`;
        r_2_2.innerHTML= `<p>${basico/100}</p>`;
        r_2_3.innerHTML= `<p>${antiguedad}</p>`;
        return antiguedad;
    };

    function pedirPresentismo(basico, antiguedad, premios, extras50, extras100){
        let presentismo=0;
        let baseCalculo=basico+antiguedad+premios+extras50+extras100;
        let cobraPresentismoPerfecto = confirm(`Si no tuvo faltas en el mes elija aceptar`);
        if (cobraPresentismoPerfecto){
            presentismo=baseCalculo*0.1;
            console.log(`Presentismo: $${presentismo.toFixed(2)}`);
            r_3_1.innerHTML=`<p> 10% </p>`
            r_3_3.innerHTML=`<p>${presentismo.toFixed(2)}</p>`
            return presentismo;
        } else {
            let cobraPresentismo = confirm(`Si todas las faltas fueron justificadas elija aceptar`);
            if (cobraPresentismo){
            presentismo=basico*0.06;
            console.log(`Presentismo: $${presentismo.toFixed(2)}`);
            r_3_1.innerHTML=`<p> 6% </p>`
            r_3_3.innerHTML=`<p>${presentismo.toFixed(2)}</p>`
            return presentismo}
            else {
                console.log(`Presentismo: $${presentismo.toFixed(2)}`);
                r_3_1.innerHTML=`<p> 0% </p>`
                r_3_3.innerHTML=`<p>${presentismo.toFixed(2)}</p>`
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
            console.log(`Puntualidad: $${puntualidad.toFixed(2)}`);
            r_4_1.innerHTML=`<p> 0.5% </p>`
            r_4_3.innerHTML=`<p>${puntualidad.toFixed(2)}</p>`
            
            
            return puntualidad;
        } else {
            console.log(`Puntualidad: $${puntualidad.toFixed(2)}`);
            r_4_1.innerHTML=`<p> 0% </p>`
            r_4_3.innerHTML=`<p>${puntualidad.toFixed(2)}</p>`
            
            
            return puntualidad;
        }
    };

    function calcularValorHora(basico, horasMensuales){
        let valorHora=basico/horasMensuales;
        console.log(`<<< Valor de la hora: $${valorHora.toFixed(2)} >>>`);
        r_1_2.innerHTML= `<p>${valorHora.toFixed(2)}</p>`;
        return  valorHora;
    };
    

    function pedirExtrasAlCincuenta(){
        let valorExtras50=vCategoria.valorHora*1.5;  
        let totalExtras50=0  
        let extras50=parseInt(prompt(`Ingrese la cantidad de horas extras al 50%.\n  Si no trabajó horas extras al 50% ingrese 0`));
        if (extras50!==0){           
            console.log(`<<<<< valor de la hora: $${vCategoria.valorHora} >>>`);
            console.log(`<<<<< valor de la hora Extras 50%: $${valorExtras50} >>>`);
            totalExtras50= extras50*valorExtras50;
            r_5_1.innerHTML=`<p>${extras50}</p>`;
            r_5_2.innerHTML=`<p>${valorExtras50.toFixed(2)}</p>`;
            r_5_3.innerHTML=`<p>${totalExtras50.toFixed(2)}</p>`;
            console.log(`Horas Extras 50%: ${totalExtras50} `);
            return totalExtras50;
        } else {
            console.log(`Horas Extras 50%: $${extras50.toFixed(2)}`);
            r_5_1.innerHTML=`<p>${extras50}</p>`;
            r_5_2.innerHTML=`<p>${valorExtras50.toFixed(2)}</p>`;
            r_5_3.innerHTML=`<p>${(valorExtras50*extras50).toFixed(2)}</p>`;
            console.log(`Horas Extras 50%: ${extras50*valorExtras50} `);
            return extras50;
        } 
    };

    function pedirExtrasAlCien(){
        let valorExtras100=vCategoria.valorHora*2;
        let totalExtras100=0;
        let extras100=parseInt(prompt(`Ingrese la cantidad de horas extras al 100%.\n  Si no trabajó horas extras al 100% ingrese 0`));
        if (extras100!==0){           
            console.log(`<<< valor de la hora: $${vCategoria.valorHora} >>>`);
            console.log(`<<< valor de la hora Extras 100%: $${valorExtras100} >>>`);
            totalExtras100= extras100*valorExtras100;
            r_6_1.innerHTML=`<p>${extras100}</p>`;
            r_6_2.innerHTML=`<p>${valorExtras100.toFixed(2)}</p>`;
            r_6_3.innerHTML=`<p>${(totalExtras100).toFixed(2)}</p>`;
            console.log(`Horas Extras 100%: ${totalExtras100} `);
            return totalExtras100;
        } else {
            console.log(`Horas Extras 50%: $${extras100.toFixed(2)}`);
            r_6_1.innerHTML=`<p>${extras100}</p>`;
            r_6_2.innerHTML=`<p>${valorExtras100.toFixed(2)}</p>`;
            r_6_3.innerHTML=`<p>${(valorExtras100*extras100).toFixed(2)}</p>`;
            return totalExtras100;
        } 
    };
    
    function pedirPremiosyComisiones(){
        let premios=0;       
        let cobraPremios = confirm(`Si el trabajador cobra premios o comisiones en este mes elija aceptar`);
        if (cobraPremios){
            premios =parseFloat(prompt(`Ingrese el importe neto en concepto de premios y comisiones para esta liquidación`));
            console.log(`Premiosy comisiones: $${premios.toFixed(2)}`);
            r_7_3.innerHTML= `<p>${premios.toFixed(2)}</p>`;
            return premios;
        } else {
            console.log(`Premiosy comisiones: $${premios.toFixed(2)}`);
            r_7_3.innerHTML= `<p>${premios.toFixed(2)}</p>`;
            return premios;
        }
    };
    

    function calcularBrutoRem(){
        let sumaBrutoRem=0;
        let valorBasico=pedirBasico();
        sumaBrutoRem=sumaBrutoRem+valorBasico;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);
        let valorAntiguedad= pedirAntiguedad();
        sumaBrutoRem=sumaBrutoRem+valorAntiguedad;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);
        let valorPremios=pedirPremiosyComisiones();
        sumaBrutoRem=sumaBrutoRem+valorPremios;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);
        
        let valorExtras50 = pedirExtrasAlCincuenta();
        sumaBrutoRem=sumaBrutoRem+valorExtras50;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);
        let valorExtras100=pedirExtrasAlCien();
        sumaBrutoRem=sumaBrutoRem+valorExtras100;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);

        let valorPresentismo = pedirPresentismo(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100);// el presentismo se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
        sumaBrutoRem=sumaBrutoRem+valorPresentismo;
        console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`); 
        let valorPuntualidad= pedirPuntualidad(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100); // la puntualidad  se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
        sumaBrutoRem=sumaBrutoRem+valorPuntualidad;
        
        console.log (`Total bruto Remunerativo: $${sumaBrutoRem.toFixed(2)}`);
        alert(`El total bruto es $${sumaBrutoRem.toFixed(2)}`);
        r_21_3.innerHTML =`<p>${sumaBrutoRem.toFixed(2)}</p>`;
        return sumaBrutoRem;

    };

   /*  function calcularBrutoNoRem(){
        r_21_4.innerHTML= `<p>${sumaNoRemunerativo}</p>`;
    }; */
   

    function calcularDescuentos(totalBrutoRem){
        let sumaDescuentos=0;
        let jubilacion=totalBrutoRem*0.11;
        console.log(`valor jubilacion: $${jubilacion.toFixed(2)}`);
        r_14_1.innerHTML = `<p>11%</p>`
        r_14_5.innerHTML = `<p>${jubilacion.toFixed(2)}</p>`
        sumaDescuentos+=jubilacion;
        console.log (`Subtotal descuentos: $${sumaDescuentos.toFixed(2)}`);

        let leyINSSJP=totalBrutoRem*0.03;
        console.log(`valor INSSJP: $${leyINSSJP.toFixed(2)}`);
        r_15_1.innerHTML = `<p>3%</p>`
        r_15_5.innerHTML = `<p>${leyINSSJP.toFixed(2)}</p>`
        sumaDescuentos+=leyINSSJP;
        console.log (`Subtotal descuentos: $${sumaDescuentos.toFixed(2)}`);

        let obraSocial=totalBrutoRem*0.03;
        console.log(`valor obra Social: $${obraSocial.toFixed(2)}`);
        r_16_1.innerHTML = `<p>3%</p>`
        r_16_5.innerHTML = `<p>${obraSocial.toFixed(2)}</p>`
        sumaDescuentos+=obraSocial;
        console.log (`Subtotal descuentos: $${sumaDescuentos.toFixed(2)}`);

        let aporteSolidarioGremio=totalBrutoRem*0.025; //verificar valor con delegados   
        console.log(`valor aporte Solidario Gremio: $${aporteSolidarioGremio.toFixed(2)}`);
        r_17_1.innerHTML = `<p>2.5%</p>`
        r_17_5.innerHTML = `<p>${aporteSolidarioGremio.toFixed(2)}</p>`
        sumaDescuentos+=aporteSolidarioGremio;
        console.log (`Total descuentos: $${sumaDescuentos.toFixed(2)}`);
        
        let aporteAfiliacion =0;
        r_18_1.innerHTML = `<p>1.5%</p>`;
        r_18_5.innerHTML = `<p>${aporteAfiliacion.toFixed(2)}</p>`;
        sumaDescuentos+=aporteAfiliacion;

        let seguroDefuncion =0;
        r_19_1.innerHTML = `<p>$860</p>`;
        r_19_5.innerHTML = `<p>${seguroDefuncion.toFixed(2)}</p>`;
        sumaDescuentos+=seguroDefuncion;

        let otrosDescuentos =0;
        r_20_1.innerHTML = `<p>N/A</p>`;
        r_20_5.innerHTML = `<p>${otrosDescuentos.toFixed(2)}</p>`;
        sumaDescuentos+=otrosDescuentos;


        alert(`El total de descuentos es $${sumaDescuentos.toFixed(2)}`);
        r_21_5.innerHTML= `<p>${sumaDescuentos.toFixed(2)}</p>`;
        return sumaDescuentos;           
    }; 

    function calcularSueldo(){
        let brutoRem= calcularBrutoRem();
        //calcularBrutoNoRem(); proximamente
        let descuentos = calcularDescuentos(brutoRem);
        let haberesNetos = brutoRem - descuentos;
        console.log (`Total de bolsillo: $${haberesNetos.toFixed(2)}`); 
        r_22_5.innerHTML= `<p>${haberesNetos.toFixed(2)}</p>`;
        alert(`Los haberes netos a depositar son : $${haberesNetos.toFixed(2)}`);
        return haberesNetos;
    };

    calcularSueldo();
    
}) // fin del Load