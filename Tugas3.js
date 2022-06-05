const SeleksiNilai = (awal,akhir,array=[]) => {
if(awal<=akhir && array.length >=5)
{   
    let hasil =[]
    let b=0
    array.sort(function(a, b){return a - b});
    for (let i=0 ; i<array.length;i++)
        {
            if(array[i]>=awal && array[i]<=akhir)
            {
                hasil[b] = array[i]
                b++
            }
        }
    return (hasil)
}
else if (awal<=akhir && array.length <5)
{
return("Jumlah angka dalam dataArray harus lebih dari 5")
}
else if ((awal>akhir && array.length >=5))
{
return("Nilai akhir harus lebih besar dari nilai awal")
}
else {
    return("Nilai akhir harus lebih besar dari nilai awal,Jumlah angka dalam dataArray harus lebih dari 5")
}
}

console.log(`${SeleksiNilai(24, 100 , [100,50,75,1,0,-1,10])}`)
