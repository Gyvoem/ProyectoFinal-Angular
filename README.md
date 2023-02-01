# Proyecto Final - Angular
## Trabajo Grupal
Integrantes:
- ARACELI PONCE SANGA
- EDILT LUZ TORIBIO FLORES
- MARWIN WLADIMIR GARAY MONTOYA
- JHYM STONY HUALLA MUÑOZ


> GITHUB PAGE: https://araceliponce.github.io/ProyectoFinal-Angular/
* * *
> El proyecto final tiene un menú de navegación con Angular Material. 
>  - El menú contiene las opciones Home, Usuarios, Contacto, Perfil y Login.
>  
> ![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/LOGINL%20A.jpg)
>
>  - No se puede navegar si no se inicia sesion.
>  
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/SIN%20HACER%20LOGIN.jpg)
>
> El formulario login cuenta con validaciones.
> 
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/LOGIN%20B.jpg)
>
> Además tiene un usuario estatico para iniciar sesión
> 
> - Usuario: unite
> - Pass: 123456
> 
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/BOTON%20ACTIVADO.jpg)

>  Cuando el usuario logea, este le redirecciona a Home. 
> 
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/BIENVENIDO.jpg)
>
>  El formulario de contacto cuenta con validaciones tipo required.
>  Si los datos ingresados son correctos, al presionar el botón Enviar, la aplicación debe mostrar una alerta de tipo dialog con el mensaje “Gracias por contactarnos”
>
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/CONTACTO.jpg)
>
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/2contacto.png)
>
> - Al seleccionar la opción Usuarios, la aplicación muestra en una tabla los usuarios alojados en una api. 
> - Para realizar esta funcionabilidad, se cuenta con un interceptor que realiza la petición y muestre los datos de un servicio en JSON.
> - La URL es la Api: http://jsonplaceholder.typicode.com/users/
>
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/TABLA.jpg)
>
> Perfil muestra nos nombres de los integrantes del grupo
>
>![iNICIO](https://github.com/Gyvoem/ProyectoFinal-Angular/blob/master/src/assets/PERFIL.jpg)
>
>> El proyecto esta compilado en la aplicación angular y realiza el despliegue en Firebase Hosting.
>
>> Link FIREBASE: FIREBASE:https://final-134.web.app/
> 
* * *
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
