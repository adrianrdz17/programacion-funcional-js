const axios = require('axios');

// const conteoRegresivo = (a) => {
//     if(a<0) return;
//     console.log(a);
//     return(conteoRegresivo(a-1))
// }

// conteoRegresivo(10)

const llamarApi = async(url, llamados = 0) => {
    try {
        const { data } = await axios.get(url)
        console.log(data)
        return data
    } catch(e) {
        if(llamados > 5) {
            return ''
        }

        console.log(e);
        return llamarApi(url, llamados + 1)
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users');