import React from 'react';
import {
  CookieLove,
  CupOfTea,
  DayOff,
  HealthyLifestyle,
  Meditation,
  PositiveAttitude,
  Yoga,
  Sleep,
  Dreamer
} from '../../assets/undraws';

export default function TagUndraw(props) {
  switch(props.tag) {
    case 'burnout':
      return <DayOff />;
    case 'eye care':
      return <Dreamer />;
    case 'imposter syndrome':
      return <PositiveAttitude />;
    case 'mental health':
      return <Meditation />;
    case 'physical health':
      return <HealthyLifestyle />;
    case 'posture':
      return <Yoga />;
    case 'sleep':
      return <Sleep />;
    default:
      return <DayOff />;
  }
}
