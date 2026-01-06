import '../utils/styles/RadioButton.scss'

type Props = {
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    list: number[]
}

const RadioButton = ({current, setCurrent, list}:Props) => {
    return ( 
        <div
            className="radio-button"
            style={{
                "--count": list.length,
                "--index": list.indexOf(current),
            } as React.CSSProperties }
            >
            {list.map((item) => (
                <div key={item} onClick={() => setCurrent(item)}>
                <label htmlFor={`radio-${item}`}>{item}</label>
                <input
                    id={`radio-${item}`}
                    type="radio"
                    value={item}
                    checked={current === item}
                    readOnly
                />
                </div>
            ))}
        </div>
     );
}
 
export default RadioButton;