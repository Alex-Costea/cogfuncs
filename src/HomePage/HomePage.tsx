import {dataMap} from "../typology/dataMap.ts";
import {format} from "../utils/utils.ts";
import {Link} from "react-router-dom";

export default function HomePage() {
    const categories = Object.keys(dataMap)
    return (
        <>
            <h1>Who Are You, Really?</h1>
            {
                categories.map((name) =>
                    <h2 key={name}>
                        <Link to={`/${name}`}>{format(name)}</Link>
                    </h2>)
            }
        </>
    )
}