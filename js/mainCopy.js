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

///////////////////////////////////// DOM /////////////////////////////////////////////////////


const vCategoria = { // declara un objeto que contiene los valores de la categoria  necesarios para los calculos posteriores
    categoriaElegida: "", // se completa con el selectCategoria.addEventListener linea 98
    anioElegido: "",
    mesElegido: "",
    jornada:0, // se completa con el selectCategoria.addEventListener linea 98
    anioElegido: "",
    basicoCategoria:0,
    noRemunerativoCategoria:0,
    horasTotalesMes:0, // se completa con el selectCategoria.addEventListener linea 98
    anioElegido: "",
    valorHora:0
};
console.log(vCategoria);
function calcularHorasMensuales(jornadaSemanal){ // se calcula la cantidad de horas mensuales para poder calcular el valor de la hora. considera que el mes tien 4 semanas
    let jornadaMensual=4*jornadaSemanal;
    console.log(`<<< horas mensuales: ${jornadaMensual} >>>`);
    r_1_1.innerHTML= `<p>${jornadaMensual}</p>`;
    return jornadaMensual;
};

const selectCategoria= document.querySelector("#categoriaSelect");
const selectJornada= document.querySelector("#jornadaSelect");

selectCategoria.addEventListener('change', function() {
    console.log(`select categoría valor ${this.value}`);
    if (this.value != "03"){
        selectJornada.disabled=true;
        vCategoria.categoriaElegida=this.value;
        vCategoria.jornada=48;
        vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
        console.log(vCategoria);
    }
    else {
        for ( var i=36; i>=20; i--){ // ¿como hago para que se incremente en 0,5 en lugar de en 1?
            const option = document.createElement('option');    
            option.value = i;
            option.text = i;  
            selectJornada.appendChild(option);
        }
        selectJornada.disabled=false;
        vCategoria.categoriaElegida=this.value;
        alert(`debes seleccionar la cantidad de horas semanales`);
        selectJornada.addEventListener('change', function() {            
            vCategoria.jornada = Number(selectJornada.value);
            vCategoria.horasTotalesMes = calcularHorasMensuales(vCategoria.jornada);
            console.log(vCategoria);
        });
    }
});

let years=[2020,2021,2022,2023];  // deberia mapear el Json
let months2020=["Octubre", "Noviembre", "Diciembre"]; // deberia traer el JSON para el año 2020
let months2021=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let months2022=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let months2023=["Enero", "Febrero", "Marzo", "Abril"];

