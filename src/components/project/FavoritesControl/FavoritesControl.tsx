import React, { useState, useEffect } from 'react';
import { uniq } from 'ramda';
import { Backplate } from '@/components/base/Backplate';
import { Paragraph } from '@/components/base/Typography';
import { Button } from '@/components/base/Button';
import { Box } from '@/components/base/Box';
import useLocalStorage from '@/hooks/useLocalStorage';

type Props = {
  id: number;
};

const favoritesStorageKey = 'favorites';

export const FavoritesControl: React.FC<Props> = ({ id }) => {
  const [favorites, setFavorites] = useLocalStorage(favoritesStorageKey, []);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (Array.isArray(favorites)) {
      setFavorite(favorites.includes(id));
    }
  }, [favorites]);

  const toggleFavorite = () => {
    if (Array.isArray(favorites)) {
      if (isFavorite) {
        setFavorites(favorites.filter(savedID => savedID !== id));
      } else {
        setFavorites(uniq([id, ...favorites]));
      }
    } else {
      setFavorites([id]);
    }
  };

  return (
    <Backplate data-testid="favorites">
      <Paragraph>
        If you like this car, click the button and save it in your collection of favourite items.
      </Paragraph>
      <Box display="flex" justifyContent="flex-end" mt={1}>
        <Button onClick={toggleFavorite}>{isFavorite ? 'Remove' : 'Save'}</Button>
      </Box>
    </Backplate>
  );
};
