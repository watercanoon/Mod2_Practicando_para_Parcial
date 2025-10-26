// --- Referencias ---
let txtCodigo = document.getElementById("txtCodigo");
let txtNombre = document.getElementById("txtNombre");
let txtFecha = document.getElementById("txtFecha");
let btnApilar = document.getElementById("btnApilar");
let btnDesapilar = document.getElementById("btnDesapilar");
let listaDiv = document.getElementById("lista");

// --- Clases ---
class Alumno {
    constructor(codigo, nombre, fecha,edad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.fecha = fecha;
        this.edad=edad;
    }
}

class Nodo {
    constructor(alumno) {
        this.alumno = alumno;
        this.siguiente = null;
    }
}

class Pila {
    constructor() {
        this.cima = null;
    }

    estaVacia() {
        return this.cima === null;
    }

    apilar(alumno) {
        let nuevo = new Nodo(alumno);
        nuevo.siguiente = this.cima;
        this.cima = nuevo;
    }

    desapilar() {
        if (this.estaVacia()) {
            alert("La pila está vacía");
            return;
        }
        let alumno = this.cima.alumno;
        this.cima = this.cima.siguiente;
    }

    mostrar() {
        if (this.estaVacia()) {
            listaDiv.textContent = "Pila vacía";
            return;
        }

        let aux = this.cima;
        let texto = "";
        while (aux) {
            texto += aux.alumno.codigo + " - " + aux.alumno.nombre + " - " + aux.alumno.fecha +" - "+ aux.alumno.edad+" años<br>";
            aux = aux.siguiente;
        }
        listaDiv.innerHTML = texto;
    }
}

function calcularEdad(fecha) {
    let hoy = new Date();
    let cumple = new Date(fecha);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    return edad;
}

// --- Instancia ---
let pila = new Pila();

// --- Funciones ---
function apilarAlumno() {
    let edad = calcularEdad(txtFecha.value);
    let a = new Alumno(txtCodigo.value, txtNombre.value, txtFecha.value,edad);
    pila.apilar(a);
    pila.mostrar();

    txtCodigo.value = "";
    txtNombre.value = "";
    txtFecha.value = "";
}

function desapilarAlumno() {
    pila.desapilar();
    pila.mostrar();
}

// --- Eventos ---
btnApilar.addEventListener("click", apilarAlumno);
btnDesapilar.addEventListener("click", desapilarAlumno);

// --- Datos iniciales ---
pila.apilar(new Alumno(1, "Ana Torres", "2005-03-12",calcularEdad("2005-03-12")));
pila.apilar(new Alumno(2, "Luis Paredes", "2006-11-25",calcularEdad("2006-11-25")));
pila.apilar(new Alumno(3, "María Gómez", "2004-08-09",calcularEdad("2004-08-09")));
pila.mostrar();



