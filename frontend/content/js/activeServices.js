//! shared data
window.addEventListener('load', () => {
  const mainUrlApi = 'http://localhost:3000/api/'
  const serviceTitle = document.querySelector('.services_title')

  fetch(`${mainUrlApi}services/1`)
    .then(res => res.json())
    .then(services => {
      // console.log(services);
      services.forEach(service => {
        serviceTitle.insertAdjacentHTML('afterend', `
              <div class="active_service_box d-flex align-items-center vazir_fb">
              <span
                class="active_servise_icon d-flex align-items-center justify-content-center"
              >
                <i class='${service.icon}'></i
              ></span>
              <div class="active_service_desc">
                <h4>${service.title}</h4>
                <h6>${service.maxDate}</h6>
              </div>
            </div>
              `)
      });
    })
})






