

const Header = () => {
  return (
    <div>
        <div className='flex justify-around bg-slate-100 fixed top-0 left-0 right-0'>
            <img className="ml-7" src="/public/images/Roomly logo.png" alt="" width={100} /> 
            <div dir='rtl' className="content-center space-between">     
                <button className="w-20 h-7 mr-12 bg-black rounded-lg shadow-2xl text-white text-sm hover:bg-blue-700">Sign up</button>
                <button className="w-20 h-7 mr-5 rounded-lg text-center shadow-2xl text-base hover:bg-blue-700">Login</button>    
            </div>
        </div>  
        
    </div>
  )
}

export default Header