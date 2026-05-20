import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading screen on route changes
    const handleStart = () => {
      setIsLoading(true);
      setIsVisible(true);
    };

    const handleEnd = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsVisible(false), 300);
      }, 800);
    };

    window.addEventListener('beforeunload', handleStart);
    const timer = setTimeout(handleEnd, 1500);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <div
            className="absolute inset-0 rounded-full border-2 border-accent"
            style={{
              animation: 'glow-pulse 2s ease-in-out infinite',
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.2)',
            }}
          />

          <div
            className="absolute inset-2 rounded-full border border-accent/60"
            style={{
              animation: 'glow-pulse 2s ease-in-out infinite 0.3s',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary"
                style={{
                  animation: 'spin 3s linear infinite',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.6)',
                  }}
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-background" />
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  animation: 'spin 6s linear infinite reverse',
                }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-accent/50" />
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-full border border-dashed border-primary/40"
            style={{
              animation: 'spin 8s linear infinite reverse',
            }}
          />
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Career<span className="text-primary">Radar</span>
          </h3>
          <p className="text-sm text-foreground/60 font-medium">Scanning opportunities...</p>

          <div className="flex items-center justify-center gap-1 h-6">
            <div
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: 'bounce 1.4s infinite',
              }}
            />
            <div
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: 'bounce 1.4s infinite 0.2s',
              }}
            />
            <div
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: 'bounce 1.4s infinite 0.4s',
              }}
            />
          </div>
        </div>

        <div className="w-48 md:w-64 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            style={{
              animation: 'progress 1.5s ease-in-out infinite',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 50px rgba(6, 182, 212, 0.8), inset 0 0 40px rgba(6, 182, 212, 0.3);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.6;
          }
        }

        @keyframes progress {
          0% {
            background-position: 200% 0;
          }
          50% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
