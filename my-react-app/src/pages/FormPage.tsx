import { Container, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(9, "Must be at least 9 digits").max(11, "Must be at most 11 digits"),
});

type FormData = z.infer<typeof schema>;

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("name")} label="Name" fullWidth margin="normal" error={!!errors.name} helperText={errors.name?.message} />
        <TextField {...register("surname")} label="Surname" fullWidth margin="normal" error={!!errors.surname} helperText={errors.surname?.message} />
        <TextField {...register("email")} label="Email" type="email" fullWidth margin="normal" error={!!errors.email} helperText={errors.email?.message} />
        <TextField {...register("phoneNumber")} label="Phone Number" fullWidth margin="normal" error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Container>
  );
};

export default FormPage;
