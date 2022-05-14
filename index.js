const enviar = require('./enviar')

const getData = require ('./getData')
const url = require('url')
const http = require('http')
const fs = require('fs')
const axios = require('axios')
const uuid = require('uuid')

http
    .createServer(async (req, res) => {
        let { correos, asunto, contenido } = url.parse(req.url, true).query

        if (req.url === '/') {
            res.setHeader('content-type', 'text/html')
            fs.readFile('index.html', 'utf8', (err, data) => {
                res.end(data)
            })
        }
        if (req.url.startsWith('/mailing')) {
            const { uf, dolar, euro, utm } = await getData()
            const mensaje = contenido + `
            <p>El valor del dólar el día de hoy es: ${dolar}</p><br>
            <p>El valor del euro el día de hoy es: ${euro}</p><br>
            <p>El valor del UF el día de hoy es: ${uf}</p><br>
            <p>El valor del UTM el día de hoy es: ${utm}</p><br>
            
            `
            enviar(correos.split(','), asunto, mensaje).then(()=>{
                fs.writeFile(`${uuid.v4()}.txt`, `${correos.split(',')}\n ${asunto}\n ${mensaje}`, 'utf-8', () => {
                    res.end('Se han enviado los correos exitosamente. Para confirmar, revise su bandeja de entrada.')
                })
            }).catch(() => {
                res.end('No se han podido enviar los correos. Verifique los datos e inténtelo nuevamente.')
            })
            
        }
    }).listen(3000, () => console.log('Server ON Port 3000'))