const FazzFood = (harga,voucher,jarak,pajak)=>{
    
    if(typeof(harga,jarak)=='number' && 
       typeof(pajak)=='boolean' )
        {
            let ongkir = 5000
            let ppn =0
            for(let i=3;i<=jarak;i++)
                {
                ongkir = ongkir+3000
                }
            if(pajak==true)
                {
                    ppn= (harga/100)*5
                }
        const potongan =voucher(harga)
        const total = harga-potongan+ongkir+ppn
        return (
        `Harga = ${harga}
        Potongan = ${potongan}
        Ongkir = ${ongkir}
        Pajak = ${ppn}
        Sub Total = ${total}
        `)
        }
    
        else { 
            return("Tipe Data Harga & Jarak Harus Number dan pajak harus boolean")
        }
    }


const fazzfood50 =(harga) => {
    if(harga>=50000)
        {
            let potongan = harga/2
            if(potongan>=50000)
                {
                    potongan = 50000
                }
        return potongan
        }
    else {
        potongan =0 
         return (potongan) 
    }
}

const ditraktir60 =(harga) => {
    if(harga>=25000)
    {
        let potongan = (harga/100)*60
        if(potongan>=30000)
            {
                potongan = 30000
            }
    return potongan
    }
else {
    potongan =0 
    return potongan
} 
}

try {
console.log(FazzFood(75000,fazzfood50,5,true
))
}
catch{
    console.log("Kode Promo Salah !!")
}