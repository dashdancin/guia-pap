const fs = require('fs');
const crypto = require('crypto');

// Lista de recursos que deseas precargar
const yourResourceList = [
  '/index.html',
  '../src/index.css',
  // ... agregar otros recursos
];

// Obtén el contenido de los recursos que quieres precargar (por ejemplo, el contenido de los archivos)
const resourceContent = yourResourceList.map(resourcePath => {
  // Aquí deberías obtener el contenido real de cada recurso, por ejemplo, leyendo el contenido del archivo
  // Puedes usar fs.readFileSync u otras técnicas según tu entorno
  return fs.readFileSync(`path/to/your/project${resourcePath}`, 'utf-8');
});

// Concatena y calcula el hash SHA-256 del contenido combinado de todos los recursos
const combinedContent = resourceContent.join('');
const hash = crypto.createHash('sha256').update(combinedContent).digest('hex');

// Construye el nombre del archivo con el hash
const filename = `precache-manifest.${hash}.js`;

// Crea el archivo con el contenido y el hash
fs.writeFileSync(filename, `self.__precacheManifest = ${JSON.stringify(yourResourceList)};`);
