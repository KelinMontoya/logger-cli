// src/app.js
import chalk from "chalk";

// Simulación de usuarios para la tabla
const usuarios = [
  { id: 1, nombre: "Kelin", rol: "Admin" },
  { id: 2, nombre: "Victor", rol: "User" },
  { id: 3, nombre: "Laura", rol: "Invitado" }
];

// Ejemplos de logs
console.log(chalk.green("✔ Acceso permitido: Usuario autenticado correctamente"));
console.warn(chalk.yellow("⚠ Advertencia: Intento de acceso sospechoso"));
console.error(chalk.red("✖ Error: Fallo en la conexión con la base de datos"));

// Uso de console.count
console.count(chalk.blue("Acceso registrado"));
console.count(chalk.blue("Acceso registrado"));

// Uso de console.table para mostrar datos
console.log(chalk.cyan("\n📋 Tabla de usuarios registrados:"));
console.table(usuarios);

// Uso de console.time / console.timeEnd para medir procesos
console.time(chalk.magenta("Tiempo de proceso"));
for (let i = 0; i < 1000000; i++) {
  // Simulamos carga
}
console.timeEnd(chalk.magenta("Tiempo de proceso"));
