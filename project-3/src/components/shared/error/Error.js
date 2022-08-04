import ErrorDialog from './error-dialog/ErrorDialog';
import styles from './Error.module.css';
const Error = (props) => {
    return <div className={styles.overlay}>
         <ErrorDialog errorMessage={props.errorMessage}/>   
    </div>  
}
export default Error;