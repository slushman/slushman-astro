import * as React from 'react';
import GalleryImage from './GalleryImage';

export type GalleryImage = {
  caption?: string;
  url: string;
};

export interface GalleryProps {
  gallery: string;
  images: GalleryImage[];
}

const Gallery = ({ gallery, images }: GalleryProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <figure class="">
      <ul class="grid m-0 gap-4 grid-cols-three-across">
        {images.map((image) => (
          <GalleryImage gallery={gallery} {...image} />
        ))}
      </ul>
    </figure>
  );
}

export default React.memo(Gallery);
