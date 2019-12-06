console.log('from public folder, client side js loaded')

// fetch('http://localhost:3000/weather?address=los%20angeles').then(response)=>{
//     response.json().then(data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.forecast)
//             console.log(data.location)
//         }
       
//     }
// }

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

messageOne.textContent = 'from JS placeholder'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    // edited for Heroku
    const url = '/weather?address='+encodeURIComponent(location)

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                messageOne.textContent=data.error
            } else {
                messageOne.textContent =(JSON.stringify(data.forecast))
                messageTwo.textContent =(data.location)
            }

        })
    })
})