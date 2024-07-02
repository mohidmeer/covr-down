
const ServicesLayout = ({children,title}) => {
    return (
      <div className='flex flex-col gap-4 w-full'>
              <div className='f'>
                  <h5>{title}</h5>
              </div>
              <div className="mt-5">
                  {children}
              </div>
      </div>
    )
  }
  
  export default ServicesLayout