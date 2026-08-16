// src/components/GoogleTranslate.tsx
'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslate() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Detecta si ya está en inglés al cargar (por la cookie)
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('googtrans='));
    if (cookie && cookie.includes('/en')) {
      setIsEnglish(true);
    }

    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleLanguage = () => {
    const targetLang = isEnglish ? 'es' : 'en';

    if (targetLang === 'en') {
      const value = '/es/en';
      document.cookie = `googtrans=${value};path=/`;
      document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
    } else {
      document.cookie = 'googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC';
      document.cookie = `googtrans=;path=/;domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    }

    window.location.reload();
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      <button onClick={toggleLanguage} className="lang-toggle-btn">
  <span className="lang-text">{isEnglish ? 'EN' : 'ES'}</span>
</button>

    </>
  );
}