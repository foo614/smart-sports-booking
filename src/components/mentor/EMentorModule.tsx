import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  GridLegacy as Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Badge
} from '@mui/material';
import {
  School,
  Star,
  Schedule,
  VideoCall,
  LocationOn,
  AttachMoney,
  EmojiEvents,
  Verified,
  CalendarToday
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

interface Coach {
  id: number;
  name: string;
  avatar: string;
  sport: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  experience: number;
  hourlyRate: number;
  availability: string[];
  certifications: string[];
  description: string;
  isOnline: boolean;
  sessionTypes: ('video' | 'in-person')[];
}

interface Appointment {
  id: number;
  coachId: number;
  coachName: string;
  date: string;
  time: string;
  duration: number;
  type: 'video' | 'in-person';
  status: 'upcoming' | 'completed' | 'cancelled';
  sport: string;
}

const mockCoaches: Coach[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '/api/placeholder/80/80',
    sport: 'Tennis',
    specialties: ['Technique', 'Strategy', 'Mental Game'],
    rating: 4.9,
    reviewCount: 127,
    experience: 8,
    hourlyRate: 75,
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    certifications: ['USPTA Certified', 'Mental Performance Coach'],
    description: 'Former professional tennis player with 8 years of coaching experience. Specializes in developing proper technique and mental toughness.',
    isOnline: true,
    sessionTypes: ['video', 'in-person']
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    avatar: '/api/placeholder/80/80',
    sport: 'Basketball',
    specialties: ['Shooting', 'Defense', 'Team Play'],
    rating: 4.8,
    reviewCount: 89,
    experience: 12,
    hourlyRate: 85,
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    certifications: ['NBA Certified Coach', 'Youth Development Specialist'],
    description: 'Former college basketball player and professional coach. Expert in developing fundamental skills and team strategies.',
    isOnline: false,
    sessionTypes: ['in-person']
  },
  {
    id: 3,
    name: 'Emma Chen',
    avatar: '/api/placeholder/80/80',
    sport: 'Swimming',
    specialties: ['Stroke Technique', 'Endurance', 'Competition Prep'],
    rating: 4.9,
    reviewCount: 156,
    experience: 10,
    hourlyRate: 70,
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    certifications: ['USA Swimming Certified', 'Strength & Conditioning'],
    description: 'Olympic-level swimmer turned coach. Specializes in stroke refinement and competitive swimming preparation.',
    isOnline: true,
    sessionTypes: ['video', 'in-person']
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: '/api/placeholder/80/80',
    sport: 'Badminton',
    specialties: ['Footwork', 'Smash Technique', 'Doubles Strategy'],
    rating: 4.7,
    reviewCount: 73,
    experience: 6,
    hourlyRate: 60,
    availability: ['Wednesday', 'Friday', 'Saturday', 'Sunday'],
    certifications: ['BWF Level 2 Coach', 'Sports Psychology'],
    description: 'International badminton player with extensive coaching experience in both singles and doubles play.',
    isOnline: true,
    sessionTypes: ['video', 'in-person']
  }
];

const mockAppointments: Appointment[] = [
  {
    id: 1,
    coachId: 1,
    coachName: 'Sarah Johnson',
    date: '2024-06-25',
    time: '14:00',
    duration: 60,
    type: 'video',
    status: 'upcoming',
    sport: 'Tennis'
  },
  {
    id: 2,
    coachId: 3,
    coachName: 'Emma Chen',
    date: '2024-06-20',
    time: '10:00',
    duration: 90,
    type: 'in-person',
    status: 'completed',
    sport: 'Swimming'
  }
];

