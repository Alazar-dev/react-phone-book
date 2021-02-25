import {useState, Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Header from './components/Header'
import PhoneBook from './components/PhoneBook';
import CreateContactModal from './components/Modals/CreateContactModal';

import Nav from './components/Navigation';
import Tasks from './components/pages/Tasks';
import Todo from './components/pages/Todo';

const useStyles = makeStyles((theme) =>({
  root: {
    width: 700,
    marginTop: 175
  },
  tables: {
    marginLeft: 500,
  }
})) 
function App() {

  const classes = useStyles();
  const [contacts, setContacts] = useState([
    {id: 1, firstName: 'Girma', lastName: 'Kasu',phone: '0912345678' },
    {id: 2, firstName: 'Opa', lastName: 'Efe', phone: '0912131415'}
  ])

  contacts.sort((a, b) => a.lastName.localeCompare(b.lastName))

  const removeContact = id => {
    const newConatcts = contacts.filter(item => item.id !== id )
    setContacts(newConatcts);
  }

  const addContact = (id, firstName, lastName, phone) => {
    const newContacts = [...contacts, {id, firstName, lastName, phone}]
    setContacts(newContacts);
    newContacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
  } 

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Table className={classes.tables}>
          <thead>
            <TableRow>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
            </TableRow>         
          </thead>
          <TableBody>
            {contacts.map((contact, id) => 
              (<PhoneBook key={contact.id} removeContact={removeContact} contact={contact} />
            ))}         
          </TableBody>

        </Table>
        
          <CreateContactModal addContact={addContact} />
      </div>    
    </>

  );
}

export default App;
