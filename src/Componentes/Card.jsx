

// eslint-disable-next-line react/prop-types
function Card({ title, imageSrc, description })  {
    
    
    
    return (

        <>
            <div className="card">
                <img src={imageSrc} alt={title} />   
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>

                </div>

          </div>
        
        
        </>
    )
    
}
export default Card 