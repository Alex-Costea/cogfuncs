import {useParams} from "react-router-dom";

export default function SubcategoryPage(){
    const {section, subcategory} = useParams()
    return <>
            <h1>{section} - {subcategory}</h1>
        </>
}