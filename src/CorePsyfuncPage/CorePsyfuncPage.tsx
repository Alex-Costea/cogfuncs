import {findConceptPath, format, getObject, ReferenceResult} from "../utils/utils.ts";
import {Center, CoreType} from "../typology/types/psyfuncsTypes.ts";
import {Link} from "react-router-dom";

export default function CorePsyfuncPage(
    {item, concept, linksHere} :
    {item: string, concept: Record<string, unknown>, linksHere: ReferenceResult[]}){

    const coreType = concept as CoreType
    const name = format(item!)
    const center = getObject(coreType.center.value) as unknown as Center
    const integrationCode = coreType.integration.value
    const integration = getObject(integrationCode) as unknown as CoreType
    const retreatCode = coreType.retreat.value
    const agent = coreType.agent.value
    const reaction = coreType.reaction.value
    const relation = coreType.relation.value
    const socializing = coreType.socializing.value
    const subtypes = linksHere.filter(it => it.field == "core")
    console.log(subtypes)
    const subtype1 = subtypes[0].name
    const subtype2 = subtypes[1].name

    return<>
        <h1>{name}</h1>
        <h2>
            <p>
                <strong>{name}</strong> is part of the {center.name} center, and as such it is responsible for dealing
                with <strong>{center.emotion}</strong>. Its fundamental desire is <strong>{center.desire}</strong>,
                and it deals with this by providing the strength of <strong>{coreType.strength}</strong>.
                In integration, it gains the positive attributes
                of <Link to={findConceptPath(integrationCode)!}>{format(integrationCode)}</Link>,
                specifically their <strong>{integration.strength}</strong>.
                However, it can also retreat from its <strong>{coreType.strength}</strong>, and start taking the
                negative traits of <Link to={findConceptPath(retreatCode)!}>{format(retreatCode)}</Link>.
            </p>
            <p>
                In the Freudian model of the psyche, its agent is the <Link to={findConceptPath(agent)!}>{agent}</Link>.
                It is <strong><Link to={findConceptPath(reaction)!}>{reaction}</Link></strong> towards its core emotion
                of <strong>{center.emotion}</strong>,
                and has a relation of <strong><Link to={findConceptPath(relation)!}>{relation}</Link></strong> towards
                its perceived lack of <strong>{center.desire}</strong>. In social interactions, it tends to
                be <strong><Link to={findConceptPath(socializing)!}>{socializing}</Link></strong>.
                It has two
                subtypes: <strong><Link to={findConceptPath(subtype1)!}>{format(subtype1)}</Link></strong> and <strong>
                <Link to={findConceptPath(subtype2)!}>{format(subtype2)}</Link></strong>.
            </p>

        </h2>
    </>
}