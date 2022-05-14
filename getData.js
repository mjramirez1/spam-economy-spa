const axios = require ('axios').default

const getData = async () => {
    try {
        let { data } = await axios.get('https://mindicador.cl/api')

        const uf = data.uf.valor
        const utm = data.utm.valor
        const euro = data.euro.valor
        const dolar = data.dolar.valor

        return { uf, utm, euro, dolar }
    } catch (err) {
        console.log(err)
    }
}
module.exports = getData