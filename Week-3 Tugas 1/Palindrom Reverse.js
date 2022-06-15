const palindrom = (a)=>
{ 
if(typeof(a)=='string')
{
const b= a.toLowerCase().split("")
for(let i=0 ;i<a.length;i++)
{
 if(b[i] != b[(b.length-1)-i])
 {
 return(`Bukan Polindrom \n${a.split(" ").reverse().join(" ")}`)
}
}
return(`Polindrom \n${a.split(" ").reverse().join(" ")}`)
}
else{return("Format Harus String !")}
}
console.log(palindrom(123321))