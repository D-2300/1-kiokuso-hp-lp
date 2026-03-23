import React from 'react';

interface LPVoiceBubbleProps {
  text: string;
  author: string;
  detail: string;
  img?: string;
  variant?: 'light' | 'green';
}

const LPVoiceBubble: React.FC<LPVoiceBubbleProps> = ({
  text,
  author,
  detail,
  img,
  variant = 'light',
}) => {
  const isGreen = variant === 'green';

  return (
    <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      maxWidth: 640,
      margin: '0 auto',
    }}>
      <div style={{
        width: 60,
        height: 60,
        minWidth: 60,
        borderRadius: '50%',
        background: isGreen ? 'rgba(255,255,255,0.3)' : '#EAF0E8',
        border: `2px solid ${isGreen ? 'rgba(255,255,255,0.5)' : '#A8BFA2'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {img ? (
          <img src={img} alt={author} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill={isGreen ? 'rgba(255,255,255,0.5)' : '#A8BFA2'} />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={isGreen ? 'rgba(255,255,255,0.5)' : '#A8BFA2'} />
          </svg>
        )}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          position: 'relative',
          background: isGreen ? 'rgba(255,255,255,0.12)' : '#F8F7F4',
          borderRadius: 12,
          padding: '16px 20px',
          border: `1px solid ${isGreen ? 'rgba(255,255,255,0.2)' : '#E8E6E0'}`,
        }}>
          <div style={{
            position: 'absolute',
            left: -8,
            top: 18,
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `8px solid ${isGreen ? 'rgba(255,255,255,0.12)' : '#F8F7F4'}`,
          }} />
          <p style={{
            fontSize: 14,
            lineHeight: 1.9,
            color: isGreen ? '#FFFFFF' : '#333333',
            margin: 0,
          }}>
            {text}
          </p>
        </div>
        <p style={{
          fontSize: 12,
          color: isGreen ? 'rgba(255,255,255,0.7)' : '#999999',
          margin: '8px 0 0 4px',
        }}>
          {author}｜{detail}
        </p>
      </div>
    </div>
  );
};

export default LPVoiceBubble;
