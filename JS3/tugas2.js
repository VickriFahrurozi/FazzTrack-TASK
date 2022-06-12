const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            return callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    },0)
}

// const callback = ((asal ,bulan)=>{
// for(let i=0 ;i<month.length;i++)
//     {
//        if(bulan == month[i])
//         {
//             for(let a=i ; a<month.length;a++)
//                 {
//                 console.log(month[a])
//                 }
//                 break
//         } 
//     }

// })

function namafungsi(number,month){
 
    if(number==null) {month.map((item)=>{console.log((item))})}
    else { console.log(number)}
}
   // if(a!=null){
    // })
    // for(let i=0 ; i<month.length;i++)
    //     {
    //         if (a.toLowerCase()==month[i].toLowerCase()) 
    //             {
    //                 for (let a= i ; a<month.length;a++)
    //                     {
    //                         console.log(`${month[a]}`)
                           
    //                     } 
    //                     break 
    //                 } 
    //     }
    // }
    // else{
    //     console.log("Nilai Tidak Boleh Null")
    // }

// const namafungsi = (error)=> {
// console.log(error)
// }


(getMonth(namafungsi))


