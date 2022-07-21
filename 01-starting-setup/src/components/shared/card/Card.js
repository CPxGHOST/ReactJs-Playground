import './Card.css';
import { CardConstants } from '../../../constants/SharedConstants';
function Card(props){
    const styleClasses =`${CardConstants.styleClass} ${props.className}`;
    return <div className={styleClasses}>{props.children}</div>
}
// comment for keeping github hara bhara
export default Card;