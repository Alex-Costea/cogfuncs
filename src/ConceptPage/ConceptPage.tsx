import {Link, useParams} from "react-router-dom";
import {capitalize, getDataPath, isLink} from "../utils/utils.ts";
import ConceptLink from "../typology/types/ConceptLink.ts";

export default function ConceptPage()
{
    const { section, subcategory, item } = useParams()
    const concept = getDataPath(section!, subcategory!, item!)
    const conceptEntries = Object.entries(concept)

    function display(value : unknown) : string{
        if(typeof value === 'string')
            return capitalize(value)
        if(isLink(value))
            return capitalize((value as ConceptLink).value)
        return JSON.stringify(value)
    }

    return <>
        <nav>
            <h2><Link to={'/'}>← Back to Home Page</Link></h2>
            <h2><Link to={`/${section}`}>← Back to {capitalize(section!)}</Link></h2>
            <h2><Link to={`/${section}/${subcategory}`}>← Back to {capitalize(subcategory!)}</Link></h2>
        </nav>
        <h1>{capitalize(item!)}</h1>
        {
            conceptEntries.map(([key, value]) =>
                <h2>{capitalize(key)}: {display(value)}</h2>
            )
        }
    </>

}