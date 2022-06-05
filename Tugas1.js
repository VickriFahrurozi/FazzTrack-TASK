// 10 built in function

/*
1.split()
Split merupakan built in function yang berfungsi untuk memisah kata dari suatu string berdasarkan pembatas yang kita tentukan  ,hasil split akan di tampilkan dalam sebuah array

2. Reverse()
Reverse berfungsi untuk membalik urutan/index dari suatu array , hasilnya index pertama akan menjadi index terakhir , begitu sampai index terakhir menjadi index pertama

3.join()
join berfungsi untuk menggabungkan isi dalam suatu array kedalam sebuah string

4.push()
push berfunsi untuk menambahkan elemen kedalam suatu array ,element tersebut nantinya akan berada di index terakhir + 1 dan seterusnya dari array tersebut

5.replace()
replace berfungsi untuk mengganti kata/element tertentu yang berada dalam sebuah string/kalimat/kata

6.search()
search berfungsi untuk mencari element tertentu dari sebuah string/kalimat/kata yang ada, method search akan mereturn angka -1 jika hasil pencarian tidak ditemukan dan akan mereturn index dari element pertama yang dicari apabilan hasil pencarian ditemukan

7.sort()
sort berfungsi untuk mengurutkan angka/kalimat/kata/element dari daftar yang tersedia ,namun ada sedikit perbedaan penulisan pengurutan string dan number

8.length
length berfungsi untuk mengetahui panjang dari suatu array/suatu string . untuk method length penulisannya tidak pakai tanda " () "

9.slice()
slice berfungsi untuk memisahkan element dalam array pada jangkauan index tertentu  dan mengassign element pilihan tersebut kedalam sebuah array baru

10. indexOf()
indexOf berfungsi untuk mencari index dari suatu element dalam sebuah array
*/

const split ="Contoh Penggunaan Split"
console.log(split.split(" ")) //kata dipisah berdasarkan " " atau spasi yang ada dalam string tersebut

const reverse = ["penggunaan","reverse"]
console.log(reverse.reverse()) //

const join = ["penggunaan","method","join"]
console.log(join.join(" ")) //tiap element dalam array akan dipisahkan dengan spasi , jadi tidak menyatu

const push = ["penggunaan","push"]
push.push("di","javascript") //"di" dan "javascript" akan berada pada index ke 2 dan 3 dari array push
console.log(push)

const replace = "contoh penggunaan replace di javascript"
const hasilreplace = replace.replace("di","dalam") //dalam method reverse , terdapat 2 parameter yang bisa di isi , parameter pertama merupakan kata yang akan di replace. parameter kedua merupakan kata pengganti kata pertama
console.log(hasilreplace)

const search = "Penggunaan Method Search"
const hasilsearch = search.search("Method") //method search mencari kata "Method" dalam kalimat "Penggunaan Method Search"
if(hasilsearch!= -1) //jika element ditemukan , maka variable hasilsearch akan mereturn angka -1
    {
        console.log("Element Ditemukan")
    }
    else {
         console.log("Element Tidak Ditemukan")
}

const sort1 = ["C","A","D","B","E"]
const sort2 = [5,23,47,23,5,24,3,1235,2,12,62,4,436,234]
console.log(sort1.sort()) //untuk tipe data string, cukup memakai sort() saja
console.log(sort2.sort(function(a, b){return a - b})); // untuk tipe data number , harus menggunakan penulisan tambahan seperti ini 

const length1 =[1,2,4,1,5,1,2] 
const length2 = "Contoh Penggunaan Sort"
console.log(length1.length) 
console.log(length2.length)

const slice = [1,2,3,4,5,6,7,8,9,11,2,3,2,34] 
const hasilslice = slice.slice(3,6) //dalam method slice terdapat 2 parameter yang bisa di isi , tipe datanya number , parameter pertama merupakan index dimana slice dimulai , dan parameter kedua merupakan index terakhir dari array tersebut dikurang 1
console.log(hasilslice)

const indexOf = ["C","A","D","B","E"]
const indexOfindex = indexOf.indexOf("C") //method indexOf akan mencari posisi element dari "C" , apabila tidak ditemukan element C dalam array tersebut , maka akan di return -1
console.log(indexOfindex)  