const EMentorModule: React.FC = () => {
  const { mode } = useTheme();
  const [coaches] = useState<Coach[]>(mockCoaches);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    duration: '60',
    type: 'video' as 'video' | 'in-person',
    notes: ''
  });

  const handleBookSession = () => {
    if (selectedCoach) {
      const newAppointment: Appointment = {
        id: appointments.length + 1,
        coachId: selectedCoach.id,
        coachName: selectedCoach.name,
        date: bookingForm.date,
        time: bookingForm.time,
        duration: parseInt(bookingForm.duration),
        type: bookingForm.type,
        status: 'upcoming',
        sport: selectedCoach.sport
      };
      
      setAppointments([...appointments, newAppointment]);
      setOpenBooking(false);
      setBookingForm({
        date: '',
        time: '',
        duration: '60',
        type: 'video',
        notes: ''
      });
    }
  };

  const filteredCoaches = selectedSport === 'all' 
    ? coaches 
    : coaches.filter(coach => coach.sport.toLowerCase() === selectedSport.toLowerCase());

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            background: mode === 'dark'
              ? 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)'
              : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          E-Mentor Coach System
        </Typography>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <Card
            sx={{
              mb: 4,
              background: mode === 'dark'
                ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.9) 100%)'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Schedule color="primary" />
                Upcoming Sessions
              </Typography>
              <List>
                {upcomingAppointments.map((appointment) => (
                  <ListItem key={appointment.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <School />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${appointment.coachName} - ${appointment.sport}`}
                      secondary={`${new Date(appointment.date).toLocaleDateString()} at ${appointment.time} (${appointment.duration} min)`}
                    />
                    <Chip
                      label={appointment.type === 'video' ? 'Video Call' : 'In-Person'}
                      color={appointment.type === 'video' ? 'primary' : 'secondary'}
                      size="small"
                      icon={appointment.type === 'video' ? <VideoCall /> : <LocationOn />}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}

        {/* Filter */}
        <Box sx={{ mb: 4 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter by Sport</InputLabel>
            <Select
              value={selectedSport}
              label="Filter by Sport"
              onChange={(e) => setSelectedSport(e.target.value)}
            >
              <MenuItem value="all">All Sports</MenuItem>
              <MenuItem value="tennis">Tennis</MenuItem>
              <MenuItem value="basketball">Basketball</MenuItem>
              <MenuItem value="swimming">Swimming</MenuItem>
              <MenuItem value="badminton">Badminton</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Coaches Grid */}
        <Grid container spacing={3}>
          {filteredCoaches.map((coach) => (
            <Grid item xs={12} md={6} lg={4} key={coach.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.9) 100%)'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: mode === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: mode === 'dark'
                      ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      sx={{
                        '& .MuiBadge-badge': {
                          backgroundColor: coach.isOnline ? '#44b700' : '#grey.500',
                          color: coach.isOnline ? '#44b700' : '#grey.500',
                          '&::after': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            animation: coach.isOnline ? 'ripple 1.2s infinite ease-in-out' : 'none',
                            border: '1px solid currentColor',
                            content: '""'
                          }
                        },
                        '@keyframes ripple': {
                          '0%': {
                            transform: 'scale(.8)',
                            opacity: 1
                          },
                          '100%': {
                            transform: 'scale(2.4)',
                            opacity: 0
                          }
                        }
                      }}
                    >
                      <Avatar
                        sx={{ width: 64, height: 64 }}
                        src={coach.avatar}
                      >
                        {coach.name.charAt(0)}
                      </Avatar>
                    </Badge>
                    <Box sx={{ ml: 2, flexGrow: 1 }}>
                      <Typography variant="h6" component="h2">
                        {coach.name}
                      </Typography>
                      <Chip
                        label={coach.sport}
                        size="small"
                        color="primary"
                        sx={{ mb: 1 }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={coach.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {coach.rating} ({coach.reviewCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {coach.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Specialties:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {coach.specialties.map((specialty, index) => (
                        <Chip
                          key={index}
                          label={specialty}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Certifications:
                    </Typography>
                    {coach.certifications.map((cert, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Verified sx={{ fontSize: 16, mr: 1, color: 'success.main' }} />
                        <Typography variant="body2">{cert}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Experience:
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {coach.experience} years
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Hourly Rate:
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      ${coach.hourlyRate}/hour
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Session Types:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {coach.sessionTypes.map((type) => (
                        <Chip
                          key={type}
                          label={type === 'video' ? 'Video Call' : 'In-Person'}
                          size="small"
                          icon={type === 'video' ? <VideoCall /> : <LocationOn />}
                          color={type === 'video' ? 'primary' : 'secondary'}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<CalendarToday />}
                    onClick={() => {
                      setSelectedCoach(coach);
                      setOpenBooking(true);
                    }}
                    sx={{
                      background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)'
                      }
                    }}
                  >
                    Book Session
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Booking Dialog */}
        <Dialog open={openBooking} onClose={() => setOpenBooking(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            Book Session with {selectedCoach?.name}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Time"
                  type="time"
                  value={bookingForm.time}
                  onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Duration</InputLabel>
                  <Select
                    value={bookingForm.duration}
                    label="Duration"
                    onChange={(e) => setBookingForm({ ...bookingForm, duration: e.target.value })}
                  >
                    <MenuItem value="30">30 minutes</MenuItem>
                    <MenuItem value="60">60 minutes</MenuItem>
                    <MenuItem value="90">90 minutes</MenuItem>
                    <MenuItem value="120">120 minutes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Session Type</InputLabel>
                  <Select
                    value={bookingForm.type}
                    label="Session Type"
                    onChange={(e) => setBookingForm({ ...bookingForm, type: e.target.value as 'video' | 'in-person' })}
                  >
                    {selectedCoach?.sessionTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type === 'video' ? 'Video Call' : 'In-Person'}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes (Optional)"
                  multiline
                  rows={3}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Any specific goals or areas you'd like to focus on..."
                />
              </Grid>
              {selectedCoach && (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      background: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Total Cost: ${selectedCoach.hourlyRate * (parseInt(bookingForm.duration) / 60)}
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenBooking(false)}>Cancel</Button>
            <Button onClick={handleBookSession} variant="contained">
              Book Session
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default EMentorModule;