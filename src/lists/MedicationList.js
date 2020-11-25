import React from "react";
import { Button, ListItem, ListItemText, Paper } from "@material-ui/core";

function MedicationList({ medications, client, time }) {
  const { MedicationTakenRequest } = require("../generated/pilldispenser_pb");

  const deleteMedicationHandler = (event, item) => {
    event.preventDefault();

    medications.forEach((element, index, object) => {
      if (element === item) {
        object.splice(index, 1);
      }
    });
    if (client) {
      const request = new MedicationTakenRequest();
      request.setPatientid(34);
      request.setMedicationid(item[0]);
      request.setDatetime(time.toLocaleString());

      client.medicationTaken(request, {}, (err, response) => {
        if (err) {
          console.log(
            `Unexpected error for pillDispenser: code = ${err.code}` +
              `, message = "${err.message}"`
          );
        } else {
          console.log(response.getMessage());
        }
      });
    }
  };

  return (
    <div className="Medication-list">
      <Paper elevation={1}>
        {medications &&
          medications.map((item) => (
            <>
              <ListItem>
                <ListItemText primary={item[1]} />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={(event) => deleteMedicationHandler(event, item)}
                >
                  Take
                </Button>
              </ListItem>
            </>
          ))}
      </Paper>
    </div>
  );
}

export { MedicationList };
