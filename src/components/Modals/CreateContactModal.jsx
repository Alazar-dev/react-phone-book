import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Dialog, TextField } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 500,
  },
  text: {
    marginLeft: 20,
    width: 550,
  },
  newButton: {
    marginLeft: 1009,
    width: 140,
    marginTop: 10,
  },
}));
const CreateContactModal = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const [valueId, setValueId] = useState(1);
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const [open, setOpen] = useState(false);

  const openClickHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const onSubmit = (data, e) => {
    setOpen(false);
    console.log(data);
    props.addContact(valueId, valueFirstName, valueLastName, valuePhone);
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          ref={register({ required: true })}
          className={classes.text}
          type="text"
          name="firstName"
          value={valueFirstName}
          onChange={(e) => setValueFirstName(e.target.value)}
          placeholder="First Name"
          
        />
      </div>

      <div>
        <input
          ref={register({ required: true })}
          className={classes.text}
          type="text"
          name="lastName"
          value={valueLastName}
          onChange={(e) => setValueLastName(e.target.value)}
          placeholder="Last Name"
          
        />
      </div>
      <div>
        <input
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
            minLength: 10,
          })}
          className={classes.text}
          type="email"
          name=""
          value={valuePhone}
          onChange={(e) => setValuePhone(e.target.value)}
          placeholder="Phone Number"
          
        />
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <Button
        className={classes.newButton}
        variant="outlined"
        color="primary"
        onClick={openClickHandler}
      >
        New contact
      </Button>
      <Dialog  open={open} onClose={closeHandler}>
        <DialogContent>
          <DialogTitle>Create new Contact</DialogTitle>
        </DialogContent>
        {form}
      </Dialog>
    </div>
  );
};

export default CreateContactModal;
