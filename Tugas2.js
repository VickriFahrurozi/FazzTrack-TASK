const searchName = (cari,size,jenis) => 
{
    if (size>0){
        return (jenis(cari,size))
    }
    else
    {
        return("Parameter kedua harus lebih besar dari 0")
    }    
}

const callback = (huruf,jumlah) => 
{
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
    let batas =0 
    let hasil=[]
    for(let i=0 ; i<name.length ; i++)
    {
        let cek = name[i].search(huruf)
        if(cek != -1)
        {
 
            if(batas<jumlah)
            { 
                hasil[batas] =name[i]
                batas++ 
            }
            else
            {
                break
            }
        }
        else if(i==name.length-1 && batas==0)
        {
            return("Hasil Pencarian Tidak Ditemukan")
        }
    }

    return (hasil)
}

console.log (`${searchName('iv',3,callback)}`)
