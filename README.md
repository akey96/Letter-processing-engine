# Niño Mensajero

## Comenzando 🚀

Descargar el codigo fuente de los repositorios de gitlab

```
git clone https://gitlab.com/lurianne/el_nino_mensajero.git
```

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Tener instalado:
- Java 1.8
- gradle
- Postgres
- Angular CLI

La base de datos configurada con:
```
USER=lirium
PASSWORD=Lirium123
DATABASE=ninio_mensajero
PORT=5432
```

### Instalación 🔧

#### Backend-server
Ingrese a la carpeta ninio_mensajero
```
cd ninio_mensajero
```
compilamos el proyecto con gradle
```
gradle build
```

levantamos el servidor en ambiente de desarrollo
```
gradle bootRun
```

#### Client Angular
Ingrese a la carpeta el-ninio-mensajero-ui

```
cd el-ninio-mensajero-ui
```

instalamos las dependencias con npm
```
npm install
```

levantamos el servidor  de angular para ambiente de desarrollo
```
ng serve
```

ingresamos con un navegador a la url:
```
http://localhost:4200
```

## Deployment 📦

....


## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://gitlab.com/lurianne/el_nino_mensajero/wikis/home)


## Autores ✒️

* **Alvaro Yapu Cossio** - *Reseach,Desarrollo* 
* **Gabriela Nataly Torrico** - *Product Owner, Desarrollo*
* **Fernando Soto Lavayen** - *Desarrollo* 
* **Alexander Mamani Yucra** - *Desarrollo* 
* **Roxana Quispe Condori** - *Documentacion* 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles
