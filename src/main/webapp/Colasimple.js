let txtCodigo = document.getElementById("txtCodigo");
let txtNombre = document.getElementById("txtNombre");
let txtFecha = document.getElementById("txtFecha");
let btnEncolar = document.getElementById("btnEncolar");
let btnDesencolar = document.getElementById("btnDesencolar");
let listaDiv = document.getElementById("lista");

class Alumno {
    constructor(codigo, nombre, fecha, edad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.fecha = fecha;
        this.edad = edad;
    }
}
class Nodo {
    constructor(alumno) {
        this.alumno = alumno;
        this.siguiente = null;
    }
}
class Cola {
    constructor() {
        this.frente = null;
        this.fin = null;
    }
    estaVacia() {
        return this.frente === null;
    }
    encolar(alumno) {
        let nuevo = new Nodo(alumno);
        if (this.estaVacia()) {
            this.frente = nuevo;
            this.fin = nuevo;
        } else {
            this.fin.siguiente = nuevo;
            this.fin = nuevo;
        }
    }
    desencolar() {
        if (this.estaVacia()) {
            alert("La cola está vacía");
            return;
        }
        this.frente = this.frente.siguiente;
        if (this.frente === null) this.fin = null;
    }
    mostrar() {
        if (this.estaVacia()) {
            listaDiv.textContent = "Cola vacía";
            return;
        }
        let aux = this.frente;
        let texto = "";
        while (aux) {
            texto += aux.alumno.codigo + " - " + aux.alumno.nombre +
                     " - " + aux.alumno.fecha +
                     " - " + aux.alumno.edad + " años<br>";
            aux = aux.siguiente;
        }
        listaDiv.innerHTML = texto;
    }
}

let cola = new Cola();

function calcularEdad(fecha) {
    let hoy = new Date();
    let cumple = new Date(fecha);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    return edad;
}

function encolarAlumno() {  
    let edad = calcularEdad(txtFecha.value);
    let alumno = new Alumno(txtCodigo.value, txtNombre.value, txtFecha.value, edad);
    cola.encolar(alumno);
    cola.mostrar();

    txtCodigo.value = "";
    txtNombre.value = "";
    txtFecha.value = "";
}
function desencolarAlumno() {
    cola.desencolar();
    cola.mostrar();
}

btnEncolar.addEventListener("click", encolarAlumno);
btnDesencolar.addEventListener("click", desencolarAlumno);


cola.encolar(new Alumno(1, "Ana Torres", "2005-03-12", calcularEdad("2005-03-12")));
cola.encolar(new Alumno(2, "Luis Paredes", "2006-11-25", calcularEdad("2006-11-25")));
cola.encolar(new Alumno(3, "María Gómez", "2004-08-09", calcularEdad("2004-08-09")));
cola.mostrar();