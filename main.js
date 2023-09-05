//looping

//main game suwit jawa //
var tanya = true;
while ( tanya ) {

    // mengkap pilihan player //
    var p = prompt('pilih : Gajah, Semut, Orang')

    // menangkap pilihan komputer //
    // membangkitkan bilangan random //
    var comp = Math.random();

    if( comp < 0.33 ) {
        comp = 'Gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }
    console.log(comp);

    //menentukan rules //
    if( p == comp ) {
        hasil = 'SERI';
    } else if( p == 'Gajah') {
        hasil = ( comp == 'Orang ' ) ? 'Menang' : 'Kalah'
    } else if( p == 'Orang' ) {
        hasil = ( comp == 'Gajah ' ) ? 'Kalah' : 'Menang'
    } else if( p == 'Semut' ) {
        hasil = ( comp == 'orang ' ) ? 'Kalah' : 'Menang'
    } else {
        hasil = 'Memasukan pilihan yang salah (perhatikan huruf besar dan kecilnya yaa)'
    } 

    // tampilkan hasilnya //
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasi sudah bermain')









