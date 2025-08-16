// Importamos las librerías que acabas de instalar
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs'); // Librería para interactuar con el sistema de archivos
const XLSX = require('xlsx'); // Librería para leer y escribir archivos Excel

// Creamos una instancia de la aplicación Express
const app = express();
const PORT = 5000; // El puerto donde escuchará nuestro servidor
const excelFilePath = 'datos_formulario.xlsx'; // El nombre del archivo Excel

// --- Middlewares: Funciones que se ejecutan antes de la solicitud ---
app.use(cors()); // Permite la comunicación entre el frontend y el backend
app.use(bodyParser.json()); // Permite al servidor entender los datos en formato JSON

// --- Función para leer los datos del Excel ---
const getExcelData = () => {
  if (fs.existsSync(excelFilePath)) {
    // Si el archivo existe, lo lee
    const workbook = XLSX.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  } else {
    // Si no existe, devuelve un array vacío para empezar de cero
    return [];
  }
};

// --- Definimos la ruta para guardar los datos ---
app.post('/guardar-datos', (req, res) => {
  const formData = req.body;
  
  // Agregamos una marca de tiempo al registro
  const now = new Date();
  const timestamp = now.toLocaleString('es-GT', { timeZone: 'America/Guatemala' });

  // Creamos el nuevo registro con todos los campos
  const newRecord = {
    'Nombre': formData.nombre,
    'Apellido': formData.apellido,
    'Deporte Favorito': formData.deporte,
    'Municipio': formData.municipio,
    'Genero': formData.genero,
    'Edad': formData.edad,
    'Fecha de Guardado': timestamp,
  };

  // Leemos los datos existentes del Excel
  let existingData = getExcelData();
  
  // Verificamos si ya existe una fila con el mismo Nombre y Apellido
  const recordIndex = existingData.findIndex(record => 
    record.Nombre === newRecord.Nombre && record.Apellido === newRecord.Apellido
  );

  if (recordIndex !== -1) {
    // Si el registro ya existe, lo actualizamos
    existingData[recordIndex] = newRecord;
    console.log('Registro duplicado encontrado y actualizado.');
  } else {
    // Si es un registro nuevo, lo agregamos a la lista
    existingData.push(newRecord);
    console.log('Nuevo registro agregado.');
  }

  try {
    // Convertimos los datos a una hoja de Excel y la guardamos en el archivo
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(existingData);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'DatosFormulario');
    XLSX.writeFile(newWorkbook, excelFilePath);

    console.log('Datos guardados en ' + excelFilePath);
    res.json({ message: '¡Datos recibidos y guardados en Excel con éxito!', receivedData: formData });
  } catch (error) {
    console.error('Error al escribir en el archivo Excel:', error);
    res.status(500).json({ message: 'Error al guardar los datos en el servidor.' });
  }
});

// Iniciamos el servidor para que escuche en el puerto 5000
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en http://localhost:${PORT}`);
});