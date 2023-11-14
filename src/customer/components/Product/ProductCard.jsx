import './ProductCard.css'
const ProductCard = () => {
  return (
    <div  className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11447514/2020/2/17/024d8bec-47f9-4549-8acb-e1240a9550fe1581927650625-Bollywood-Vogue-Made-To-Measure-Blue-Digital-Print-V-Neck-Go-1.jpg" alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>Brand</p>
            <p className=''>Dress of color</p>
        
        <p className='font-semibold opacity-50'>blue</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹345</p>
            <p className='opacity-50 line-through'>₹500</p>
            <p className='text-green-600 font-semibold'>20% off</p>
        </div>
        
    </div>
   </div>
  )
}

export default ProductCard