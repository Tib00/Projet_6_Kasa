import './owner.scss'

const Owner = ({ host }) => {
    return (
      <div className="owner-container">
        <p>{host.name}</p>
        <img src={host.picture} alt="host" className="rounded-photo" />
      </div>
    );
  }
  
  export default Owner;