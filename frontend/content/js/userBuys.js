


window.addEventListener('load', () => {
    const mainUrlApi = 'http://localhost:3000/api/'
    let userBuyPackesTavle = document.querySelector('.recommend_packate_table')
    let tBody = document.querySelector('tbody')
    let userToken = localStorage.getItem('userToken')

    fetch(`${mainUrlApi}user-buy`, {
        method: 'GET',
        headers: {
            authorization: userToken
        }
    })
        .then(res => res.json())
        .then(packes => {
            console.log(packes);
            packes.forEach(packe => {
                tBody.insertAdjacentHTML('beforeend', `
                <tr>
                <td>${packe.maxDate}</td>
                <td>${packe.title}</td>
                <td>${packe.price}</td>
                <td>${packe.off}%</td>
                <td>
                    <button class="btn buy_packate_btn lalehzar_font">خرید</button>
                </td>
              </tr>
                `)
            });
        })

})




















