## Spam economy spa
### Requisitos

1. Usar el paquete nodemailer para el envío de correos electrónicos.
2. Crear una función que reciba la lista de correos, asunto y contenido a enviar. Esta
función debe retornar una promesa.
3. Realizar una petición a la api de mindicador.cl y preparar un template que incluya los
valores del dólar, euro, uf y utm. Este template debe ser concatenado al mensaje
descrito por el usuario en el formulario HTML.
4. Enviar un mensaje de éxito o error por cada intento de envío de correos electrónicos.
5. Cada correo debe ser almacenado como un archivo con un nombre identificador
único en una carpeta “correos”. Usar el paquete UUID para esto.


