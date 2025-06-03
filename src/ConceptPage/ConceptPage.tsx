import {Link, useParams} from "react-router-dom";
import {format, findConceptPath, findConceptReferences, getDataPath, isLink} from "../utils/utils.ts";
import ConceptLink from "../typology/types/ConceptLink.ts";

export default function ConceptPage()
{
    const { section, subcategory, item } = useParams()
    const concept = getDataPath(section!, subcategory!, item!)
    const conceptEntries = Object.entries(concept).filter(
        ([key]) => key !== 'type'
    )
    const mapsBackHere = findConceptReferences(item!)

    function display(value : unknown) : string{
        if(typeof value === 'string')
            return format(value)
        if(isLink(value))
            return format((value as ConceptLink).value)
        return JSON.stringify(value)
    }

    return <>
        <nav>
            <h2><Link to={'/'}>← Back to Home Page</Link></h2>
            <h2><Link to={`/${section}`}>← Back to {format(section!)}</Link></h2>
            <h2><Link to={`/${section}/${subcategory}`}>← Back to {format(subcategory!)}</Link></h2>
        </nav>
        <h1>{format(item!)}</h1>
        {
            conceptEntries.map(([key, value]) =>
                <h2>{format(key)}: {
                    isLink(value)?
                        <Link to={findConceptPath(value.value)!}>{display(value)}</Link>
                        :<strong>{display(value)}</strong>
                }</h2>
            )
        }
        {
            mapsBackHere.length>0?<>
                {mapsBackHere.map(value =>
                    <h2>
                        <Link to={findConceptPath(value.name)!}>{format(value.name)} </Link>
                        has <strong>{format(item!)}</strong> as its <strong>{format(value.field)}</strong>
                    </h2>)
                }
            </> :''
        }
    </>

}