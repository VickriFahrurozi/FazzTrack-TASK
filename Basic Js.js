const prompt = require("prompt-sync")({sigint:true})
let pilihan 

function tampilan() 
{
console.log("TUGAS WEEK-2 JS")
console.log("List Tugas")
console.log("1.Array and Object")
console.log("2.Nilai Rata-Rata UN")
console.log("3.Segitiga Terbalik")
console.log("4.Spread and Destructing")
console.log("5.Exit")
}

function hitung(a,b,c,d)
{
let hasil,average 
average = (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d))/4

      if(average>=90 && average<=100)
        {
          hasil='A'
        }
        else if(average>=80 && average<90)
        {
          hasil='B'
        }
        else if(average>=70 && average<80)
        {
          hasil='C'
        }
        else if(average>=60 && average<70)
        {
          hasil='D'
        }
        else if(average>=0 && average<60)
        {
          hasil='E'
        }
      
console.log(`Nilai Rata-Rata Kamu Adalah = ${average}`)
console.log(`Grade Kamu Adalah =  ${hasil}`)
}

function nomor1 () 
{
  const biodata = 
  {
  name : "Vickri Fahrurozi",
  age : 22 ,
  hobbies : ['Makan','Tidur'],
  IsMarried : false,
  schoolList :
           [
             {name : "SMAN 16 Kab.Tangerang",
             yearin : 2014 ,
             yearOut :2017 ,
             major:"IPA"},

              {name : "Universitas Esa Unggul",
              yearin : 2017 ,
              yearOut :2021 ,
              major:"Teknik Informatika"}
           ],
  skills :
           [
              {skillName : "C++",
              level : "Advanced"},
              
              {skillName : "System Analyst",
              level : "beginner"}
           ],
  interestInCoding : true
  }
  console.log(biodata)
  let enter = prompt("\n\nPress Enter To Continue...")
}

function nomor2()
{
const nilai = [4]
let a,b,c = '' 
nilai[0] = prompt("Masukan Nilai Ujian IPA Kamu = ")
nilai[1] = prompt("Masukan Nilai Ujian Bahasa Indonesia Kamu = ")
nilai[2] = prompt("Masukan Nilai Ujian Bahasa Inggirs Kamu = ")
nilai[3] = prompt("Masukan Nilai Ujian Matematika Kamu = ")



if (nilai[0].length==0 || nilai[1].length==0 || nilai[2].length==0 || nilai[3].length==0  )
  {
    console.log("\nInputan Tidak Boleh Kosong , Harus Berupa Angka , Range Angka 1-100 !!")
  } 
 else if(nilai[0] >=0 && nilai[0] <=100 && nilai[1] >=0 && nilai[1] <=100 && nilai[2] >=0 && nilai[2] <=100 && nilai[3] >=0 && nilai[3] <=100  )
  {
  hitung(nilai[0],nilai[1],nilai[2],nilai[3])
  }
/*
  else if(nilai[0] <0 || nilai[0] >100 || nilai[1] <0 || nilai[1] >100 || nilai[2] <0 || nilai[2] >100 || nilai[3] <0 || nilai[3] >100  )
  {
    console.log("\nInputan Tidak Boleh Kosong , Harus Berupa Angka , Range Angka 1-100 !!")
  }
 */
  else
  {
    console.log("\ninputan Tidak Boleh Kosong , Harus Berupa Angka , Range Angka 1-100 !!")
  } 

let enter = prompt("\n\nPress Enter To Continue...")
}

function nomor3()
{
const printSegitiga = prompt("Masukan Jumlah Baris = ")
const a =printSegitiga
let hasil;

  if(printSegitiga >0 )
  {
  segitigabaris(printSegitiga);
  }

  else if(printSegitiga==0)
  {
  console.log("Jumlah Baris Tidak Boleh 0")
  }

  else
  {
    console.log("Silahkan Masukan Inputan yang valid")
  }

  let enter = prompt("\n\nPress Enter To Continue...")
  function segitigabaris(angka)
  {
  for (let cek = angka ; cek>0 ; cek--)
   {
      for (let printbaris = 1 ; printbaris<= cek ; printbaris++)
         {
           if(printbaris==1)
             {
                hasil= printbaris+' '
             }
             else
              {
              hasil = hasil + printbaris +' '
              }
         }
        console.log(hasil);
   }
 }
}

function nomor4()
{
  let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
 console.log(`Data Awal = `)
 console.log(data)

    const ubah = {
      ...data,
      name : prompt("Input Nama Baru = "),
      email : prompt("Input Email Baru = "),
      hobby : prompt("Input Hobby = ")
    }
    console.clear()
    console.log(`\nHasil Ubah Data =`)
    console.log(ubah)
 
console.log("\n\nDestructuring (Street,City)= ")
    const {address:{street,city}} = data
    const getdata = {
      address :
        {
          street : street ,
          city : city,
        }
    }
    console.log(getdata)
    let enter = prompt("\n\nPress Enter To Continue...")
  }

  
do
{
  console.clear()
  tampilan()
  pilihan = prompt("Masukan Pilihan (1-5) = ")
 

  switch (pilihan)
    {
      case '1' :
        console.clear()
        nomor1()
        break
      
        case '2' :
          console.clear()
          nomor2()
          break

      case '3' :
        console.clear()
        nomor3()
        break

        case '4' :
          console.clear()
          nomor4()
          break
      
      case '5' :
        console.clear()
        process.exit()
        break
      
      default :
      console.log("Pilihan Anda Tidak Terdaftar !!")
      let enter = prompt("\n\nPress Enter To Continue...")
      break
    }
 }
 while(pilihan!=5)