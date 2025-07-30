import React, { useState, useEffect } from 'react';
import { Box, Button, Snackbar, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon, GetApp as GetAppIcon } from '@mui/icons-material';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // 检查是否已经安装
    const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                          window.matchMedia('(display-mode: fullscreen)').matches ||
                          (window.navigator as any).standalone === true;

    if (isAppInstalled) {
      return; // 如果已经安装，不显示提示
    }

    // 检查用户是否已经关闭过提示
    const hasUserDismissed = localStorage.getItem('pwaPromptDismissed');
    if (hasUserDismissed) {
      return;
    }

    // 监听beforeinstallprompt事件
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      
      // 延迟显示提示，让用户先浏览一下应用
      setTimeout(() => {
        setShowPrompt(true);
      }, 30000); // 30秒后显示
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    // 显示安装提示
    await installPrompt.prompt();

    // 等待用户响应
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted installation');
    } else {
      console.log('User declined installation');
    }

    // 重置提示状态
    setInstallPrompt(null);
    setShowPrompt(false);
  };

  const handleClose = () => {
    setShowPrompt(false);
    // 记住用户已经关闭了提示，30天内不再显示
    localStorage.setItem('pwaPromptDismissed', Date.now().toString());
    
    // 30天后清除记录，再次显示提示
    setTimeout(() => {
      localStorage.removeItem('pwaPromptDismissed');
    }, 30 * 24 * 60 * 60 * 1000);
  };

  if (!showPrompt) return null;

  return (
    <Snackbar
      open={showPrompt}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ bottom: { xs: 16, sm: 24 } }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
          maxWidth: 400,
        }}
      >
        <Box sx={{ flexGrow: 1, mr: 2 }}>
          <Typography variant="subtitle1" component="div" fontWeight="bold">
            Install App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add Smart Sports to your home screen for quick access
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          onClick={handleInstall}
          sx={{
            minWidth: 120,
            px: 3,
            py: 1,
            fontSize: '0.875rem',
            fontWeight: 600
          }}
        >
          Install
        </Button>
        <IconButton size="small" onClick={handleClose} sx={{ ml: 1 }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Snackbar>
  );
};

export default PWAInstallPrompt;