import styles from './MenuItem.module.css';
const MenuItem = props => {
    return <div>
        {props.menuItem.title}
    </div>
};
export default MenuItem;