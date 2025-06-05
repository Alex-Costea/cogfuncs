import {findConceptPath, format, getObject} from "../utils/utils.ts";
import {Center, CoreType, WingedType} from "../typology/types/psyfuncsTypes.ts";
import {Link} from "react-router-dom";

export default function WingedPsyfuncPage(
    {item, concept} :
    {item: string, concept: Record<string, unknown>}){

    const coreType = concept as WingedType
    const name = format(item!)
    const center = getObject(coreType.center.value) as unknown as Center
    const centerName  = center.name
    const integrationCode = coreType.integration.value
    const integration = getObject(integrationCode) as unknown as CoreType
    const retreatCode = coreType.retreat.value

    const wingCode = coreType.wing.value
    const wing = getObject(wingCode) as unknown as CoreType

    const superTypeCode = coreType.core.value
    const superType = getObject(superTypeCode) as unknown as CoreType
    const agent = superType.agent.value
    const reaction = superType.reaction.value
    const relation = superType.relation.value
    const socializing = superType.socializing.value

    return<>
        <h1>{name}</h1>
        <h2>
            <p>
                <strong>{name}</strong> function is part of the <Link to={findConceptPath(centerName)!}>
                {format(centerName)}</Link> center, and as such it is responsible for dealing
                with <strong>{center.emotion}</strong>. Its fundamental desire is <strong>{center.desire}</strong>, and
                it seeks to achieve it using its unique strength of <strong>{coreType.strength}</strong>.</p>
            <p>
                It is a subfunction of <Link to={findConceptPath(superTypeCode)!}>{format(superTypeCode)}</Link> that
                has learned to incorporate elements of <Link to={findConceptPath(wingCode)!}>{format(wingCode)}
                </Link>'s <strong>{wing.strength}</strong> within its
                inherited <strong>{superType.strength}</strong> as an adaptive measure.
            </p>
            <p>
                In integration, it gains the positive
                attributes of <Link to={findConceptPath(integrationCode)!}>{format(integrationCode)}</Link>,
                specifically its <strong>{integration.strength}</strong>.
                However, it can also retreat from its <strong>{coreType.strength}</strong>, and start taking on the
                negative attributes of <Link to={findConceptPath(retreatCode)!}>{format(retreatCode)}</Link>.
            </p>
            <p>
                Just like its parent function, it
                is <strong><Link to={findConceptPath(reaction)!}>{reaction}</Link></strong> towards its core emotion
                of <strong>{center.emotion}</strong>, and has a relation
                of <strong><Link to={findConceptPath(relation)!}>{relation}</Link></strong> towards its perceived lack
                of <strong>{center.desire}</strong>. In the Freudian model of the psyche, its agent is
                the <Link to={findConceptPath(agent)!}>{agent}</Link>. In social interactions, it tends to be <strong>
                <Link to={findConceptPath(socializing)!}>{socializing}</Link></strong>.
            </p>

        </h2>
    </>
}