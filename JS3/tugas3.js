const hurufvokal =(alphabet) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const huruf = ['a', 'i', 'u', 'e', 'o']
            let cek = huruf.find((item)=>{
                return item === alphabet
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Ini Bukan Huruf Vokal'))
            }
        },0)
    })
}

hurufvokal("B".toLocaleLowerCase()).then((huruf)=>{
    console.log(huruf," Adalah Huruf Vokal")
    }).catch((Error)=>{
        console.log({Error})
    }).finally(()=>{
        console.log("Proses Telah Selesai Dilakukan")
    })

    async function KASUS1(){
        try{
            const hasil = await hurufvokal("A".toLocaleLowerCase())
            console.log("Try Berhasil\n")
        }
            catch(error){
              console.log(`${error} Try Gagal\n`)
            }
        } 
        KASUS1()

const namabenua =(benua) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const wilayah = ['asia', 'eropa', 'afrika', 'australia', 'amerika','antartika']
            let cek = wilayah.find((item)=>{
                return item === benua
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Ini Bukan Benua'))
            }
        }, 1000)
    })
}

namabenua("ashiap".toLocaleLowerCase()).then((region)=>{
    console.log(region," Adalah Benua")
    }).catch((Error)=>{
        console.log({Error})
    }).finally(()=>{
        console.log("Proses Telah Selesai Dilakukan")
    })

    async function KASUS2(){
        try{
            const hasil = await namabenua("Asia".toLocaleLowerCase())
            console.log("Try-Catch Berhasil")
        }
            catch(error){
              console.log(`${error} Try-Catch Gagal YEYEYE`)
            }
        } 
        KASUS2()
