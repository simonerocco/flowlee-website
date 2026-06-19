import "../style.css";
export function Card(){
    return (
      <div className="card">
        <div className="card-content">
        <h3 className="card-title">Card Title</h3>
        <p className="card-description">This is a description of the card.</p>
        </div>
        <div className="card-img">
         <img src="https://via.placeholder.com/150" alt="Card Image" />
        </div>
      </div> 
    );
}