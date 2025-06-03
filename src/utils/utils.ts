import {dataMap} from "../typology/dataMap.ts";
import ConceptLink from "../typology/types/ConceptLink.ts";

export function format(word: string): string {
    if (!word) return ''

    if (word.startsWith('type')) {
        const typePath = findConceptPath(word)!.substring(1).split("/")
        const data = getDataPath(...typePath) as {archetype : string, center : ConceptLink}
        const center = format(data.center.value)
        word = `The ${data.archetype} ${center} (${word.slice(4)})`
    }

    // insert space before capital letters (camelCase or PascalCase)
    const withSpaces = word.replace(/([a-z])([A-Z])/g, '$1 $2')

    // capitalize each word
    return withSpaces
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
}



export function getDataPath(...path: string[]): Record<string, unknown>  {
    return path.reduce((acc: unknown, key) => {
        return (acc as Record<string, unknown>)[key]
    }, dataMap as Record<string, unknown>) as Record<string, unknown>
}

export function isLink(value: unknown): value is { type: 'Link'; value: string } {
    return (
        typeof value === 'object' &&
        value !== null &&
        'type' in value &&
        value.type === 'Link' &&
        'value' in value &&
        typeof value.value === 'string'
    )
}

export function findConceptPath(target : string): string | null {
    for (const [sectionName, subcategories] of Object.entries(dataMap)) {
        for (const [subcategoryName, concepts] of Object.entries(subcategories as Record<string, unknown>)) {
            const conceptKeys = Array.isArray(concepts)
                ? concepts
                : typeof concepts === 'object' && concepts !== null
                    ? Object.keys(concepts)
                    : []

            if (conceptKeys.includes(target)) {
                return `/${sectionName}/${subcategoryName}/${target}`
            }
        }
    }

    return null
}

export type ReferenceResult = {
    name: string
    field: string
}

export function findConceptReferences(target: string): ReferenceResult[] {
    const refs: ReferenceResult[] = []

    for (const subcategories of Object.values(dataMap)) {
        for (const concepts of Object.values(subcategories as Record<string, unknown>)) {
            for (const [conceptName, conceptData] of Object.entries(concepts as Record<string, unknown>)) {
                for (const [fieldKey, fieldValue] of Object.entries(conceptData as Record<string, unknown>)) {
                    if (isLink(fieldValue) && fieldValue.value === target) {
                        refs.push({ name: conceptName, field: fieldKey })
                        break // only record one match per concept
                    }
                }
            }
        }
    }

    return refs
}