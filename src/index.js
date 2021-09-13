import { RestoreOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { makeStyles } from '@material-ui/core/styles';
//import Modal from '@material-ui/core/Modal';

/*function getModalStyle() {
  const top = 50 ;
  const left = 50 ;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Buttons(handleOpen) {

  return(
  <>
  <button  onClick={handleOpen.click} id="1" data-context="hi button 1">button1</button>
  <button  onClick={handleOpen.click} id="2" data-context="hi button 2">button2</button>
  <button  onClick={handleOpen.click} id="3" data-context="hi button 3">button3</button>
  </>
  );
}   
        
export default function Test() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [context, setContext] = useState(null);

  const handleOpen = (e) => {
    setContext(e.target.dataset.context);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>test Popover</h2>
      <p>{context}</p>
    </div>
  );

  return (
    <>
      <Buttons click={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </>
  );
}

*/

/*
function Form(props) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInput('');
  }

  function handleChange(e) {
    setInput(e.target.value);
    props.filterData(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          htmlFor="input"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button>search</button>
      </form>
    </div>
  );
}



const DATA = ['facebook','google','amazon','microsoft'];

function Test1() {
  const [search, setSearch] = useState(null);
  console.log('search:', search);
  
  var filterData = function(input) {
    DATA.reduce((acc, cur) => {
      if (input === cur) {
        setSearch(input);
        acc.push(input);
      } 
      return acc;
    }, []);
  }

  return (
    <>
      <Form filterData={filterData} />
      {search}
    </>
  );
}  */

ReactDOM.render(<App />, document.getElementById('root'));
