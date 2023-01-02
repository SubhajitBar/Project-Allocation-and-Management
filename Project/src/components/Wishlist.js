import WishProjects from "./WishProjects";
import useFetch from "./useFetch";


const Wishlist = () => {

    const { data: projects, isPending, error } = useFetch('http://localhost:8000/projects')

    return (
        <div className="wishlist" >
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {projects && <WishProjects projects={projects} />}
        </div>
    );
}

export default Wishlist;