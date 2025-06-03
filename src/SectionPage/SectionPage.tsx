import {Link, useParams} from "react-router-dom";
import {format, getDataPath} from "../utils/utils.ts";

export default function SectionPage()
{
    const {section} = useParams()
    const subcategories = Object.keys(getDataPath(section!))
    return <>
        <nav>
            <strong><Link to={'/'}>← Back to Home Page</Link></strong>
        </nav>
        <h1>{format(section!)}</h1>
        <nav>
            {
                subcategories.map((name ) =>
                    <h2 key={name}>
                        <Link to={`/${section}/${name}`}>{format(name)}</Link>
                    </h2>
                )
            }
        </nav>
    </>
}