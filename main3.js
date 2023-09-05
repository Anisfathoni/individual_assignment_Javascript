// Documen Object Model//

const user = {
    name: 'anfa',
    password: '123',
}

const dataLocation = 'Lampung'


const nameElm = document.getElementById ('name')
const passwordElm = document.getElementById ('password')
const locationElm = document.getElementById ('location')
const btnSubmitElm = document.getElementById ('btn_submit')

btnSubmitElm.addEventListener('click', function (){
    const name = nameElm.value
    const password = passwordElm.value
    const location = locationElm.value

    if (name.length > 0 && password. length > 0) {

        if(name===user.name && password === user.password) {
            alert('anda berhasil masuk')
            if(location.toLowerCase()=== dataLocation.toLowerCase()){
                alert('anda orang lampung')
            } else {
                alert('anda bukan orang lampung')
            }
        } else {
            alert('name dan pasword anda salah')
        }
    } else {
        alert('name dan password harus diisi dulu')
    }
})