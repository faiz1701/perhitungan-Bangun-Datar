        //  var tipe = prompt("Masukan tipe bangun datar")

        function bangunDatarComponent(tipe) {
            if (tipe == "persegi") {
                alert("menghitung luas persegi")
                alert("rumus : sisi x sisi")
                var s1 = prompt("masukan nilai sisi")
                var s2 = prompt("masukan nilai sisi")
                var hasil = s1 * s2
                document.write("Persegi <br>")
                document.write("sisi: ", s1, "<br>")
                document.write("sisi: ", s2, "<br>")
                document.write("hasil; ", hasil)
            }
            else if (tipe == "persegi panjang") {
                alert("menghitung luas persegi panjang")
                alert("rumus : panjang x sisi")
                var p1 = prompt("masukan nilai panjang")
                var l1 = prompt("masukan nilai lebar")
                var hasil = p1 * l1
                document.write("Persegi <br>")
                document.write("sisi: ", p1, "<br>")
                document.write("lebar: ", l1, "<br>")
                document.write("hasil; ", hasil)
            }
            else if (tipe == "segitiga") {
                alert("menghitung luas segitiga")
                alert("rumus : 1/2 x alas x tinggi")
                var alas = prompt("masukan nilai alas")
                var tinggi = prompt("masukan nilai tinggi")
                var hasil = 1 / 2 * alas * tinggi
                document.write("segitiga <br>")
                document.write("alas: ", alas, "<br>")
                document.write("tinggi: ", tinggi, "<br>")
                document.write("hasil; ", hasil)
            }
            else if (tipe == "jajar genjang") {
                alert("menghitung luas jajar genjang")
                alert("rumus : alas x tinggi")
                var alas = prompt("masukan nilai alas")
                var tinggi = prompt("masukan nilai tinggi")
                var hasil = alas * tinggi
                document.write("jajar genjang <br>")
                document.write("alas: ", alas, "<br>")
                document.write("tinggi: ", tinggi, "<br>")
                document.write("hasil; ", hasil)
            }
            else {
                alert('bangun datar tidak tersedia')
            }
        }



        function bangunDatar() {
            var bd;
            var inputOne;
            var inputTwo;
            var result;

            bd = prompt("Masukkan Jenis Bangun Datar");
            // inputOne = prompt("Masukkan Sisi Pertama");
            // inputTwo = prompt("Masukkan Sisi Kedua");

            // result = inputTwo * inputTwo;

            // alert(result);   
            bangunDatarComponent(bd)
        }

        bangunDatar();
