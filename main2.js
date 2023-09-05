// pengkondisian switch //

var item = prompt('masukan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default :
        alert('makanan / minuman TIDAK TERDETEKSI');
        break;
               
}


// Pengkondisian//
var mahasiswa = "Anis fathoni"
var nilai = prompt('Tolong Berikan penilaian 1-100 pada website portfolio ini!:');
alert('Portfolio Anis fathoni mendapat point ' + nilai);


if (nilai >= 80 && nilai <= 100) {
    alert(mahasiswa + " mendapatkan nilai A");
} else if (nilai >= 65 && nilai <= 79) {
    alert(mahasiswa + " mendapatkan nilai B");
} else if (nilai >= 50 && nilai <= 64) {
    alert(mahasiswa + " mendapatkan nilai C");
} else if (nilai >= 35 && nilai <= 49) {
    alert(mahasiswa + " mendapatkan nilai D");
} else if (nilai >= 0 && nilai <= 34) {
    alert(mahasiswa + " mendapatkan nilai E");
} else {
    alert("Nilai " + mahasiswa + " invalid!");
}