import {findConceptPath, format, getObject, ReferenceResult} from "../utils/utils.ts";
import {Center, CoreType} from "../typology/types/psyfuncsTypes.ts";
import {Link} from "react-router-dom";

export default function CorePsyfuncPage(
    {item, concept, linksHere} :
    {item: string, concept: Record<string, unknown>, linksHere: ReferenceResult[]}){

    const coreType = concept as CoreType
    const name = format(item!)
    const center = getObject(coreType.center.value) as unknown as Center
    const centerName  = center.name
    const integrationCode = coreType.integration.value
    const integration = getObject(integrationCode) as unknown as CoreType
    const retreatCode = coreType.retreat.value
    const agent = coreType.agent.value
    const reaction = coreType.reaction.value
    const relation = coreType.relation.value
    const socializing = coreType.socializing.value
    const subtypes = linksHere.filter(it => it.field == "core")
    const subfunc1 = subtypes[0].name
    const subfunc2 = subtypes[1].name

    return<>
        <h1>{name}</h1>
        <div>
            <p>
                <strong>{name}</strong> function is part of the <Link to={findConceptPath(centerName)!}>
                {format(centerName)}</Link> center, and as such it is responsible for dealing
                with <strong>{center.emotion}</strong>. Its fundamental desire is <strong>{center.desire}</strong>, and
                it seeks to achieve it using its unique strength of <strong>{coreType.strength}</strong>.</p>
            <p>
                In integration, it gains the positive attributes
                of <Link to={findConceptPath(integrationCode)!}>{format(integrationCode)}</Link>,
                specifically its <strong>{integration.strength}</strong>.
                However, it can also retreat from its <strong>{coreType.strength}</strong>, and start taking on the
                negative attributes of <Link to={findConceptPath(retreatCode)!}>{format(retreatCode)}</Link>.
            </p>
            <p>
                In terms of worldview, this function believes the world would be a better place if everyone focused
                more on their own <strong>{coreType.strength}</strong>. It can project onto other people as having
                more <strong>{coreType.strength}</strong> than they truly do, and/or
                be disappointed by its perceived societal rarity.
            </p>
            <p>
                When not acting as a leading function, <strong>{center.desire}</strong> will be a subsidiary concern
                of its owner's psyche, and it will be mostly visible in the person's <strong>
                {center.visibleIn1}</strong> and <strong>{center.visibleIn2}</strong>, which will be characterized
                by <strong>{coreType.strength}</strong> even as their leading function is of a different nature.
            </p>
            <p>
                It is <strong><Link to={findConceptPath(reaction)!}>{reaction}</Link></strong> towards its core emotion
                of <strong>{center.emotion}</strong>,
                and has a relation of <strong><Link to={findConceptPath(relation)!}>{relation}</Link></strong> towards
                its perceived lack of <strong>{center.desire}</strong>.
                In the Freudian model of the psyche, its agent is the <Link to={findConceptPath(agent)!}>{agent}</Link>.
                In social interactions, it tends to
                be <strong><Link to={findConceptPath(socializing)!}>{socializing}</Link></strong>.
            </p>
            <p>
                It has two
                subfunctions: <strong><Link to={findConceptPath(subfunc1)!}>{format(subfunc1)}</Link>
                </strong> and <strong><Link to={findConceptPath(subfunc2)!}>{format(subfunc2)}</Link></strong>.
            </p>

        </div>
    </>
}