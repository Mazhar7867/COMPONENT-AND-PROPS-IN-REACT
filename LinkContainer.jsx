const LinkContainer = () =>{
    const quicklinks = [
        "Do More, Be More",
        "tryin3d",
          "storelocator",
          "singapore",
          "UAE",
          "John Jacobs",
          "Aqualense",
          "cobrowsing",
          "engineering blogs",
          "partner with us"
      ]

    return(
        <div className="flex justify-between px-4 py-2">
        <div className="flex gap-2 divide-x divide-gray-400">
      {
      quicklinks.map((link)=>{
         return(
       <span className="pl-2 text-xs"> {link} </span> 
         )
      })
      }
       </div>
      
      <span className=" text-xs">Contact us</span>
      </div>
      
    )
}
    export default LinkContainer