const  AppHeader = () =>{
    return(
        <div className="flex justify-between items-center">
  {/* logo */}
 <div>
    <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="lenskart-logo"></img>
 </div>

  {/* contact no and search-box */}
 <div className="flex gap-10">
  {/* contact */}
   <div className="text-blue-950 font-bold items-center">
    99998 99998
   </div>

  {/* searchbox  */}
  <input placeholder="What are you looking for ?" className="border border-blue-950 w-[650px] rounded py-1 px-2" ></input>
 </div>

   {/* actions   */}
 <div className="flex gap-6 items-center pr-4 text-sm">
  <div>Track Order</div>
  <div>Sign in & Sign up</div>
  <div>Wishlist</div>
  <div>Cart</div>
 </div>

</div>

    )
}
export default AppHeader;