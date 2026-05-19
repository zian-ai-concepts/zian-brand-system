/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        zian: {
          void: '#000000',
          obsidian: '#050505',
          graphite: '#0A0A0A',
          carbon: '#222222',
          iron: '#2F2F2F',
          steel: '#555555',
          titanium: '#888888',
          silver: '#CCCCCC',
          white: '#F6F6EE',
          aura: '#E8EEE2',
          alloy: '#DDE4DA',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'zian-deep': '0 32px 64px rgba(0, 0, 0, 0.72)',
        'zian-aura': '0 0 32px rgba(221, 228, 218, 0.14)',
      },
    },
  },
};
