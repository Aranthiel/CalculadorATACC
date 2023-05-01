"use strict"

window.addEventListener("load", function (){


////////////////////////// clase, constructor, instancias y arrays //////////////////////////

class Paritaria {
    constructor(anio, mes, basicoMantenimiento, noRemunerativoMantenimiento, basicoAdministrativo, noRemunerativoAdministrativo, basicoOperaciones, noRemunerativoOperaciones){
        this.anio=anio;
        this.mes=mes;
        this.basicoMantenimiento=basicoMantenimiento;
        this.noRemunerativoMantenimiento=noRemunerativoMantenimiento;
        this.basicoAdministrativo=basicoAdministrativo;
        this.noRemunerativoAdministrativo=noRemunerativoAdministrativo;        
        this.basicoOperaciones=basicoOperaciones;
        this.noRemunerativoOperaciones=noRemunerativoOperaciones;
    }
};

const paritariasArr = [];

paritariasArr["octubre2020"] = new Paritaria (2020, "Octubre", 41669.63, 5000, 42159.86, 5000, 33335.7, 3750);
paritariasArr["noviembre2020"] = new Paritaria (2020, "Noviembre", 41669.63, 5000, 42159.86, 5000, 33335.7, 3750);
paritariasArr["diciembre2020"] = new Paritaria (2020, "Diciembre", 41669.63, 5000, 42159.86, 5000, 33335.7, 3750);
const y2020 =[paritariasArr["octubre2020"], paritariasArr["noviembre2020"], paritariasArr["diciembre2020"]];

paritariasArr["enero2021"] = new Paritaria (2021, "Enero", 41669.63, 11045.43, 42159.86, 11163.43, 33335.7, 8418.43);
paritariasArr["febrero2021"] = new Paritaria (2021, "Febrero", 41669.63, 17084,86, 42159.86, 17303.86, 33335.7, 13272.86);
paritariasArr["marzo2021"] = new Paritaria (2021, "Marzo", 41669.63, 23127.29, 42159.86, 23444.29, 33335.7, 18127.29);
paritariasArr["abril2021"] = new Paritaria (2021, "Abril", 53970.25, 0, 54563.43, 0, 42998.7, 0);
paritariasArr["mayo2021"] = new Paritaria (2021, "Mayo", 56470.25, 4517.62, 57063.43, 4565.07, 44873.7, 3589.9);
paritariasArr["junio2021"] = new Paritaria (2021, "Junio", 56470.25, 4517.62, 57063.43, 4565.07, 44873.7, 3589.9);
paritariasArr["julio2021"] = new Paritaria (2021, "Julio", 56470.25, 4517.62, 57063.43, 4565.07, 44873.7, 3589.9);
paritariasArr["agosto2021"] = new Paritaria (2021, "Agosto", 56470.25, 8517.62, 57063.43, 8565.07, 44873.7, 7599.5);
paritariasArr["septiembre2021"] = new Paritaria (2021, "Septiembre", 56470.25, 9035.24, 57063.43, 9130.15, 44873.7, 7179.79);
paritariasArr["octubre2021"] = new Paritaria (2021, "Octubre", 56470.25, 9035.24, 57063.43, 9130.15, 44873.7, 7179.79);
paritariasArr["noviembre2021"] = new Paritaria (2021, "Noviembre", 56470.25, 14177.56, 57063.43, 14265.86, 44873.7, 11218.46);
paritariasArr["diciembre2021"] = new Paritaria (2021, "Diciembre", 56470.25, 14177.56, 57063.43, 14265.86, 44873.7, 11218.46);
const y2021 =[paritariasArr["enero2021"], paritariasArr["febrero2021"], paritariasArr["marzo2021"], paritariasArr["abril2021"], paritariasArr["mayo2021"], paritariasArr["junio2021"], paritariasArr["julio2021"], paritariasArr["agosto2021"], paritariasArr["septiembre2021"], paritariasArr["octubre2021"], paritariasArr["noviembre2021"], paritariasArr["diciembre2021"]]

paritariasArr["enero2022"] = new Paritaria (2022, "Enero", 70587.81, 4517.62, 71329.29, 4565.07, 56092.13, 3589.9);
paritariasArr["febrero2022"] = new Paritaria (2022, "Febrero", 70587.81, 10683.35, 71329.29, 10842.05, 56092.13, 3589.9);
paritariasArr["marzo2022"] = new Paritaria (2022, "Marzo", 70587.81, 16376.13, 71329.29, 16548.4, 56092.13, 7179.79);
paritariasArr["abril2022"] = new Paritaria (2022, "Abril", 86964.18, 5217.85, 87877.69, 5272.66, 69105.5, 4146.33);
paritariasArr["mayo2022"] = new Paritaria (2022, "Mayo", 86964.18, 10435.7, 87877.69, 10545.32, 69105.5, 8292.66);
paritariasArr["junio2022"] = new Paritaria (2022, "Junio", 86964.18, 15653.55, 87877.69, 15817.98, 69105.5, 12438.99);
paritariasArr["julio2022"] = new Paritaria (2022, "Julio", 86964.18, 15653.55, 87877.69, 15817.98, 69105.5, 12438.99);
paritariasArr["agosto2022"] = new Paritaria (2022, "Agosto",  86964.18, 33481.21, 87877.69, 33833.91, 69105.5, 26605.62);
paritariasArr["septiembre2022"] = new Paritaria (2022, "Septiembre",  86964.18, 42177.93, 87877.69, 42620.68, 69105.5, 33516.17);
paritariasArr["octubre2022"] = new Paritaria (2022, "Octubre",  86964.18, 42177.93, 87877.69, 42620.68, 69105.5, 33516.17);
paritariasArr["noviembre2022"] = new Paritaria (2022, "Noviembre",  86964.18, 51743.69, 87877.69, 52287.22, 69105.5, 41117.77);
paritariasArr["diciembre2022"] = new Paritaria (2022, "Diciembre",  86964.18, 51743.69, 87877.69, 52287.22, 69105.5, 41117.77);
const y2022 =[paritariasArr["enero2022"], paritariasArr["febrero2022"], paritariasArr["marzo2022"], paritariasArr["abril2022"], paritariasArr["mayo2022"], paritariasArr["junio2022"], paritariasArr["julio2022"], paritariasArr["agosto2022"], paritariasArr["septiembre2022"], paritariasArr["octubre2022"], paritariasArr["noviembre2022"], paritariasArr["diciembre2022"]]

paritariasArr["enero2023"] = new Paritaria (2023, "Enero", 120010.57, 18697.3, 121271.21, 18893.7, 95365.59, 14857.98); // se incorpora un concepto remunerativo que no estaba definido en el contructor por lo qu eno se incluye, tema para ver
paritariasArr["febrero2023"] = new Paritaria (2023, "Febrero", 120010.57, 18697.3, 121271.21, 18893.7, 95365.59, 14857.98); // se incorpora un concepto remunerativo que no estaba definido en el contructor por lo qu eno se incluye, tema para ver
paritariasArr["marzo2023"] = new Paritaria (2023, "Marzo", 120010.57, 18697.3, 121271.21, 18893.7, 95365.59, 14857.98); // se incorpora un concepto remunerativo que no estaba definido en el contructor por lo qu eno se incluye, tema para ver
paritariasArr["abril2023"] = new Paritaria (2023, "Abril",172257.14, 0, 174066.6, 0, 136882.98, 0); 
paritariasArr["mayo2023"] = new Paritaria (2023, "Mayo",172257.14, 0, 174066.6, 0, 136882.98, 0 ); 
const y2023=[paritariasArr["enero2023"], paritariasArr["febrero2023"], paritariasArr["marzo2023"], paritariasArr["abril2023"], paritariasArr["mayo2023"]]



/////////////////////////////////////////// Objeto ///////////////////////////////////////////


const vCategoria = { // declara un objeto que contiene los valores de la categoria  necesarios para los calculos posteriores
    categoriaElegida: "", // se completa con el selectCategoria.addEventListener linea 98
    
    jornada:0, // se completa con el selectCategoria.addEventListener linea 98    
    anioElegido: "",
    mesElegido: "",    
    basicoCategoria:0, //buscarBasico();
    noRemunerativoCategoria:0, //buscarBasico();
    horasTotalesMes:0,  //calcularHorasMensuales()
    valorHora:0, //calcularValorHora()
    
    antiguedad:0,
    
    cantidadExtras50:0,
    valorExtras50: 0,
    cantidadExtras100:0,
    valorExtras100: 0,

    premiosBruto:0,

    tuvoAusencias: false,
    porcentajePresentismo:0,
    tuvoLlegadasTarde:false,
    porcentajePuntualidad:0,
    ausenciasJustificadasConGoce:0,
    ausenciasJustificadasSinGoce:0,
    ausenciasInjustificadas:0,
    suspenciones:0,

    licenciaVacaciones:false,

    afiliadoATACC:false,
    afiliadoCONEXO:false
};

console.log(`vCategoria:`);
console.log(vCategoria);

///////////////////////////////////////////// DOM /////////////////////////////////////////////

function toggleDisabled(flag, element){
    if(!flag) {
        element.setAttribute("disabled", "true");
    } else {
        element.removeAttribute("disabled");
        element.focus();
    }
}

const selectCategoria= document.querySelector("#categoriaSelect");
const selectJornada= document.querySelector("#jornadaSelect");

const selectAnio=document.querySelector("#anioSelect"); 
const selectMes=document.querySelector("#mesSelect");

const selectAntiguedad= document.querySelector("#antiguedadSelect");
const selectVacaciones= document.querySelector("#checkboxVacaciones"); 
selectVacaciones.addEventListener("change", function (){
    console.log(`Salio de vacaciones: ${selectVacaciones.checked}` );
    if (selectVacaciones.checked == true){
        Swal.fire({   
            titleText: "Esta opción aun no está habilitada",
            html: "Pronto estará disponible para usuarios Premium",
            icon: `warning`, 
            iconColor: `#0093dd`,
            width: `50rem`,
            padding:` 1.5rem`,
            color:`#F4F9F0`,
            background:` #0f012e`,
            confirmButtonColor: `#0093dd`,
        });
    }
});

const imputPremio= document.querySelector("#premiosImput");
//imputPremio.setAttribute("disabled", "true");
const selectCobraPremios= document.querySelector("#checkboxCobraPremios"); 
selectCobraPremios.addEventListener("change", function(){
    console.log(`cobra premios: ${selectCobraPremios.checked}`)
    let habilitarImput=selectCobraPremios.checked;
    console.log(`habilitarImput`);
    console.log(habilitarImput);
    toggleDisabled(habilitarImput,imputPremio);
});


const selectTipoAusencias= document.querySelector("#tipoAusenciaSelect");
const selectAusencias= document.querySelector("#checkboxLicencias");
selectAusencias.addEventListener("change", function(){
    console.log(`Tuvo ausencias: ${selectAusencias.checked}`);
    let habilitarImput=selectAusencias.checked;
    console.log(`habilitarImput`);
    console.log(habilitarImput);
    toggleDisabled(habilitarImput,selectTipoAusencias);
});


const selectLlegadasTarde= document.querySelector("#checkboxLlegadaTarde");
selectLlegadasTarde.addEventListener("change", () => console.log(`Tuvo llegadas tarde: ${selectLlegadasTarde.checked}` ));




const selectDiasLicenciaConGoce = document.querySelector("#diasLicenciaConGoceSelect");
const selectDiasLicenciaSinGoce = document.querySelector("#diasLicenciaSinGoceSelect");

const selectDiasLicenciaInjustificadas = document.querySelector("#diasLicenciaInjustificadasSelect");
const selectDiasSuspencion = document.querySelector("#diasSuspencionSelect");

const SelectExtras50 = document.querySelector("#hsExtra50Select");
const SelectExtras100 = document.querySelector("#hsExtra100Select");

const SelectAfiliadoATACC = document.querySelector("#checkboxAfiliadoAtacc");
SelectAfiliadoATACC.addEventListener("change", function(){
    console.log(`Es afiliado a Conexo: ${SelectAfiliadoATACC.checked}` );
    if (SelectAfiliadoATACC.checked == true){
        Swal.fire({   
            titleText: "Esta opción aun no está habilitada",
            html: "Pronto estará disponible para usuarios Premium",
            icon: `warning`, 
            iconColor: `#0093dd`,
            width: `50rem`,
            padding:` 1.5rem`,
            color:`#F4F9F0`,
            background:` #0f012e`,
            confirmButtonColor: `#0093dd`,
        });
    }
    });
const SelectAfiliadoConexo = document.querySelector("#checkboxAfiliadoConexo");
SelectAfiliadoConexo.addEventListener("change", function(){
    console.log(`Es afiliado a Conexo: ${SelectAfiliadoConexo.checked}` );
    if (SelectAfiliadoConexo.checked == true){
        Swal.fire( {   
            titleText: "Esta opción aun no está habilitada",
            html: "Pronto estará disponible para usuarios Premium",
            icon: `warning`, 
            iconColor: `#0093dd`,
            width: `50rem`,
            padding:` 1.5rem`,
            color:`#F4F9F0`,
            background:` #0f012e`,
            confirmButtonColor: `#0093dd`,
        });
    }
    });

const btnCalcular = document.querySelector("#btnCalcular");


selectCategoria.addEventListener('change', function() {
    console.log(`select categoría valor ${this.value}`);
    if (this.value != "03"){
        selectJornada.disabled=true;        
        vCategoria.jornada=48;
    }
    else {
        for ( var i=36; i>=20; i--){ // ¿como hago para que se incremente en 0,5 en lugar de en 1?
            const option = document.createElement('option');    
            option.value = i;
            option.text = i;  
            selectJornada.appendChild(option);
        }
        selectJornada.disabled=false;        
        Swal.fire(/*`Seleccioná la jornada semanal`*/{
            title: "titulo de la alerta",
            titleText: "Seleccioná la jornada semanal",
            html: "Podés elegir desde 20 a 36 hs semanales",
            text:"text",
            icon: `info`, 
            iconColor: `#0093dd`,
            width: `50rem`,
            padding:` 1.5rem`,
            color:`#F4F9F0`,
            background:` #0f012e`,
            confirmButtonColor: `#0093dd`,
        });
        // selectJornada.focus();
        selectJornada.addEventListener('change', function() {            
            vCategoria.jornada = Number(selectJornada.value);
        });
    }
});

let years=[2020,2021,2022,2023];  // deberia mapear el Json
let months2020=["Octubre", "Noviembre", "Diciembre"]; // deberia traer el JSON para el año 2020
let months2021=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let months2022=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let months2023=["Enero", "Febrero", "Marzo", "Abril"];

function agregarOpcionSelect(opcion, selector){
    selector.innerHTML="";
    const option = document.createElement('option');
    const valor = opcion;
    option.value = valor;
    option.text = valor;
    selector.appendChild(option);
};
function limpiarOpcionesSelect(selector){
    while (selector.options.length > 0) {
        selector.remove(selector.options.length - 1);
        }
}

function agregarOpcionSelectHasta(cantidad, selector){
    selector.innerHTML="";
    for ( var i=0; i<=(cantidad); i++){
        const option = document.createElement('option');    
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}

agregarOpcionSelectHasta((65-16), selectAntiguedad);
agregarOpcionSelectHasta((31), selectDiasLicenciaConGoce);
agregarOpcionSelectHasta((31), selectDiasLicenciaSinGoce);
agregarOpcionSelectHasta((31), selectDiasLicenciaInjustificadas);
agregarOpcionSelectHasta((31), selectDiasSuspencion);
agregarOpcionSelectHasta((30), SelectExtras50);
agregarOpcionSelectHasta((30), SelectExtras100);


years.forEach(anio => agregarOpcionSelect(anio, selectAnio));

let monthYear=[];
function elegirAnio(valor){
    switch (valor){
        case "2020":
            monthYear=[].concat(months2020);
            console.log(monthYear);
            return monthYear;
        case "2021":
            monthYear=[].concat(months2021);
            console.log(monthYear);
            return monthYear;
        case "2022":
            monthYear=[].concat(months2022);
            console.log(monthYear);
            return monthYear;
                        
        case "2023":
            monthYear=[].concat(months2023);
            console.log(monthYear);
            return monthYear;
        default:
            console.log('default');           
    }
}
selectAnio.addEventListener('change', function() { 
    vCategoria.anioElegido=this.value;
    limpiarOpcionesSelect(selectMes);
    (elegirAnio(vCategoria.anioElegido)).forEach(mes => agregarOpcionSelect(mes, selectMes));
});

////////////////////////////////////////// FUNCIONES //////////////////////////////////////////

function calcularHorasMensuales(jornadaSemanal){ 
    // se calcula la cantidad de horas mensuales para poder calcular el valor de la hora. considera que el mes tien 4 semanas
    let jornadaMensual=4*jornadaSemanal;   
    return jornadaMensual;
};

function calcularValorHora(basico, horasMensuales){
    let valorHora=basico/horasMensuales;
    console.log(`<<< Valor de la hora: $${valorHora.toFixed(2)} >>>`);
    return  Number(valorHora.toFixed(2));
};

function buscarBasico(){
    let mes_anio = vCategoria.mesElegido.toLowerCase() + vCategoria.anioElegido;    
    
    let categoria = vCategoria.categoriaElegida;
    switch (categoria){
        case "01":
            vCategoria.basicoCategoria = paritariasArr[mes_anio].basicoMantenimiento;
            vCategoria.noRemunerativoCategoria = paritariasArr[mes_anio].noRemunerativoMantenimiento;
            break;

        case "02":
            vCategoria.basicoCategoria = paritariasArr[mes_anio].basicoAdministrativo;
            vCategoria.noRemunerativoCategoria = paritariasArr[mes_anio].noRemunerativoAdministrativo;
            break;
        
        case "03":
            vCategoria.basicoCategoria = paritariasArr[mes_anio].basicoOperaciones/36*vCategoria.jornada;
            vCategoria.noRemunerativoCategoria = paritariasArr[mes_anio].noRemunerativoOperaciones/36*vCategoria.jornada;
            break;
    }    
}

function completarValoresCategoria (){
    // modifica el objeto vCategoria y además coloca la información en el DOM
    vCategoria.categoriaElegida =  selectCategoria.value;  
    // vCategoria.jornada se completa en selectCategoria.addEventListener
    vCategoria.anioElegido=selectAnio.value;
    vCategoria.mesElegido=selectMes.value; 

    buscarBasico();
    vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
    vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
    
    // elementos necesarios para calcular el adicional por antiguedad
    vCategoria.antiguedad = selectAntiguedad.value;

    // premios    
    vCategoria.premiosBruto=Number(imputPremio.value);

     // elementos necesarios para calcular el adicional por horas extras
    vCategoria.cantidadExtras50 = SelectExtras50.value;
    vCategoria.valorExtras50=vCategoria.valorHora*1.5;
    vCategoria.cantidadExtras100 = SelectExtras100.value;
    vCategoria.valorExtras100=vCategoria.valorHora*2;    
    

    // elementos necesarios para calcular el adicional por presentismo
    vCategoria.tuvoAusencias= selectAusencias.checked ;
    // vCategoria.porcentajePresentismo se completa con calcularPresentismo();
    // vCategoria.porcentajePuntualidad se completa con calcularPuntualidad();
    vCategoria.tuvoLlegadasTarde = selectLlegadasTarde.checked;
    vCategoria.ausenciasJustificadasConGoce = selectDiasLicenciaConGoce.value;
    vCategoria.ausenciasJustificadasSinGoce= selectDiasLicenciaSinGoce.value;
    vCategoria.ausenciasInjustificadas = selectDiasLicenciaInjustificadas.value;
    vCategoria.suspenciones= selectDiasSuspencion.value;

     // elementos necesarios para calcular el adicional por vacaciones
    vCategoria.licenciaVacaciones = selectVacaciones.checked ;
    
     // elementos necesarios para calcular descuentos adicionales
    vCategoria.afiliadoATACC = SelectAfiliadoATACC.checked ;
    vCategoria.afiliadoCONEXO = SelectAfiliadoConexo.checked ;
    
    
    console.log(`vCategoria:`);
    console.log(vCategoria);
}

function calcularAntiguedad(){
    let aniosAntiguedad = vCategoria.antiguedad;
    let antiguedad = vCategoria.basicoCategoria*aniosAntiguedad/100;
    return antiguedad;
};

function calcularExtrasAlCincuenta(){   
    let totalExtras50= vCategoria.valorExtras50*vCategoria.cantidadExtras50;
    return totalExtras50;

};

function calcularExtrasAlCien(){
    let totalExtras100=  vCategoria.valorExtras100*vCategoria.cantidadExtras100;
    return totalExtras100;
};

function calcularPresentismo(basico, antiguedad, premios, extras50, extras100){
    let baseCalculo=basico+antiguedad+premios+extras50+extras100;
    let presentismo=baseCalculo*vCategoria.porcentajePresentismo;
    let tuvoFaltas= selectAusencias.checked;
    if (!tuvoFaltas){
        console.log(`Felcicitaciones no tuviste faltas y cobras el premio completo`);
        vCategoria.porcentajePresentismo=0.1;
        presentismo=baseCalculo*vCategoria.porcentajePresentismo;
        
        return presentismo;
    } else {
        console.log(`:/ tuviste faltas este mes`);
        let cobraPresentismo = selectTipoAusencias.value == "J";
        if (cobraPresentismo){
            console.log(`pero al menos cobras algo de premio`)
            vCategoria.porcentajePresentismo=0.06;
            presentismo=baseCalculo*vCategoria.porcentajePresentismo;            
            return presentismo}
        else {
            console.log(`y te quedaste sin premiop T_T`);
            return presentismo;
        }
    }
};

function calcularPuntualidad(basico, antiguedad, premios, extras50, extras100){
    let baseCalculo=basico+antiguedad+premios+extras50+extras100;
    let tuvoLlegadasTarde = vCategoria.tuvoLlegadasTarde;
    if (!tuvoLlegadasTarde){
        vCategoria.porcentajePuntualidad=0.005;
        let puntualidad=baseCalculo*vCategoria.porcentajePuntualidad; 
        return puntualidad;
    } else {
        return vCategoria.porcentajePuntualidad;
    }
};

function calcularBrutoRem(){
    let sumaBrutoRem=0;
    let valorBasico=vCategoria.basicoCategoria;
    sumaBrutoRem += valorBasico;
    console.log (`Subtotal bruto: $${sumaBrutoRem.toFixed(2)}`);
    r_1_1.innerHTML=`<p>${vCategoria.horasTotalesMes}</p>`;
    r_1_2.innerHTML=`<p>${vCategoria.valorHora.toFixed(2)}</p>`;
    r_1_3.innerHTML=`<p>${valorBasico.toFixed(2)}</p>`;

    let valorAntiguedad= calcularAntiguedad();
    sumaBrutoRem += valorAntiguedad;
    console.log (`Subtotal bruto c/antiguedad: $${sumaBrutoRem.toFixed(2)}`);
    r_2_1.innerHTML=`<p>${vCategoria.antiguedad}</p>` ;   
    r_2_3.innerHTML=`<p>${valorAntiguedad.toFixed(2)}</p>`;

    let valorPremios= vCategoria.premiosBruto;
    sumaBrutoRem += valorPremios;
    console.log (`Subtotal bruto c/premios: $${sumaBrutoRem.toFixed(2)}`);
    r_3_3.innerHTML=`<p>${valorPremios.toFixed(2)}</p>`;
    
    let valorExtras50 = calcularExtrasAlCincuenta();
    sumaBrutoRem += valorExtras50;
    console.log (`Subtotal bruto c/extras 50: $${sumaBrutoRem.toFixed(2)}`);
    r_4_1.innerHTML=`<p>${vCategoria.cantidadExtras50}</p>`;
    r_4_2.innerHTML=`<p>${vCategoria.valorExtras50.toFixed(2)}</p>`;
    r_4_3.innerHTML=`<p>${valorExtras50.toFixed(2)}</p>`;

    let valorExtras100=calcularExtrasAlCien();
    sumaBrutoRem += valorExtras100;
    console.log (`Subtotal bruto c/extras 50: $${sumaBrutoRem.toFixed(2)}`);
    r_5_1.innerHTML=`<p>${vCategoria.cantidadExtras100}</p>`;
    r_5_2.innerHTML=`<p>${vCategoria.valorExtras100.toFixed(2)}</p>`;
    r_5_3.innerHTML=`<p>${valorExtras100.toFixed(2)}</p>`;

    let valorPresentismo = calcularPresentismo(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100);// el presentismo se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
    sumaBrutoRem += valorPresentismo;
    console.log (`Subtotal bruto c/ presentismo: $${sumaBrutoRem.toFixed(2)}`); 
    r_6_1.innerHTML=`<p>${vCategoria.porcentajePresentismo*100}%</p>`;
    r_6_3.innerHTML=`<p>${valorPresentismo.toFixed(2)}</p>`;

    let valorPuntualidad= calcularPuntualidad(valorBasico, valorAntiguedad, valorPremios, valorExtras50, valorExtras100); // la puntualidad  se calcula sobre la suma de  Basico +  Antiguedad +  comisiones/premios + Hs extras  50% + Hs extras 100%
    sumaBrutoRem += valorPuntualidad;
    console.log (`Subtotal bruto c/ puntualidad: $${sumaBrutoRem.toFixed(2)}`); 
    r_7_1.innerHTML=`<p>${vCategoria.porcentajePuntualidad*100}%</p>`;
    r_7_3.innerHTML=`<p>${valorPuntualidad.toFixed(2)}</p>`;
    
    console.log (`Total bruto Remunerativo: $${sumaBrutoRem.toFixed(2)}`);
    r_21_3.innerHTML =`<p>${sumaBrutoRem.toFixed(2)}</p>`;
    return sumaBrutoRem;

};

function calcularNoRem(){
    let noRemunerativo =(vCategoria.noRemunerativoCategoria);
    console.log(`no rem 511:`);
    console.log(typeof(noRemunerativo));
    r_8_4.innerHTML = `<p>${noRemunerativo.toFixed(2)}</p>`;
    r_21_4.innerHTML = `<p>${noRemunerativo.toFixed(2)}</p>`;
    return noRemunerativo;
};

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
    
    r_21_5.innerHTML= `<p>${sumaDescuentos.toFixed(2)}</p>`;
    return sumaDescuentos;           
}; 

function calcularSueldo(){
    let brutoRem= calcularBrutoRem();
    console.log(`brutoRem ${typeof(brutoRem)}`);
    let noRem = Number(calcularNoRem()); 
    console.log(`noRem ${typeof(noRem)}`);
    let descuentos = calcularDescuentos(brutoRem);
    console.log(`descuentos ${typeof(descuentos)}`);
    let haberesNetos = brutoRem - descuentos + noRem ;
    console.log (`Total de bolsillo: `); 
    console.log (haberesNetos); 
    r_22_5.innerHTML= `<p>${haberesNetos.toFixed(2)}</p>`;    
    return haberesNetos;
};

//////////////////////////////////////// LOCAL STORAGE ////////////////////////////////////////


function usarLocalStorage(){
    const mensaje = `Haz realizado una consulta para los haberes de ${vCategoria.mesElegido} ${vCategoria.anioElegido} para un trabajador con ${vCategoria.antiguedad} años de antiguedad que tiene categoria ${vCategoria.categoriaElegida}`;

    localStorage.setItem('mensaje', mensaje);

    const resumenConsulta = document.getElementById('resumenConsulta');
    const mensajeGuardado = localStorage.getItem('mensaje');

    if (mensajeGuardado !== null) {
        resumenConsulta.innerHTML = mensajeGuardado;
    }
}

///////////////////////////////////// NO SÉ QUÉ PONER ACÁ /////////////////////////////////////

btnCalcular.addEventListener("click", (e)=>{
    //evitamos el comportamiento por default del form
    e.preventDefault();
    completarValoresCategoria();
    usarLocalStorage();
    calcularSueldo();
});

///////////////////// BORRAR LOCAL STORAGE AL CERRAR LA PAGINA By CHAT GTP /////////////////////

function borrarMensajeLocalStorage() {
    localStorage.removeItem('mensaje');
}

window.addEventListener('beforeunload', borrarMensajeLocalStorage);


}) // fin del Load
