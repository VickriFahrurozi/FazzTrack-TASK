const cekHariKerja =(day) =>{
    return new Promise((resolve, reject)=>{ //harus pake return karena kalau ga pake return ga bisa di catch then try catch
        setTimeout(() => { //
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// const getname = async () =>{} ini cara pake arrow function async
async function fetch(){
   
    try{
        const hasil = await cekHariKerja("SENIn".toLocaleLowerCase())
        console.log("Berhasil")
    }
        catch(error){
          console.log(`${error} YEYEYE`)
        }
    }
    fetch()


cekHariKerja("sela".toLocaleLowerCase()).then((dataDay)=>{
console.log("Hari ini Hari Kerja")
}).catch((Error)=>{
    console.log({Error})
}).finally(()=>{
    console.log("Proses Telah Selesai Dilakukan")
})


















