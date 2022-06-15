const fungsi = (number) =>{
    if(typeof(number)=='number')
        {
        const ubah = number.toString().split("") //data diubah ke array string
        if(ubah[ubah.length-1]=='0') //untuk Cek Element terakhir = 0 
            {
                ubah.pop()
            }
        let tampung =[] 
        let tampungindex = [] 
        let index=0
        let tampunghasil =[]
        for (let i=0;i<ubah.length;i++) //looping semua element array
            {
             if(ubah[i]=='0')
                {
                tampungindex[index]=i //assign index array letak 0 berada
                if(index==0)
                    {  
                    tampung[index] = ubah.slice(0,i)
                    tampung[index].sort(function(a, b){return a - b}) //slice array dari index 0 sampe sebelum 0 pertama
                    index++ 
                    }
                else 
                {
                    tampung[index]= ubah.slice(tampungindex[index-1]+1,i) //slice index array diantara 0
                    tampung[index].sort(function(a, b){return a - b})
                    index++
                }

                }
                
                if(i==ubah.length-1) //slice index array terakhir sampe 0 terakhir
                    {
                     tampung[index]= ubah.slice((tampungindex[tampungindex.length-1])+1,ubah.length)
                     tampung[index].sort(function(a, b){return a - b})
           
                    }
            }

            for(let i=0 ;i<tampung.length;i++)
                {
                tampunghasil[i] = parseInt(tampung[i].join(""))
                }
                return(tampunghasil.join(""))
        }
    else{
        return("Harus Masukkan Tipe data Number !")
    }
}
console.log(fungsi(5956560159466056))