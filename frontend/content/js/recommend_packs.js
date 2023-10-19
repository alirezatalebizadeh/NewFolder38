
//! get recommend packet from db
window.addEventListener('load', () => {
    const mainUrlApi = 'http://localhost:3000/api/'


    const recommendPacketsTable = document.querySelector('.recommend_packate_table')
    let userToken = localStorage.getItem('userToken')

    const BodyTable = document.querySelector('tbody')


    fetch(`${mainUrlApi}recommended-packs`, {
        method: 'GET',
        headers: {
            authorization: userToken
        }
    })
        .then(res => res.json())
        .then(packets => {
            if (packets.length) {
                packets.forEach(pack => {
                    BodyTable.insertAdjacentHTML('beforeend', `
                    <tr>
                <td>${pack.maxDate}</td>
                <td>${pack.title}</td>
                <td>${pack.off}%</td>
                <td>${pack.price}</td >
                <td>
                    <button class="btn buy_packate_btn lalehzar_font">خرید</button>
                </td>
              </tr >
                    `)
                });
            } else if (!packets.length) {
                recommendPacketsTable.insertAdjacentHTML('afterend', `
                <h2 class='text-center vazir_fb'>بسته فعالی وجود ندارد</h2>
                `)
            }
        })
})