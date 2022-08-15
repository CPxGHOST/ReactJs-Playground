import {useState} from 'react';
import styles from './MenuItem.module.css';
import Card from './../../shared/card/Card'
import Button from '../../shared/button/Button';
const MenuItem = props => {
    const [numberOfItem, setNumberOfItem] = useState(0);
    const addItemToCart = () => {
        console.log(`Item Added!`);
        setNumberOfItem(prevState => {
            return prevState + 1;
        })
    }
    const removeItemFromCard = () => {
        setNumberOfItem(prevState => {
            return prevState - 1;
        })
        console.log(`Item Removed!`);
    }
    return <Card className={styles.menuItem}>
        <div>
            <h2>{props.menuItem.title}</h2>
            {props.menuItem.desc}
            <div>
            {props.menuItem.price}
            </div>
        </div>
        <div>
            <Button onClick={addItemToCart} buttonText='+'/>
             <span> {numberOfItem} </span>
            <Button onClick={removeItemFromCard} buttonText='-'/>
        </div>
    </Card>
};
export default MenuItem;