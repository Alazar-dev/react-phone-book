import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: 15,
        marginBottom: 30,
        marginLeft: 500
    },
    text: {
        marginLeft: 20,
        width: 550
    },
    newButton: {
        marginLeft: 1009,
        width: 140,
        marginTop: 10
    }
}))
const CreateContactModal  = (props) => {

    const classes = useStyles();
    const [valueId, setValueId] = useState(1)
    const [valueFirstName, setValueFirstName] = useState('Girma')
    const [valueLastName, setValueLastName] = useState('Kasu')
    const [valuePhone, setValuePhone] = useState('0912131415')


    const [open, setOpen] = useState(false)

    const openClickHandler = () => {
        setOpen(true)
    }

    const closeHandler = () => {
        setOpen(false)
    }

    const submitHandler = e => {
        e.preventDefault();
        setOpen(false);
        if(!valueId || !valueFirstName || !valueLastName || !valuePhone) return;
        props.addContact(valueId, valueFirstName, valueLastName, valuePhone);
    }




    const body = (
        <form onSubmit={submitHandler}>
            <div>
                <TextField className={classes.text}  label="ID" type="number" value={valueId} onChange={e => setValueId((e.target.value))} />
            </div>
            <div>
                <TextField className={classes.text} type="text" name="firstName" value={valueFirstName} onChange={e => setValueFirstName(e.target.value)} placeholder="First Name" fullWidth/>
            </div>
            <div>
                <TextField className={classes.text} type="text" name="lastName" value={valueLastName} onChange={e => setValueLastName(e.target.value)} placeholder="Last Name" fullWidth/>
            </div>
            <div>
                <TextField className={classes.text} type="phone" name="phone" value={valuePhone} onChange={e => setValuePhone(e.target.value)} placeholder="Phone Number" fullWidth/>
            </div>
            <div>
                <Button className={classes.button} variant="contained" color="primary" type="submit">Add</Button>
            </div>
        </form>  
    )

    return (
        <div>
            <Button  className={classes.newButton} variant="outlined" color="primary" onClick={openClickHandler}>New contact</Button>
            <Dialog fullWidth open={open} onClose={closeHandler}>
                <DialogContent>
                    <DialogTitle>
                        Create new Contact
                    </DialogTitle>

                </DialogContent>
                {body}
            </Dialog>
   
        </div>

     );
}
 
export default CreateContactModal ;