import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
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
  Avatar,
  AvatarGroup,
  LinearProgress
} from '@mui/material';
import {
  EmojiEvents,
  Add,
  CalendarToday,
  LocationOn,
  People,
  AttachMoney
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

interface Tournament {
  id: number;
  name: string;
  sport: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  entryFee: number;
  prize: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  description: string;
}

const mockTournaments: Tournament[] = [
  {
    id: 1,
    name: 'Summer Tennis Championship',
    sport: 'Tennis',
    date: '2024-07-15',
    location: 'Central Tennis Courts',
    participants: 24,
    maxParticipants: 32,
    entryFee: 50,
    prize: '$2,000 + Trophy',
    status: 'upcoming',
    description: 'Annual summer tennis tournament featuring singles and doubles matches.'
  },
  {
    id: 2,
    name: 'Basketball 3v3 Street Tournament',
    sport: 'Basketball',
    date: '2024-06-20',
    location: 'Downtown Basketball Courts',
    participants: 16,
    maxParticipants: 24,
    entryFee: 75,
    prize: '$1,500 + Medals',
    status: 'ongoing',
    description: 'Fast-paced 3v3 basketball tournament with team registration.'
  },
  {
    id: 3,
    name: 'Swimming Sprint Challenge',
    sport: 'Swimming',
    date: '2024-08-10',
    location: 'Olympic Pool Complex',
    participants: 8,
    maxParticipants: 20,
    entryFee: 30,
    prize: '$800 + Certificates',
    status: 'upcoming',
    description: 'Individual swimming competition featuring 50m and 100m sprints.'
  },
  {
    id: 4,
    name: 'Spring Tennis Open',
    sport: 'Tennis',
    date: '2024-05-15',
    location: 'Riverside Tennis Club',
    participants: 32,
    maxParticipants: 32,
    entryFee: 40,
    prize: '$1,200 + Trophy',
    status: 'completed',
    description: 'Completed spring tournament with great participation.'
  }
];

const TournamentModule: React.FC = () => {
  const { mode } = useTheme();
  const [tournaments, setTournaments] = useState<Tournament[]>(mockTournaments);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [newTournament, setNewTournament] = useState({
    name: '',
    sport: '',
    date: '',
    location: '',
    maxParticipants: '',
    entryFee: '',
    prize: '',
    description: ''
  });

  const handleCreateTournament = () => {
    const tournament: Tournament = {
      id: tournaments.length + 1,
      name: newTournament.name,
      sport: newTournament.sport,
      date: newTournament.date,
      location: newTournament.location,
      participants: 0,
      maxParticipants: parseInt(newTournament.maxParticipants),
      entryFee: parseInt(newTournament.entryFee),
      prize: newTournament.prize,
      status: 'upcoming',
      description: newTournament.description
    };
    
    setTournaments([...tournaments, tournament]);
    setOpenDialog(false);
    setNewTournament({
      name: '',
      sport: '',
      date: '',
      location: '',
      maxParticipants: '',
      entryFee: '',
      prize: '',
      description: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'primary';
      case 'ongoing': return 'warning';
      case 'completed': return 'success';
      default: return 'default';
    }
  };

  const filteredTournaments = selectedStatus === 'all' 
    ? tournaments 
    : tournaments.filter(t => t.status === selectedStatus);

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: mode === 'dark'
                ? 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)'
                : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Tournaments
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenDialog(true)}
            sx={{
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)'
              }
            }}
          >
            Create Tournament
          </Button>
        </Box>

        <Box sx={{ mb: 4 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter by Status</InputLabel>
            <Select
              value={selectedStatus}
              label="Filter by Status"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="all">All Tournaments</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
              <MenuItem value="ongoing">Ongoing</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {filteredTournaments.map((tournament) => (
            <Grid item xs={12} md={6} lg={4} key={tournament.id}>
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {tournament.name}
                    </Typography>
                    <Chip
                      label={tournament.status}
                      color={getStatusColor(tournament.status) as any}
                      size="small"
                    />
                  </Box>
                  
                  <Chip
                    label={tournament.sport}
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {tournament.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarToday sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {new Date(tournament.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {tournament.location}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <People sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {tournament.participants}/{tournament.maxParticipants} participants
                    </Typography>
                  </Box>
                  
                  <LinearProgress
                    variant="determinate"
                    value={(tournament.participants / tournament.maxParticipants) * 100}
                    sx={{ mb: 2, height: 6, borderRadius: 3 }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AttachMoney sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Entry Fee: ${tournament.entryFee}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmojiEvents sx={{ fontSize: 16, mr: 1, color: 'gold' }} />
                    <Typography variant="body2" color="text.secondary">
                      Prize: {tournament.prize}
                    </Typography>
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 2, pt: 0 }}>
                  {tournament.status === 'upcoming' && (
                    <Button
                      variant="contained"
                      fullWidth
                      disabled={tournament.participants >= tournament.maxParticipants}
                    >
                      {tournament.participants >= tournament.maxParticipants ? 'Full' : 'Register'}
                    </Button>
                  )}
                  {tournament.status === 'ongoing' && (
                    <Button variant="outlined" fullWidth>
                      View Bracket
                    </Button>
                  )}
                  {tournament.status === 'completed' && (
                    <Button variant="outlined" fullWidth>
                      View Results
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
          <DialogTitle>Create New Tournament</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tournament Name"
                  value={newTournament.name}
                  onChange={(e) => setNewTournament({ ...newTournament, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Sport</InputLabel>
                  <Select
                    value={newTournament.sport}
                    label="Sport"
                    onChange={(e) => setNewTournament({ ...newTournament, sport: e.target.value })}
                  >
                    <MenuItem value="Tennis">Tennis</MenuItem>
                    <MenuItem value="Basketball">Basketball</MenuItem>
                    <MenuItem value="Swimming">Swimming</MenuItem>
                    <MenuItem value="Badminton">Badminton</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  value={newTournament.date}
                  onChange={(e) => setNewTournament({ ...newTournament, date: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  value={newTournament.location}
                  onChange={(e) => setNewTournament({ ...newTournament, location: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Max Participants"
                  type="number"
                  value={newTournament.maxParticipants}
                  onChange={(e) => setNewTournament({ ...newTournament, maxParticipants: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Entry Fee ($)"
                  type="number"
                  value={newTournament.entryFee}
                  onChange={(e) => setNewTournament({ ...newTournament, entryFee: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Prize"
                  value={newTournament.prize}
                  onChange={(e) => setNewTournament({ ...newTournament, prize: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={3}
                  value={newTournament.description}
                  onChange={(e) => setNewTournament({ ...newTournament, description: e.target.value })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleCreateTournament} variant="contained">
              Create Tournament
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default TournamentModule;