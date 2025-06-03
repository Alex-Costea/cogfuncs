import {useParams} from "react-router-dom";

export default function ConceptPage()
{
    const { section, subcategory, item } = useParams()
    return <>
        <h1>{section} - {subcategory} - {item}</h1>
    </>

}