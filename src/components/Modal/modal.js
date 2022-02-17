import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "1px solid #7269ef",
  boxShadow: 24,
  p: 4,
};

function AddBudgetModal(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const [type, setType] = React.useState("income");
  const [date, setDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState({
    active: false,
    type: "info",
    message: "",
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (category === "" || amount === "") {
      setError({
        active: true,
        type: "error",
        message: "Oh no! please provide all fields",
      });
    } else if (isNaN(parseFloat(amount))) {
      setError({
        active: true,
        type: "error",
        message: "Ops! amount must be a number",
      });
    } else {
      setError({
        active: true,
        type: "info",
        message: "Success! Income successfully saved",
      });
      const newAmount = parseFloat(amount);
      const incomeData = {
        amount: newAmount,
        category: category,
      };
      window
        .fetch("https://finfam.herokuapp.com/api/v1/incomes", {
          method: "POST",
          body: JSON.stringify(incomeData),
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          response
            .json()
            .then((data) => {
              props.setBudget((prevState) => {
                return [...prevState, data];
              });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
      setCategory("");
      setAmount("");
    }

    setTimeout(() => setError(false), 4000);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpenModal}
        startIcon={<AddIcon />}
      >
        Add Income
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {error["active"] ? (
          <Alert severity={error["type"]}>
            <AlertTitle>{error["type"].toUpperCase()}</AlertTitle>
            <strong> {error["message"]}</strong>
          </Alert>
        ) : null}

        <Typography
          id="modal-modal-title"
          variant="h3"
          sx={{ textAlign: "center" }}
          component="div"
        >
          Add Income
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ width: "100%", p: 2 }}>
            <FormControl fullWidth></FormControl>
          </Box>
          ) : (
          <Box sx={{ width: "100%" }}>
            <TextField
              value={amount}
              onChange={handleChangeAmount}
              id="standard-basic"
              label="Amount"
              variant="outlined"
            />
            <TextField
              value={category}
              onChange={handleChangeCategory}
              id="standard-basic"
              label="Category"
              variant="outlined"
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                backgroundColor: "#7269ef",
                ":hover": { backgroundColor: "#7269ea" },
                fontWeight: "bolder",
              }}
              startIcon={<AddIcon />}
            >
              Add Income
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddBudgetModal;
