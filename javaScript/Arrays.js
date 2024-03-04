/*
  Actividad  
  Crear 4 Arreglos usando Funciones Flecha (Arrow Function)
  Usar Metodos con los Arreglos Y Mostrar los Resultados

  1. .forEach()
  2. .reduce ()
  3. .filter()
  4. .map()

  * Para cada arreglo que usted construya minimo un metodo distinto
  * Usar callback fn 
  
  * La funcion tipo Flecha crea el Arreglo. Crea el Arreglo y se llena con las Funciones 
*/

 // ---------- Funciones Flecha Para Llenar los Arrays ----------

 // ---------- Arrow Function con Arrays de Animales ----------
 const animals = () => {
    return ["Perro", "Gato", "Elefante", "Leon", "Jirafa", "Zorro", "Pinguino", "Delfin", "Serpiente", "Tigre"];
 }

 // ---------- Arrow Function con Array de Booleanos ----------
 const booleans = () => {
    return [true, false, true, false, false,false,true,true,false];
 }

 // ---------- Arrow Function para Llenar Arrays de Numeros ----------
 const fillArrays = (numero) => {
    if (isNaN(numero) || numero <= 0) {
        return "Error: El numero debe ser un entero positivo.";
    }
    const arreglo = Array.from({ length: numero });
    arreglo.forEach((_, i) => arreglo[i] = i + 1);
    return arreglo;
  }

 // ---------- Arrays ----------
 let animalsArray = animals();
 let booleansArray = booleans();
 let numbersOne = fillArrays(20); 
 let numbersTwo = fillArrays(40);

 // ---------- Arrow Function con Array de Booleanos ----------
 console.log("Array Originales");
 console.log(animalsArray);
 console.log(booleansArray);
 console.log(numbersOne);
 console.log(numbersTwo);

 // ---------- Implementacion del Metodo .Reduce () con Arrays ----------
 console.log("");
 console.log("Implementacion del Metodo .Reduce ()");

 // ---------- Obtener el nombre del animal mas largo ----------
 let longestAnimal = animalsArray.reduce((acomulado, animal) => {
    if (animal.length > acomulado.length) {
        acomulado = animal;
    }
    return acomulado;
 });

 console.log("Animal con el nombre mas largo: ", longestAnimal);

 // ---------- Obtener la cantidad de valores "true" ----------
 let valuesTrue = true;
 valuesTrue = booleans().reduce((acomulado, booleano) => {
    if (booleano) {
        acomulado++;
    }
    return acomulado;
 });

 console.log("Cantidad de valores true: ", valuesTrue );

 // ---------- Implementacion del Metodo .ForEach () con Arrays ----------
 console.log("");
 console.log("Implementacion del Metodo .ForEach ()");

 // ---------- Multiplicar cada valor booleano por 2 ----------
 const modifiedBooleans  = [];
 booleansArray.forEach((booleano, i) => {
    modifiedBooleans[i] = booleano * 2;
 });

 console.log("Nuevo array Multiplicando cada valor booleano por 2: ", modifiedBooleans);

 // ---------- Sumar 5 a cada numero en el array ----------

 const addFive = [];
 numbersTwo.forEach(numero => {
    addFive.push(numero + 5);
 });

 console.log("Nuevo array sumando 5 a cada numero: ", addFive);

 // ---------- Implementacion del Metodo .Filter () con Arrays ----------
 console.log("");
 console.log("Implementacion del Metodo .Filter ()");

 // ---------- Obtener los numeros pares ----------
 let evenNumbers = numbersTwo.filter(numero => {
    return numero % 2 === 0;
});

console.log("Números pares: ", evenNumbers);

 // ---------- Filtrar los animales que Tengan la letra O ----------

let animalsWithO = animalsArray.filter(animal => {
    return animal.includes("o");
 });
 
 console.log("Animales que comienzan con la letra O: ", animalsWithO)

 // ---------- Implementacion del Metodo .Map () con Arrays ----------
 console.log("");
 console.log("Implementacion del Metodo .Map ()");

 // ---------- Convertir los Nombres de los Animales a Mayusculas ----------
 let capitalLetters = animalsArray.map(animal => {
    return animal.toUpperCase();
 });
 
 console.log("Animales en mayúsculas: ", capitalLetters);

 // ---------- Multiplicar Cada Numero por 3 ----------

 let numbersTriplicated = numbersOne.map(numero => {
    return numero * 3;
 });
 
 console.log("Números del primer array triplicados: ", numbersTriplicated);

///////////////////////////////////////////////////////////////////////////////////
