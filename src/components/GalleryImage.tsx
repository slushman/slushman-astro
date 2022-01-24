import * as React from 'react';

export interface GalleryImageProps {
  caption?: string;
  gallery: string;
  url: string;
}

const GalleryImage = ({ gallery, caption, url }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDialog = React.useCallback(
    () => {
      console.log({ caption, isOpen });
      setIsOpen(!isOpen);
    },
    [caption, isOpen],
  );

  const src = `/gallery/${gallery}/${url}`;

  return (
    <li class="">
      <figure class="">
        <img alt={caption} class="cursor-zoom-in" onClick={toggleDialog} src={src} />
        <figcaption class="">{caption}</figcaption>
        {isOpen && (
          <dialog
            class=""
            onClick={toggleDialog}
            open
            style={{ position: 'absolute' }}
          >
            <img
              alt={caption}
              class=""
              onClick={toggleDialog}
              src={src}
            />
          </dialog>
        )}
      </figure>
    </li>
  );
};

export default React.memo(GalleryImage);
