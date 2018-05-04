# instalar dependencias
npm i

# traspilar, crea carpeta build
npm run build

# iniciar app
npm start



# Creación del proyecto
29 Abril 2018\n
Jorge Fragoza
jorge_boel@hotmail.com

# Instalación de typescript para dar soporte a TypeScript
> 29 Abril 2018
> npm i @types/express --save-dev
> npm i typescript --save-dev
    > (*-dev para instalacion en modo developer)

# Agregué el archivo tsconfig.json
> 30 Abril 2018 
> Se configura CompilersOptiones, exclude, include, atom, filesGlob, compileOnSave
    > Es la configuracion de traspilacion de typescript a javascript

# Modificacion a package.json
> 30 Abril 2018
> Se agregaron scripts clean y build
    > clean: elimina la carpeta y su contenido ./build
    > build: ejecuta bin tsc para traspilado de codigo
        > Los comandos se ejecutan en la terminal como:
            > npm run "comando" ej. npm run build
        > tsc crea una copia del typescript traspilado a lo configurado en el archivo tsconfig.json

# Se instalo libreria express
> 30 Abril 2018
> npm i express --save

# Creación del archivo web.config
> 3 Mayo 2018
> Este archivo es requerido para el deploy de la aplicación en Microsoft Azure
    > Inclui script en package.json para iniciar la app
        > "start": "node ./build/main.js"
    > Ademas de cambiar la variable de ambiente puerto y tomarlo de la variable de entorno de node js
        > process.env.PORT

# Incluir seguridad (cors, validacion de headers: token auth)
