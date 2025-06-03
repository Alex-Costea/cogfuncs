import {Link, useParams} from "react-router-dom";
import {capitalize, getDataPath} from "../utils/utils.ts";

export default function SectionPage()
{
    const {section} = useParams()
    const subcategories = Object.keys(getDataPath(section!))
    return <>
        <h1>{capitalize(section!)}</h1>
        <nav>
            <h2><Link to={'/'}>← Back to Home Page</Link></h2>
            {
                subcategories.map((name ) =>
                    <h2 key={name}>
                        <Link to={`/${section}/${name}`}>{capitalize(name)}</Link>
                    </h2>
                )
            }
        </nav>
    </>
}