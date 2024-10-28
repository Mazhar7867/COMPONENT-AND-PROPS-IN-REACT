 import {IconHeart,IconStarFilled,IconStarsFilled} from '@tabler/icons-react';
 const ProductCard =(props)=>{
    return(
        <div className="border rounded p-2 border-gray-400">
            <div className='flex justify-end'>
            <IconHeart/>
            </div>
            <div>
                <img src={props.imageUrl}></img>
            </div>
            <div className='flex'>
            <div className='rounded-full bg-sky-100 py-2 px-4 flex gap-1 items-center'>
                 4.8<IconStarFilled size={12} />50
            </div>
            </div>

            <div className='text-gray-600'>
                {props.ProductName}
            </div>
            <div className='flex justify-between'>
                <div>
                    <p>Size Wide</p>
                    <p>RS2000</p>
                </div>
                <div className='flex gap-1'>
                    <div className='h-6 w-6 rounded-full bg-red-700' ></div>
                    <div className='h-6 w-6 rounded-full bg-gray-700' ></div>
                    <div className='h-6 w-6 rounded-full bg-blue-700' ></div>
                    </div>
            </div>
            <div>types</div>
            <div></div>
        </div>
    ) 
 }
 export default ProductCard;