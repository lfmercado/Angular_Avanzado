como generar un componente
    ** Para generar un componente solamente se necesita el comando "ng g c" que son las siglas de
    "ng generate component" + el nombre del componente
    ** Para generar un componente sin hoja de estilos css ni spec <- que son para la e2e
    utilizamos las bandera -it <-inline template <-Con esto quitamos el HTML
    para quitar el spec es: --spec=false
    para el css es: -is  <-inline style

    **ng serve -o por medio de este comando arrancamos el servidor y se abre el navegador de manera automatica
    
    Input   --> Componente padre le pasa datos al componente hijo
    Output  --> Componente Hijo le pasa datos al padre

    Cuando se quiere hacer un input las variables tipo input se declaran en el componente hijo para indicarle al 
    componente que se va a recibir datos del componente padre.
    de esta manera cuando se inserta la etiqueta del componente hijo dentro del padre por medio de esta se le pasan los
    parametros indicandole de donde salen los datos

    Cuando se quiere hacer un Output el componente hijo debe de tener una varible tipo output de tipo EventEmitter que es la
    encargada de emitir datos, para la emision de esos datos se hace por medio de la misma etiqueta que para resivirlos, la
    unica condicion son los nombres de las varibles ya que el componente padre y el componente hijo deben de tener el mismo
    nombre de variables o darles un seudonimo para que se pueda saber donde se van a almacenar los datos que esta emitiendo el hijo