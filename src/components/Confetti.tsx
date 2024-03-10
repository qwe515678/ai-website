'use client'

import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Confetti() {
  const [isExploding, setIsExploding] = useState(false);
  return <>{isExploding && <ConfettiExplosion />} <button>click</button></>;
}