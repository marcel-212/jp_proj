export type Kanji = {
    id: number
    sign: string
    onyomi: string
    kunyomi: string
    phonetic: string
    radical: string
    grade: string
    jlpt: string
    strokes: string
    meaning_pl: string
    meaning_en: string
    vocab?: {
        id: string
        kanji: string
        kana: string
        meaningEn: string
        meaningPl: string
    }[]
}

export type Sentence = {
    id: number
    meaning_pl: string
    meaning_en: string
    parts: SentencePart[]
}

export type SentencePart = {
    id: number
    kanji: string
    kana: string
    type: string
    romanji: string
    meaning_pl: string
    meaning_en: string
}