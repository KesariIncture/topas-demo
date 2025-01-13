
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  TextField,
  Button,
  Container,
  Box,
  Alert,
  Typography,
  Paper
} from '@mui/material';

// Define the validation schema using Zod
const signupSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .nonempty('Username is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/\d/, 'Password must contain at least one number')
    .nonempty('Password is required'),
  age: z
    .number()
    .int()
    .min(18, 'You must be at least 18 years old')
    .max(120, 'Please enter a valid age')
    .or(z.string().regex(/^\d+$/).transform(Number))
    .refine((val) => val >= 18 && val <= 120, {
      message: 'Please enter a valid age between 18 and 120',
    }),
  occupation: z
    .string()
    .nonempty('Occupation is required')
});

const Talent= () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      age: '',
      occupation: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your server
    reset();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
          <TextField
            {...register('username')}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            {...register('email')}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register('password')}
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            {...register('age', { valueAsNumber: true })}
            margin="normal"
            required
            fullWidth
            id="age"
            label="Age"
            type="number"
            error={!!errors.age}
            helperText={errors.age?.message}
          />

          <TextField
            {...register('occupation')}
            margin="normal"
            required
            fullWidth
            id="occupation"
            label="Occupation"
            error={!!errors.occupation}
            helperText={errors.occupation?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>

        {isSubmitSuccessful && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Form submitted successfully!
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default Talent;