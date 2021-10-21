import { Blueprint } from 'blueprints/base'
import { FieldEntity } from 'entities/network'
import { SourceDescriptor } from 'entities/note'

export abstract class NoteBase {
    constructor(
        public blueprint: typeof Blueprint,
        public id: number | null,
        public fields: Record<string, string>,
        public source: SourceDescriptor,
        public sourceText: string,
        public deckName?: string,
        public modelName?: string,
        public tags?: Array<string>,
        public delete_?: boolean,
        public enabled?: boolean,
    ) {}

    // public abstract renderAsEntity(): NoteEntity
    public abstract renderAsText(): string

    public renderFields(): Record<string, string> {
        return { Front: this.fields['front'], Back: this.fields['back'] }
    }

    public normaliseNoteInfoFields(fields: Record<string, FieldEntity>): Record<string, string> {
        return { front: fields['Front'].value, back: fields['Back'].value }
    }

    public shouldUpdateFile(): boolean {
        return this.renderAsText() !== this.sourceText
    }
}
