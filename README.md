# Bienvenidos a la prueba de ensayo de un producto

En el siguiente fichero se tomará punto por punto las **decisiones**, **soluciones** y **debates** generados de la arquitectura a la hora de montar el proyecto.


# Estructura del proyecto
La decisión inicial se basa en seguir un proyecto con createScripts o montar una versión alternativa con babeljs.
En este punto y bajo mi punto de visión, en ocasiones, creo que es mejor evitar mantener versiones alternativas a montajes de builders. Dejando el mantenimiento en **Facebook**. Obtendremos mayores beneficios a la larga como actualizaciones..
- Comentando la estructura del proyecto:
	- Al usar TS y React la complejidad proviene de cuanto escalable va a ser el proyecto, en este caso se usa por dividir de forma muy sencilla el proyecto, en **componentes funcionales** en una carpeta, **características principales** para sus **casos de usos**, **estilos** , **la estore**, **libs de utilidades**

## Plugins extras

Para destacar se han añadido paquetes extras en el proyecto como **linters**, **TypesScript**.

## Mayores complejidades  encontrados

La complejidad del reto se encuentra en el sistema offline y mantener persistencia sin un real DB para evitar problemas de concurrencias.

## Soluciones de problemas complejos
- A la utilización de WS y dado a los requisitos de la prueba, la librería expuesta por la web no es valida para un proyecto montado con las características anteriores. Por ese echo se usa puramente JS para la implementación del WS.
- Sincroniza con los websockets y limitaciones con redux, al usar este sistema de redux, hay que implementar algún mecanismo de semáforo. Para evitar duplicidades de eventos indeseados.
- Otra característica reside en el sistema del event listener para el modo offline, es importante recordar remover el listener.

## Comportamientos de ciertos componentes

Se ha decidió crear una serie de componentes comunes, para expandir en caso de necesidad su potencial en el futuro o se pueda extraer a una librería externa debido a que no es quien almacena las acciones sino, que las recibe como callbacks
Ej:	- **LabelCombined**: acepta como parámetros dos acciones, la incorporación de la descripción y un componente extra. Que se consigue con esta decisión y es que a la hora de escalar el proyecto se puede reorganizar el componente y implementar extras **sin apenas mantenimientos.**

## Decisiones de redux
Existe una store con dos tipos de reducers login, todos
Para los reducers los eventos todos recoge tanto las acciones de los adds como los checkbox
Login se incorpora para mantener el estado del usuario logueado en la APP, meramente funcional.


# Concurrencia con los sockets

La manera de comportarse los sockets y en la API proveniente de la web XXXXX. Se implementa de una forma para evitar el spamming y que únicamente se centre en nuestro canal de comunicación. No tiene casi comp


# Docker commands
To build image dev: 
"dockerbuilddev": "docker build -t trazable:dev .",
To run image dev: 
"dockerrundev": "docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true trazable:dev",

> - To build image prod:
> "dockerbuildprod": "docker build -f Dockerfile.prod -t trazable:prod .",
> - To runimage prod: 
> "dockerrunprod": "docker run -it --rm -p 1337:80 trazable:prod"

# Bugs conocidos
[# Version 18 React Doble render useEffect second argument empty array ](https://github.com/facebook/react/issues/24429)

#Utilizando nativamente WS de JS no aparecen en el Chrome Developer Tools
