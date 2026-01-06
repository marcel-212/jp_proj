import type { Kanji } from "../utils/types";
import '../utils/styles/CardMenu.scss'

const CardKanji = (props:Kanji) => {
    return ( 
        <div className="card-kanji shadow">
            <div className="row-1">
                <div>
                    {props.sign}
                </div>
                <div>
                    <p>{props.id}</p>
                    <p>{props.phonetic}</p>
                    <p>{props.radical}</p>
                </div>
            </div>
            <div className="row-2">
                <div>
                    <p>Onyomi:</p>
                    <p>{props.onyomi}</p>
                </div>
                <div>
                    <p>Kunyomi:</p>
                    <p>{props.kunyomi}</p>
                </div>
            </div>
            <div className="row-3">
                <p>Znaczenie: <span>{props.meaning_pl}</span></p>
            </div>
            <div className="row-4">
                <div>
                    <p>JLPT: <strong>N{props.jlpt}</strong></p>
                </div>
                <div>
                    <p>Klasa: <strong>{props.grade}</strong></p>
                </div>
                <div>
                    <p>Kreski: <strong>{props.strokes}</strong></p>
                </div>
            </div>
        </div>
    );
}
 
export default CardKanji;