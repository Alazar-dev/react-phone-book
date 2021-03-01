import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

// import Header from "../Header";
import PhoneBook from "../PhoneBook";
import CreateContactModal from "../Modals/CreateContactModal";

import Tasks from "../pages/Tasks";
import Todo from "../pages/Todo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    marginTop: 175,
  },
  tables: {
    marginLeft: 500,
  },
}));
function Home() {
  const classes = useStyles();
  const [contacts, setContacts] = useState([
    { id: 1, firstName: "Girma", lastName: "Kasu", phone: "0912345678" },
    { id: 2, firstName: "Opa", lastName: "Efe", phone: "0912131415" },
  ]);

  contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));

  const removeContact = (id) => {
    const newConatcts = contacts.filter((item) => item.id !== id);
    setContacts(newConatcts);
  };

  const addContact = (id, firstName, lastName, phone) => {
    const newContacts = [...contacts, { id, firstName, lastName, phone }];
    setContacts(newContacts);
    newContacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
  };

  return (
    <Router>
      {/* <Header /> */}
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
            {contacts.map((contact, id) => (
              <PhoneBook
                key={contact.id}
                removeContact={removeContact}
                contact={contact}
              />
            ))}
          </TableBody>
        </Table>

        <CreateContactModal addContact={addContact} />
        <Switch>
          <Route exact path="/Tasks" component={Tasks} />
          <Route exact path="/Todo" component={Todo} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
