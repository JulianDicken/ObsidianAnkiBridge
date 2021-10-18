import { escapeMarkdown } from 'utils'
import { Postprocessor } from './base'

export class MathPostprocessor extends Postprocessor {
    static id = 'MathPostprocessor'
    static displayName = 'MathPostprocessor'
    static weight = 40
    static defaultConfigState: true

    public process(text: string): string {
        const mathBlockRegex = /(\$\$)(.*?)(\$\$)/gis
        text = text.replace(mathBlockRegex, function (match, p1, p2) {
            return '\\\\(' + escapeMarkdown(p2) + ' \\\\)'
        })

        const mathInlineRegex = /(\$)(.*?)(\$)/gi
        text = text.replace(mathInlineRegex, function (match, p1, p2) {
            return '\\\\(' + escapeMarkdown(p2) + '\\\\)'
        })

        return text
    }
}