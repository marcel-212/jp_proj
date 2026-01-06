import CardKanji from "../components/CardKanji";
import RadioButton from '../components/RadioButton';
import type { Kanji } from "../utils/types";
import '../utils/styles/List.scss'
import { useEffect, useState } from "react";

const KanjiList = () => {
  const [kanji, setKanji] = useState<Kanji[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  const [grade, setGrade] = useState<number>(1);
  const [jlpt, setJlpt] = useState<number>(5);
  const jlptLevels = [5, 4, 3, 2, 1];
  const grades = [1, 2, 3, 4, 5, 6, 7, 8];
    
  useEffect(() => {
    const fetchKanji = async () => {
      try{
        const response = await fetch(`http://localhost:8080/kanji/list/${mode ? "jlpt" : "grade"}/${mode ? jlpt : grade}`)
        const data = await response.json()
        setKanji(data);
      }catch(e){
        console.log('fetching error');
      }
    }

    fetchKanji();
  },[mode, jlpt, grade])

  return ( 
      <section className="list">
          <div className={`switch ${mode ? 'switch-active' : ''}`}>
            <div onClick={() => setMode(true)}>JLPT</div>
            <div onClick={() => setMode(false)}>GRADE</div>
          </div>
          {mode && <RadioButton current={jlpt} setCurrent={setJlpt} list={jlptLevels}/>}
          {!mode && <RadioButton current={grade} setCurrent={setGrade} list={grades}/>}
        
          {kanji.length == 0 && <p className="list-not-found">No kanji found :(</p>}
          {kanji.length > 0 && 
          <>
          <div className="list-kanji">
              {kanji.map((item) => (
                  <CardKanji key={item.id} {...item}/>
              ))}
          </div>
          </>
          } 
      </section>
  );

}
 
export default KanjiList;