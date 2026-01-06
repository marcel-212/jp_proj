import type { SentencePart } from '../utils/types'

const SentencePart = ({part}:{part: SentencePart}) => {
    let type = null;
    switch(part.type){
        case "noun":
            type = {
                
            }
            break;
        default:
            type = null;
    }

    
    

    return ( 
        <span>
            test
        </span>
    );
}
 
export default SentencePart;