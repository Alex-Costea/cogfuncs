import {dataMap} from "../typology/dataMap.ts";

export function capitalize(word: string): string {
    if (!word) return ''
    return word.charAt(0).toUpperCase() + word.slice(1)
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
