const GlassBar = () =>{
    const quicklink =[
        "EYEGLASSES",
        "SCREENGLASSES",
        "KIDSGLASSES",
        "CONTACTGLASSES",
        "SUNGLASSES",
        "HOME EYE-TEST",
        "STORE LOCATOR"
      ]
    return(
        <div className="flex justify-between px-4 py-2  bg-gray-100 items-center">
  <div className="flex gap-2  text-blue-950 font-bold ">
{
quicklink.map((links)=>{
   return(
 <span className="pl-2 text-xs"> {links} </span> 
   )
})
}
 </div >
 
 <div className="flex h-8 gap-1">

<img className="rounded" src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"></img>
<img className="rounded" src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"></img>
<img className="rounded" src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"></img>
 </div>
</div>
 )
}
export default GlassBar;