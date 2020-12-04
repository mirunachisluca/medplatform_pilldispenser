import React from "react";
import { MedicationList } from "../lists/MedicationList";
import { Paper } from "@material-ui/core";
import { Clock } from "../timer/Clock";
import { useSnackbar } from "notistack";

function MedicationDispenser() {
  const {
    PillDispenserClient,
  } = require("../generated/pilldispenser_grpc_web_pb");
  const {
    MedicationPlanRequest,
    MedicationMissedRequest,
  } = require("../generated/pilldispenser_pb");
  const [medications, setMedications] = React.useState({
    isLoaded: false,
    data: "",
  });
  const [client, setClient] = React.useState("");
  const [time, setTime] = React.useState(new Date());
  const [activeMedication, setActiveMedication] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const dispenserClient = new PillDispenserClient(
      "https://medplatformapi2.herokuapp.com"
    );
    setClient(dispenserClient);
  }, []);

  React.useEffect(() => {
    if (client) {
      const request = new MedicationPlanRequest();

      request.setPatientid(34);

      client.getMedicationPlan(request, {}, (err, response) => {
        if (err) {
          console.log(
            `Unexpected error for pillDispenser: code = ${err.code}` +
              `, message = "${err.message}"`
          );
        } else {
          const newData = response.getMedicationList().map((element) => {
            return element.array;
          });

          setMedications({
            isLoaded: true,
            data: newData,
          });
        }
      });
    }
  }, [client]);

  // React.useEffect(() => {
  //   if (client) {
  //     const request = new MedicationPlanRequest();

  //     request.setPatientid(34);

  //     const currentTime = time.toLocaleTimeString().substring(0, 8);

  //     if (currentTime === "13:18:00") {
  //       client.getMedicationPlan(request, {}, (err, response) => {
  //         if (err) {
  //           console.log(
  //             `Unexpected error for pillDispenser: code = ${err.code}` +
  //               `, message = "${err.message}"`
  //           );
  //         } else {
  //           const newData = response.getMedicationList().map((element) => {
  //             return element.array;
  //           });

  //           setMedications({
  //             isLoaded: true,
  //             data: newData,
  //           });
  //         }
  //       });
  //     }
  //   }
  // }, [client, time]);

  React.useEffect(() => {
    if (medications.isLoaded) {
      medications.data.forEach((element, index, object) => {
        const intakeIntervalStart = element[2];
        const intakeIntervalEnd = element[3];
        const currentTime = time.toLocaleTimeString().substring(0, 5);
        if (
          intakeIntervalStart === currentTime ||
          (intakeIntervalStart <= currentTime &&
            intakeIntervalEnd >= currentTime)
        ) {
          activeMedication.push(element);
          object.splice(index, 1);
        }
      });
    }
  }, [time]);

  React.useEffect(() => {
    activeMedication.forEach((element, index, object) => {
      const intakeIntervalEnd = element[3];
      const currentTime = time.toLocaleTimeString().substring(0, 5);
      if (currentTime >= intakeIntervalEnd) {
        object.splice(index, 1);

        const request = new MedicationMissedRequest();
        request.setPatientid(34);
        request.setMedicationid(element[0]);
        request.setDatetime(time.toLocaleString());

        client.medicationMissed(request, {}, (err, response) => {
          if (err) {
            console.log(
              `Unexpected error for pillDispenser: code = ${err.code}` +
                `, message = "${err.message}"`
            );
          } else {
            console.log(response.getMessage());

            enqueueSnackbar(response.getMessage(), {
              variant: "error",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              autoHideDuration: 2000,
            });
          }
        });
      }
    });
  }, [time]);

  return (
    <>
      <div className="Time">
        <Paper elevation={2} className="Time-paper">
          <Clock time={time} setTime={setTime} />
        </Paper>
      </div>

      {medications.isLoaded && !!medications.data && (
        <MedicationList
          medications={activeMedication}
          client={client}
          time={time}
        />
      )}
    </>
  );
}

export { MedicationDispenser };
