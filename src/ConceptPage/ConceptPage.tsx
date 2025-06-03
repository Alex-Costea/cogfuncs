import {Link, useParams} from "react-router-dom";
import {format, findConceptReferences, getDataPath} from "../utils/utils.ts";
import GenericConceptPage from "../GenericConceptPage/GenericConceptPage.tsx";

export default function ConceptPage()
{
    const { section, subcategory, item } = useParams()
    const concept = getDataPath(section!, subcategory!, item!)
    const conceptEntries = Object.entries(concept).filter(
        ([key]) => key !== 'type'
    )
    const linksHere = findConceptReferences(item!)

    return<>
        <nav>
            <strong><Link to={'/'}>← Back to Home Page </Link>
                <Link to={`/${section}`}>← Back to {format(section!)} </Link>
                <Link to={`/${section}/${subcategory}`}>← Back to {format(subcategory!)} </Link></strong>
            <GenericConceptPage item={item!} conceptEntries={conceptEntries} linksHere={linksHere}/>
        </nav>
    </>
}