function agregarOpcionSelect(opcion, selector){
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

const selectAnio=document.querySelector("#anioSelect"); 
const selectMes=document.querySelector("#mesSelect");

years.forEach(anio => agregarOpcionSelect(anio, selectAnio));

let monthYear=[];
console.log(monthYear);
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
console.log(`linea 172 año elegido: ${vCategoria.anioElegido}`);
selectAnio.addEventListener('change', function() {
    console.log(`Elegiste el año ${this.value}`);   
    vCategoria.anioElegido=this.value;
    console.log(vCategoria);
    limpiarOpcionesSelect(selectMes);
    (elegirAnio(vCategoria.anioElegido)).forEach(mes => agregarOpcionSelect(mes, selectMes));
    console.log(` linea 179 año elegido: ${vCategoria.anioElegido}`);
});

selectMes.addEventListener('change', function() {
    console.log(`Elegiste el mes ${this.value}`);   
    vCategoria.mesElegido=this.value;
    console.log(vCategoria);
    console.log(` linea 183 mes elegido: ${vCategoria.mesElegido}`);
    let mes_anio = vCategoria.mesElegido.toLowerCase() + vCategoria.anioElegido;
    console.log(` Basico Administrativo para ${mes_anio} es: ${paritariasArr[mes_anio].basicoAdministrativo}`);
});

function calcularValorHora(basico, horasMensuales){
    let valorHora=basico/horasMensuales;
    console.log(`<<< Valor de la hora: $${valorHora.toFixed(2)} >>>`);
    return  Number(valorHora.toFixed(2));
};

function calcularBasico (){
    //se cual es la categoria porque la tengo guardada en vCategoria.categoriaElegida
    let categoriaBuscada= vCategoria.categoriaElegida;
    console.log(`categoria buscada ${categoriaBuscada}`);
    console.log(typeof(categoriaBuscada));
    let mesBuscado=vCategoria.mesElegido;
    console.log(`mes buscado ${mesBuscado}`);
    let anioBuscado=vCategoria.anioElegido;
    console.log(`anio buscado ${anioBuscado}`);
    // con esa informacion deberia poder elegir una paritaria y buscar ahi la informaciòn correspondiente.
    //como de momento no me funciona, tomo como ejemplo marzo2020
    console.log(marzo2022);
    console.log(marzo2022.anio);
    switch (categoriaBuscada){
        case "01" :
            vCategoria.basicoCategoria = marzo2022.basicoMantenimiento;
            vCategoria.noRemunerativoCategoria=marzo2022.noRemunerativoMantenimiento;
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(`elegiste la categoria Mantnimiento`);
            console.log(vCategoria);
            return vCategoria;
        case "02" :
            vCategoria.basicoCategoria = marzo2022.basicoAdministrativo;
            vCategoria.noRemunerativoCategoria=marzo2022.noRemunerativoAdministrativo;
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(`elegiste la categoria Administrativo`);
            console.log(vCategoria);
            return vCategoria;
        case "03" :
            vCategoria.basicoCategoria = marzo2022.basicoOperaciones/36*vCategoria.jornada;
            vCategoria.noRemunerativoCategoria=marzo2022.noRemunerativoOperaciones/36*vCategoria.jornada;
            vCategoria.valorHora = calcularValorHora(vCategoria.basicoCategoria, vCategoria.horasTotalesMes);
            console.log(`elegiste la categoria Operaciones`);
            console.log(vCategoria);
            return vCategoria;
    }
};

// para esta altura ya tengo los valores de vCategoria 



const selectAusencias= document.querySelector("#licenciaSelect");
const selectDiasAusencias= document.querySelector("#diasLicenciaSelect"); //  deberia ser un booleano  y en caso de selccionar "si" deberia aparecer una fila con  opciones para elegir la cantidad de dias de licencia justificados con goce de sueldo, justificados sin goce de sueldo, injustificaods, suspenciones y ART.

selectAusencias.addEventListener('change', function() { // no va a si, pero era para probar que funcionara calcularBasico()
    calcularBasico();
});



const selectAntiguedad= document.querySelector("#antiguedadSelect"); //  deberia ser un calendario donde se eliga mes y año de ingreso y calcular automáticamente la antiguedad tomando la fecha actual
const selectVacaciones= document.querySelector("#vacacionesSelect");//  deberia ser un booleano y calcular automaticamente la cantidad de dìas de licencia segun la antiguedad


const SelectExtras50 = document.querySelector("#hsExtra50Select");
const SelectExtras100 = document.querySelector("#hsExtra100Select");

const SelectAfiliadoATACC = document.querySelector("#afiliadoAtaccSelect"); //  deberia ser un booleano 

function agregarOpcionSelectHasta(cantidad, selector){
    for ( var i=0; i<=(cantidad); i++){
        const option = document.createElement('option');    
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}

agregarOpcionSelectHasta((65-16), selectAntiguedad);
//agregarOpcionSelectHasta((31), selectDiasAusencias);
agregarOpcionSelectHasta((30), SelectExtras50);
agregarOpcionSelectHasta((30), SelectExtras100);


// let opcionAnio revisa que opcion de año es la seleccionada
//let mesesDisponibles = `month${opcionAnio}`  deberia dar como resultado una concatenacion "month2023"
//mesesDisponibles.forEach(mes => agregarOpcionSelect(mes, selectMes));


//////////////////////////////////////// FUNCIONES //////////////////////////////////////////////

    //Leer información ingresada por el usuario (Año, Mes, Categoria, Jornada, Asistencia, Antiguedad, Hs extras, Afiliaciones)



}) // fin del Load
