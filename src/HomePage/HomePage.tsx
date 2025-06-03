import {dataMap} from "../typology/dataMap.ts";

export default function HomePage() {
    const categories = Object.keys(dataMap)
    return (
        <>
            <img src={"./cogfuncs.svg"} width={"300px"} alt={"Cogfuncs"}/>
            <h1>Who Are You, Really?</h1>
            {
                categories.map((name) =>
                    <h2 key={name}>{name}</h2>)
            }
        </>
    )
}