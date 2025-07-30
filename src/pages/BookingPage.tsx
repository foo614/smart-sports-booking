import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  GridLegacy as Grid,
  Paper,
  TextField,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Mock data for facilities (same as in FacilitiesPage)
const facilities = [
  {
    id: 1,
    name: 'Tennis Court',
    description: 'Professional-grade tennis courts with excellent lighting and surface.',
    image: 'https://source.unsplash.com/random/800x600/?tennis,court',
    price: '$25/hour',
    priceValue: 25,
    location: '123 Sports Avenue, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Changing Rooms', 'Equipment Rental', 'Parking', 'Lighting'],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: 'Basketball Court',
    description: 'Indoor basketball courts with professional flooring and equipment.',
    image: 'https://source.unsplash.com/random/800x600/?basketball,court',
    price: '$30/hour',
    priceValue: 30,
    location: '456 Sports Boulevard, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Indoor', 'Climate Control', 'Equipment Rental', 'Spectator Seating'],
    rating: 4.6,
    reviewCount: 98,
  },
  // More facilities...
];

const steps = ['Select Date & Time', 'Your Information', 'Payment', 'Confirmation'];

const BookingPage: React.FC = () => {
  const { facilityId } = useParams<{ facilityId: string }>();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  // Find the selected facility
  const facility = facilities.find(f => f.id === Number(facilityId)) || facilities[0];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value));
    
    // Update end time based on start time and duration
    if (startTime) {
      const newEndTime = new Date(startTime);
      newEndTime.setHours(newEndTime.getHours() + Number(event.target.value));
      setEndTime(newEndTime);
    }
  };

  const handleStartTimeChange = (newTime: Date | null) => {
    setStartTime(newTime);
    
    // Update end time based on new start time and current duration
    if (newTime) {
      const newEndTime = new Date(newTime);
      newEndTime.setHours(newEndTime.getHours() + duration);
      setEndTime(newEndTime);
    } else {
      setEndTime(null);
    }
  };

  const calculateTotal = () => {
    return facility.priceValue * duration;
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Duration
                </Typography>
                <RadioGroup
                  row
                  name="duration"
                  value={duration}
                  onChange={handleDurationChange}
                >
                  <FormControlLabel value={1} control={<Radio />} label="1 hour" />
                  <FormControlLabel value={2} control={<Radio />} label="2 hours" />
                  <FormControlLabel value={3} control={<Radio />} label="3 hours" />
                </RadioGroup>
              </Grid>
              {startTime && endTime && (
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Your booking: {selectedDate?.toLocaleDateString()} from {startTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to {endTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </LocalizationProvider>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                fullWidth
                autoComplete="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                autoComplete="tel"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="notes"
                name="notes"
                label="Special Requirements (Optional)"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Payment Method
              </Typography>
              <RadioGroup
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="onsite"
                  control={<Radio />}
                  label="Pay on Site"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6}>
              {paymentMethod === 'credit' && (
                <>
                  <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="outlined"
                    margin="normal"
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        required
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </>
              )}
              {paymentMethod === 'paypal' && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">
                    You will be redirected to PayPal to complete your payment.
                  </Typography>
                </Box>
              )}
              {paymentMethod === 'onsite' && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">
                    Please arrive 15 minutes before your booking time to complete the payment on site.
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="h5" gutterBottom>
              Thank you for your booking!
            </Typography>
            <Typography variant="subtitle1">
              Your booking confirmation has been sent to your email.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Booking reference: #BK{Math.floor(Math.random() * 10000)}
            </Typography>
          </Box>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Book {facility.name}
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && activeStep !== steps.length - 1 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="/"
                >
                  Return to Home
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={!selectedDate && activeStep === 0}
                >
                  {activeStep === steps.length - 2 ? 'Place Booking' : 'Next'}
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={facility.image}
              alt={facility.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {facility.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {facility.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" gutterBottom>
                Booking Summary
              </Typography>
              {selectedDate && startTime && endTime ? (
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Date:</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {selectedDate.toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Time:</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                      {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Duration:</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {duration} hour{duration > 1 ? 's' : ''}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Price per hour:</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      ${facility.priceValue}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1" fontWeight="bold">Total:</Typography>
                    <Typography variant="body1" fontWeight="bold" color="primary">
                      ${calculateTotal()}
                    </Typography>
                  </Box>
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Please select a date and time to see your booking summary.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingPage;