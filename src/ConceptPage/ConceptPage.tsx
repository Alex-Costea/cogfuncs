import {Link, useParams} from "react-router-dom";
import {format, findConceptReferences, getDataPath} from "../utils/utils.ts";
import GenericConceptPage from "../GenericConceptPage/GenericConceptPage.tsx";
import CorePsyfuncPage from "../CorePsyfuncPage/CorePsyfuncPage.tsx";
import WingedPsyfuncPage from "../WingedPsyfuncPage/WingedPsyfuncPage.tsx";

export default function ConceptPage()
{
    const { section, subcategory, item } = useParams()
    const concept = getDataPath(section!, subcategory!, item!)
    const linksHere = findConceptReferences(item!)

    const isCorePsyfunc = concept?.type === "coreType"
    const isWingedPsyfunc = concept?.type == "wingedType"

    return<>
        <nav>
            <strong><Link to={'/'}>← Back to Home Page </Link>
                <Link to={`/${section}`}>← Back to {format(section!)} </Link>
                <Link to={`/${section}/${subcategory}`}>← Back to {format(subcategory!)} </Link></strong>
            {
                !isCorePsyfunc && !isWingedPsyfunc &&
                <GenericConceptPage item={item!} concept={concept} linksHere={linksHere}/>
            }
            {
                isCorePsyfunc &&
                <CorePsyfuncPage item={item!} concept={concept} linksHere={linksHere}/>
            }
            {
                isWingedPsyfunc &&
                <WingedPsyfuncPage item={item!} concept={concept}/>
            }
        </nav>
    </>
}