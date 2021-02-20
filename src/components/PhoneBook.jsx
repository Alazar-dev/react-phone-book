import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme)=>({
    root: {
        color: 'red',
        margin: 200,
    }
}))

const PhoneBook = (props) => {
    const classes = useStyles();

    return ( 
        <tr className={classes.root}>
            <TableCell>{props.contact.id}</TableCell>
            <TableCell>{props.contact.firstName}</TableCell>
            <TableCell>{props.contact.lastName}</TableCell>
            <TableCell>{props.contact.phone}</TableCell>
            <TableCell><Button variant="contained" color="secondary" onClick={()=> props.removeContact(props.id)}>Remove</Button></TableCell>
        </tr>
    )

}

export default PhoneBook;