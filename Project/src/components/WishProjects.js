import '../index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'

const WishProjects = ({ projects }) => {
    return (
        <div className='container wish-cont'>
            <div className='row g-3'>
                {projects.map(projects => (
                    <div className="col-12 col-md-6 col-lg-4" key={projects.id}>
                        <div className="card bg-dark" >
                            <img src={projects.img} alt='something' />
                            <div className="card-body">
                                <h5 className="card-title">{projects.title}</h5>
                                <p className="card-text">{projects.body}</p>
                                <div className="side-side">
                                    <p className="participants">{projects.strength}/10</p>
                                    <div className='wish-btn'>
                                    <button className='btnWish'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default WishProjects;

