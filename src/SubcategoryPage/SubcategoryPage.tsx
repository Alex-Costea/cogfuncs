import {Link, useParams} from "react-router-dom";
import {format, getDataPath} from "../utils/utils.ts";

export default function SubcategoryPage(){
    const {section, subcategory} = useParams()
    const concepts = Object.keys(getDataPath(section!, subcategory!))
    return <>
        <nav>
            <strong><Link to={'/'}>← Back to Home Page</Link>
                <Link to={`/${section}`}> ← Back to {format(section!)}</Link></strong>
        </nav>
        <h1>{format(subcategory!)}</h1>
        <nav>
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