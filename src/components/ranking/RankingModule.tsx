import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  GridLegacy as Grid,
  keyframes,
  Fade,
  Grow,
  Slide
} from '@mui/material';
import { EmojiEvents, TrendingUp, Star, WorkspacePremium } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

interface Player {
  id: number;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  sport: string;
  wins: number;
  losses: number;
  winRate: number;
}

const mockPlayers: Player[] = [
  { id: 1, name: 'Alex Johnson', avatar: '/api/placeholder/40/40', points: 2450, rank: 1, sport: 'Tennis', wins: 45, losses: 8, winRate: 84.9 },
  { id: 2, name: 'Sarah Chen', avatar: '/api/placeholder/40/40', points: 2380, rank: 2, sport: 'Tennis', wins: 42, losses: 10, winRate: 80.8 },
  { id: 3, name: 'Mike Rodriguez', avatar: '/api/placeholder/40/40', points: 2320, rank: 3, sport: 'Basketball', wins: 38, losses: 12, winRate: 76.0 },
  { id: 4, name: 'Emma Wilson', avatar: '/api/placeholder/40/40', points: 2280, rank: 4, sport: 'Tennis', wins: 35, losses: 15, winRate: 70.0 },
  { id: 5, name: 'David Kim', avatar: '/api/placeholder/40/40', points: 2240, rank: 5, sport: 'Basketball', wins: 33, losses: 17, winRate: 66.0 }
];

// Luxury Animation keyframes
const elegantFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const luxuryGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.2), 0 0 60px rgba(255, 215, 0, 0.1), inset 0 0 25px rgba(255, 215, 0, 0.05);
  }
  50% { 
    box-shadow: 0 0 50px rgba(255, 215, 0, 0.4), 0 0 100px rgba(255, 215, 0, 0.15), inset 0 0 40px rgba(255, 215, 0, 0.1);
  }
`;

const subtlePulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const premiumShimmer = keyframes`
  0% { background-position: -300% 0; }
  100% { background-position: 300% 0; }
`;

const diamondSparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 0.8; transform: scale(1); }
`;

const smoothSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gracefulRotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.01); opacity: 0.95; }
`;

const RankingModule: React.FC = () => {
  const { mode } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  useEffect(() => {
    // Trigger initial animations
    setAnimationTrigger(true);
    
    // Staggered card animations
    const timeouts = [0, 200, 400].map((delay, index) => 
      setTimeout(() => {
        setCardAnimations(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [selectedTab]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setAnimationTrigger(false);
    setCardAnimations([false, false, false]);
    
    // Re-trigger animations after tab change
    setTimeout(() => {
      setAnimationTrigger(true);
      const timeouts = [0, 150, 300].map((delay, index) => 
        setTimeout(() => {
          setCardAnimations(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, delay)
      );
    }, 100);
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <WorkspacePremium sx={{ color: '#FFD700', fontSize: '2rem' }} />;
    if (rank === 2) return <EmojiEvents sx={{ color: '#C0C0C0', fontSize: '1.8rem' }} />;
    if (rank === 3) return <EmojiEvents sx={{ color: '#CD7F32', fontSize: '1.6rem' }} />;
    return <Star sx={{ color: '#666' }} />;
  };

  const getTopPlayerStyles = (index: number) => {
    const baseStyles = {
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      position: 'relative',
      overflow: 'visible',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.03) rotateY(3deg)',
        zIndex: 10
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        right: '-5px',
        bottom: '-5px',
        borderRadius: 'inherit',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: -1
      },
      '&:hover::before': {
        opacity: 1
      }
    };

    if (index === 0) {
      return {
        ...baseStyles,
        animation: `${elegantFloat} 6s ease-in-out infinite, ${luxuryGlow} 4s ease-in-out infinite, ${breathe} 3s ease-in-out infinite`,
        background: mode === 'dark'
          ? 'linear-gradient(145deg, rgba(255, 215, 0, 0.15) 0%, rgba(30, 30, 30, 0.95) 30%, rgba(255, 215, 0, 0.1) 70%, rgba(30, 30, 30, 0.95) 100%)'
          : 'linear-gradient(145deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 215, 0, 0.1) 70%, rgba(255, 255, 255, 0.95) 100%)',
        border: '2px solid rgba(255, 215, 0, 0.8)',
        borderImage: 'linear-gradient(45deg, #FFD700, #FFA000, #FFD700) 1',
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: '0 30px 60px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.25)',
          transform: 'translateY(-12px) scale(1.06) rotateY(5deg)'
        },
        '&::before': {
          ...baseStyles['&::before'],
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(255, 160, 0, 0.2))'
        }
      };
    } else if (index === 1) {
      return {
        ...baseStyles,
        animation: `${subtlePulse} 4s ease-in-out infinite, ${gracefulRotate} 1s ease-out`,
        background: mode === 'dark'
          ? 'linear-gradient(145deg, rgba(192, 192, 192, 0.12) 0%, rgba(30, 30, 30, 0.95) 50%, rgba(192, 192, 192, 0.12) 100%)'
          : 'linear-gradient(145deg, rgba(192, 192, 192, 0.12) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(192, 192, 192, 0.12) 100%)',
        border: '2px solid rgba(192, 192, 192, 0.8)',
        borderImage: 'linear-gradient(45deg, #C0C0C0, #A0A0A0, #C0C0C0) 1',
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: '0 25px 50px rgba(192, 192, 192, 0.35), 0 0 60px rgba(192, 192, 192, 0.2)',
          transform: 'translateY(-10px) scale(1.05) rotateY(4deg)'
        },
        '&::before': {
          ...baseStyles['&::before'],
          background: 'linear-gradient(45deg, rgba(192, 192, 192, 0.15), rgba(160, 160, 160, 0.15))'
        }
      };
    } else if (index === 2) {
      return {
        ...baseStyles,
        animation: `${smoothSlideIn} 1s ease-out, ${elegantFloat} 5s ease-in-out infinite 1s`,
        background: mode === 'dark'
          ? 'linear-gradient(145deg, rgba(205, 127, 50, 0.12) 0%, rgba(30, 30, 30, 0.95) 50%, rgba(205, 127, 50, 0.12) 100%)'
          : 'linear-gradient(145deg, rgba(205, 127, 50, 0.12) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(205, 127, 50, 0.12) 100%)',
        border: '2px solid rgba(205, 127, 50, 0.8)',
        borderImage: 'linear-gradient(45deg, #CD7F32, #8D5524, #CD7F32) 1',
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: '0 20px 40px rgba(205, 127, 50, 0.35), 0 0 50px rgba(205, 127, 50, 0.2)',
          transform: 'translateY(-8px) scale(1.04) rotateY(3deg)'
        },
        '&::before': {
          ...baseStyles['&::before'],
          background: 'linear-gradient(45deg, rgba(205, 127, 50, 0.15), rgba(141, 85, 36, 0.15))'
        }
      };
    }
    return baseStyles;
  };

  // Luxury Particle Effect Component for Champion
  const ParticleEffect = ({ index }: { index: number }) => {
    if (index !== 0) return null;
    
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          borderRadius: 'inherit'
        }}
      >
        {[...Array(4)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: 'radial-gradient(circle, #FFD700 0%, rgba(255,215,0,0.3) 70%, transparent 100%)',
              borderRadius: '50%',
              top: `${25 + i * 15}%`,
              left: `${20 + i * 20}%`,
              animation: `${diamondSparkle} ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </Box>
    );
  };

  const filteredPlayers = selectedTab === 0 ? mockPlayers : 
    selectedTab === 1 ? mockPlayers.filter(p => p.sport === 'Tennis') :
    mockPlayers.filter(p => p.sport === 'Basketball');

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
          Player Rankings
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }
            }}
          >
            <Tab label="All Sports" />
            <Tab label="Tennis" />
            <Tab label="Basketball" />
          </Tabs>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {filteredPlayers.slice(0, 3).map((player, index) => (
            <Grid item xs={12} md={4} key={player.id}>
              <Grow
                in={cardAnimations[index]}
                timeout={800}
                style={{
                  transformOrigin: '50% 50%',
                  transitionDelay: cardAnimations[index] ? `${index * 150}ms` : '0ms'
                }}
              >
                <Card
                  sx={{
                    ...getTopPlayerStyles(index),
                    backdropFilter: 'blur(15px)',
                    boxShadow: mode === 'dark'
                      ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.05)'
                      : '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.05)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'visible',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: index === 0 
                        ? 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)'
                        : 'transparent',
                      backgroundSize: '200% 200%',
                      animation: index === 0 ? `${premiumShimmer} 3s ease-in-out infinite` : 'none',
                      borderRadius: 'inherit',
                      pointerEvents: 'none'
                    }
                  }}
                >
                  <ParticleEffect index={index} />
                <Box
                  sx={{
                    position: 'absolute',
                    top: -25,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: index === 0 
                      ? 'linear-gradient(45deg, #FFD700 0%, #FFA000 100%)'
                      : index === 1 
                      ? 'linear-gradient(45deg, #C0C0C0 0%, #9E9E9E 100%)'
                      : 'linear-gradient(45deg, #CD7F32 0%, #8D5524 100%)',
                    borderRadius: '50%',
                    width: index === 0 ? 50 : index === 1 ? 45 : 40,
                    height: index === 0 ? 50 : index === 1 ? 45 : 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: index === 0 ? '1.2rem' : '1rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    animation: 'none',
                    border: '3px solid white'
                  }}
                >
                  #{player.rank}
                </Box>
                <CardContent sx={{ pt: 4 }}>
                  <Avatar
                    sx={{
                      width: index === 0 ? 110 : index === 1 ? 95 : 85,
                      height: index === 0 ? 110 : index === 1 ? 95 : 85,
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid',
                      borderColor: index === 0 ? 'rgba(255,215,0,0.8)' : index === 1 ? 'rgba(192,192,192,0.8)' : 'rgba(205,127,50,0.8)',
                      fontSize: index === 0 ? '2.8rem' : index === 1 ? '2.4rem' : '2.1rem',
                      fontWeight: 'bold',
                      background: index === 0 
                        ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)'
                        : index === 1 
                        ? 'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A8A8A8 100%)'
                        : 'linear-gradient(135deg, #D2691E 0%, #CD7F32 50%, #B8860B 100%)',
                      color: 'white',
                      boxShadow: index === 0 
                        ? '0 0 40px rgba(255, 215, 0, 0.4), inset 0 0 25px rgba(255, 255, 255, 0.15)'
                        : index === 1
                        ? '0 10px 30px rgba(192, 192, 192, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.1)'
                        : '0 8px 25px rgba(205, 127, 50, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      animation: index === 0 ? `${gracefulRotate} 1.2s ease-out, ${breathe} 4s ease-in-out infinite 1.2s` : 
                                 index === 1 ? `${gracefulRotate} 1.4s ease-out` : 
                                 `${gracefulRotate} 1.6s ease-out`,
                      position: 'relative',
                      '&:hover': {
                        transform: index === 0 ? 'scale(1.08) rotate(3deg)' : 
                                   index === 1 ? 'scale(1.06) rotate(2deg)' : 
                                   'scale(1.04) rotate(1deg)',
                        boxShadow: index === 0 
                          ? '0 0 60px rgba(255, 215, 0, 0.6), inset 0 0 35px rgba(255, 255, 255, 0.25)'
                          : index === 1
                          ? '0 15px 40px rgba(192, 192, 192, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.15)'
                          : '0 12px 35px rgba(205, 127, 50, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.12)'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-8px',
                        left: '-8px',
                        right: '-8px',
                        bottom: '-8px',
                        borderRadius: '50%',
                        background: index === 0 
                          ? 'conic-gradient(from 0deg, rgba(255,215,0,0.6), rgba(255,165,0,0.4), rgba(255,215,0,0.6))'
                          : 'transparent',
                        animation: index === 0 ? `${gracefulRotate} 8s linear infinite` : 'none',
                        zIndex: -1
                      }
                    }}
                  >
                    {player.name.charAt(0)}
                  </Avatar>
                  <Typography 
                    variant={index === 0 ? "h5" : "h6"} 
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      background: index === 0 
                        ? 'linear-gradient(45deg, #FFD700 0%, #FFA000 100%)'
                        : 'inherit',
                      WebkitBackgroundClip: index === 0 ? 'text' : 'inherit',
                      WebkitTextFillColor: index === 0 ? 'transparent' : 'inherit',
                      backgroundClip: index === 0 ? 'text' : 'inherit'
                    }}
                  >
                    {player.name}
                  </Typography>
                  <Chip
                    label={player.sport}
                    color="primary"
                    size={index === 0 ? "medium" : "small"}
                    sx={{ 
                      mb: 2,
                      background: index === 0 
                        ? 'linear-gradient(45deg, #FFD700 0%, #FFA000 100%)'
                        : 'inherit',
                      color: index === 0 ? 'white' : 'inherit',
                      fontWeight: 'bold'
                    }}
                  />
                  <Typography 
                    variant={index === 0 ? "h3" : "h4"} 
                    color="primary" 
                    gutterBottom
                    sx={{
                      fontWeight: 'bold'
                    }}
                  >
                    {player.points}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    Points
                  </Typography>
                  {index === 0 && (
                    <Box sx={{ mt: 1 }}>
                      <Chip
                        label="🏆 CHAMPION"
                        sx={{
                          background: 'linear-gradient(45deg, #FFD700 0%, #FFA000 100%)',
                          color: 'white',
                          fontWeight: 'bold',
                          animation: 'none'
                        }}
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

        <Fade in={animationTrigger} timeout={1200}>
          <Card
            sx={{
              background: mode === 'dark'
                ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.95) 0%, rgba(50, 50, 50, 0.95) 100%)'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
              backdropFilter: 'blur(15px)',
              border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: mode === 'dark'
                ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.05)'
                : '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: mode === 'dark'
                  ? '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)'
                  : '0 20px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingUp color="primary" />
              Detailed Rankings
            </Typography>
            <TableContainer component={Paper} sx={{ background: 'transparent' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Player</TableCell>
                    <TableCell>Sport</TableCell>
                    <TableCell align="right">Points</TableCell>
                    <TableCell align="right">Wins</TableCell>
                    <TableCell align="right">Losses</TableCell>
                    <TableCell align="right">Win Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPlayers.map((player, playerIndex) => (
                    <Slide
                      key={player.id}
                      direction="up"
                      in={animationTrigger}
                      timeout={600}
                      style={{
                        transitionDelay: animationTrigger ? `${playerIndex * 100 + 800}ms` : '0ms'
                      }}
                    >
                      <TableRow 
                        hover
                        sx={{
                          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          '&:hover': {
                            transform: 'translateX(6px) scale(1.01)',
                            backgroundColor: mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.06)' 
                              : 'rgba(0, 0, 0, 0.03)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
                          },
                          '&:hover .rank-icon': {
                            transform: 'scale(1.1) rotate(3deg)',
                            filter: 'brightness(1.1)'
                          },
                          '&:hover .player-avatar': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                          },
                          '&:hover .points-text': {
                            transform: 'scale(1.05)',
                            textShadow: '0 0 8px currentColor'
                          }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box 
                              className="rank-icon"
                              sx={{ 
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              {getRankIcon(player.rank)}
                            </Box>
                            <Typography 
                              variant="body2" 
                              fontWeight="bold"
                              sx={{
                                background: player.rank <= 3 
                                  ? player.rank === 1 ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                                    : player.rank === 2 ? 'linear-gradient(45deg, #C0C0C0, #A0A0A0)'
                                    : 'linear-gradient(45deg, #CD7F32, #8D5524)'
                                  : 'inherit',
                                WebkitBackgroundClip: player.rank <= 3 ? 'text' : 'inherit',
                                WebkitTextFillColor: player.rank <= 3 ? 'transparent' : 'inherit',
                                backgroundClip: player.rank <= 3 ? 'text' : 'inherit'
                              }}
                            >
                              #{player.rank}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar 
                              className="player-avatar"
                              sx={{ 
                                width: 36, 
                                height: 36,
                                transition: 'all 0.3s ease',
                                background: player.rank <= 3 
                                  ? player.rank === 1 ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                                    : player.rank === 2 ? 'linear-gradient(45deg, #C0C0C0, #A0A0A0)'
                                    : 'linear-gradient(45deg, #CD7F32, #8D5524)'
                                  : 'linear-gradient(45deg, #1976d2, #42a5f5)',
                                color: 'white',
                                fontWeight: 'bold'
                              }}
                            >
                              {player.name.charAt(0)}
                            </Avatar>
                            <Typography 
                              variant="body2" 
                              fontWeight={player.rank <= 3 ? 'bold' : 'normal'}
                              sx={{
                                background: player.rank <= 3 
                                  ? player.rank === 1 ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                                    : player.rank === 2 ? 'linear-gradient(45deg, #C0C0C0, #A0A0A0)'
                                    : 'linear-gradient(45deg, #CD7F32, #8D5524)'
                                  : 'inherit',
                                WebkitBackgroundClip: player.rank <= 3 ? 'text' : 'inherit',
                                WebkitTextFillColor: player.rank <= 3 ? 'transparent' : 'inherit',
                                backgroundClip: player.rank <= 3 ? 'text' : 'inherit'
                              }}
                            >
                              {player.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={player.sport} 
                            size="small" 
                            variant={player.rank <= 3 ? "filled" : "outlined"}
                            sx={{
                              background: player.rank <= 3 
                                ? player.rank === 1 ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                                  : player.rank === 2 ? 'linear-gradient(45deg, #C0C0C0, #A0A0A0)'
                                  : 'linear-gradient(45deg, #CD7F32, #8D5524)'
                                : 'inherit',
                              color: player.rank <= 3 ? 'white' : 'inherit',
                              fontWeight: player.rank <= 3 ? 'bold' : 'normal',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)'
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Typography 
                            className="points-text"
                            variant="body2" 
                            fontWeight="bold" 
                            color="primary"
                            sx={{
                              transition: 'all 0.3s ease',
                              background: player.rank <= 3 
                                ? player.rank === 1 ? 'linear-gradient(45deg, #FFD700, #FFA000)'
                                  : player.rank === 2 ? 'linear-gradient(45deg, #C0C0C0, #A0A0A0)'
                                  : 'linear-gradient(45deg, #CD7F32, #8D5524)'
                                : 'inherit',
                              WebkitBackgroundClip: player.rank <= 3 ? 'text' : 'inherit',
                              WebkitTextFillColor: player.rank <= 3 ? 'transparent' : 'inherit',
                              backgroundClip: player.rank <= 3 ? 'text' : 'inherit'
                            }}
                          >
                            {player.points}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" fontWeight={player.rank <= 3 ? 'bold' : 'normal'}>
                            {player.wins}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" fontWeight={player.rank <= 3 ? 'bold' : 'normal'}>
                            {player.losses}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="body2"
                            color={player.winRate >= 80 ? 'success.main' : player.winRate >= 60 ? 'warning.main' : 'error.main'}
                            fontWeight="bold"
                            sx={{
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)',
                                textShadow: '0 0 10px currentColor'
                              }
                            }}
                          >
                            {player.winRate}%
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </Slide>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default RankingModule;