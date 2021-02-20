import {useState} from 'react';
import{makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

import CreateContactModal from './Modals/CreateContactModal'



const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      width: '25ch',
      color: 'red'
  },
  inputs: {
    margin: 20,
    backgroundColor: 'skyBlue',
    width: 500
  },
  forms: {
      marginLeft: 500
  }
}));

const PhoneBookForm = (props) => {
    const classes = useStyles();

    const [valueId, setValueId] = useState(1)
    const [valueFirstName, setValueFirstName] = useState('Girma')
    const [valueLastName, setValueLastName] = useState('Kasu')
    const [valuePhone, setValuePhone] = useState('0912131415')


    const submitHandler = e => {
        e.preventDefault();
        if(!valueId || !valueFirstName || !valueLastName || !valuePhone) return;
        
        // setValueId('');
    }
    
    return (
        <div>

            <CreateContactModal />      
        </div>


     );
}
 
export default PhoneBookForm;