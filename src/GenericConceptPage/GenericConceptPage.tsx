import {findConceptPath, format, isLink, ReferenceResult} from "../utils/utils.ts";
import {Link} from "react-router-dom";

export default function GenericConceptPage(
    {item, concept, linksHere} :
    {item: string, concept: Record<string, unknown>, linksHere: ReferenceResult[]})
{

    const conceptEntries = Object.entries(concept).filter(
        ([key]) => key !== 'type'
    )

    function display(value : unknown) : string{
        if(typeof value === 'string')
            return format(value)
        return JSON.stringify(value)
    }

    return <>
        <h1>{format(item!)}</h1>
        {
            conceptEntries.map(([key, value]) =>
                <h2>{format(key)}: {
                    isLink(value)?
                        <Link to={findConceptPath(value.value)!}>{display(value.value)}</Link>
                        :<strong>{display(value)}</strong>
                }</h2>
            )
        }
        {
            linksHere.length>0?<>
                {linksHere.map(value =>
                    <h2>
                        <Link to={findConceptPath(value.name)!}>{format(value.name)} </Link>
                        has <strong>{format(item!)}</strong> as its <strong>{format(value.field)}</strong>
                    </h2>)
                }
            </> :''
        }
    </>
}