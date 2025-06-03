import {Link, useParams} from "react-router-dom";
import {format, getDataPath} from "../utils/utils.ts";

export default function SubcategoryPage(){
    const {section, subcategory} = useParams()
    const concepts = Object.keys(getDataPath(section!, subcategory!))
    return <>
        <h1>{format(subcategory!)}</h1>
        <nav>
            <h2><Link to={'/'}>← Back to Home Page</Link></h2>
            <h2><Link to={`/${section}`}>← Back to {format(section!)}</Link></h2>
            {
                concepts.map((name ) =>
                    <h2 key={name}>
                        <Link to={`/${section}/${subcategory}/${name}`}>{format(name)}</Link>
                    </h2>
                )
            }
        </nav>
    </>
}