import React from 'react';
import { PlaylistHeader } from '../PlaylistHeader';
import { PlaylistItems } from './PlaylistItems';
import { NightMode } from '../Nightmode';
import { StyledPlaylist } from '../styles/StyledPlaylist';

export const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);
