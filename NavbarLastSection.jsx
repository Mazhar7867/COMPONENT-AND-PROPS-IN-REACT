const NavbarLastSection =()=>{
    const mainsection = [
        "Eyewear",
        "Eyeglasses",
        "Promotions",
        "Eyeglasses",
    ]
    return(

<div className="flex justify-between px-4 py-2 mt-2">
  <div className="flex gap-2 divide-x divide-gray-400">
{
mainsection.map((link)=>{
   return(
 <span className="pl-2 text-xs"> {link} </span> 
   )
})
}
 </div>

<span className=" text-xs  ">problem in placing order $ Give a missed call
  <span className="gap-1 text-blue-950 font-bold" >9999899998</span>
  </span>
</div>
    )
}
export default NavbarLastSection;