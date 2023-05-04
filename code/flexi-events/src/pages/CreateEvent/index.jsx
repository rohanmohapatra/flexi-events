import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Layout from "components/Layout";
import React from "react";
import { useForm } from "react-hook-form";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const startDate = register("startDate");
  console.log(getValues());

  return (
    <Layout>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        color="white"
        spacing={7}
      >
        <Typography variant="h5" component="h2">
          CREATE YOUR EVENT
        </Typography>
        <Stack width="40%" alignItems="center" spacing={5}>
          <TextField
            label="Event Title"
            id="title"
            aria-describedby="title-text"
            focused
            fullWidth
            required
            {...register("title", { required: true })}
          />
          <TextField
            id="description"
            label="Event Description"
            multiline
            rows={4}
            fullWidth
            {...register("description", { required: false })}
          />
          <Stack direction="row">
            <DatePicker
              label="Select start date"
              value={getValues("startDate")}
              onChange={(value) => {
                const payload = {
                  target: { name: "startDate", value },
                };
                startDate.onChange(payload);
              }}
            />
            {/* <TimePicker
              label="Select start time"
              {...register("startTime", { required: true })}
            /> */}
          </Stack>
          {/* <Stack direction="row">
            <DatePicker
              label="Select end date"
              {...register("endDate", { required: true })}
            />
            <TimePicker
              label="Select end time"
              {...register("endTime", { required: true })}
            />
          </Stack> */}
          <Button
            variant="contained"
            onClick={handleSubmit((data) => console.log(data))}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default CreateEvent;
