'use client';
import { IconButton, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import { Product } from '@/app/lib/producthero/constants';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
  selectedProductDetails?: Product;
  selectedGroup: number;
  selectedSmallImageId: string;
  setSelectedSmallImageId: (id: string) => void;
  setSelectedImage: (img: string) => void;
  setSelectedGroup: (group: number) => void;
};

export default function ProductSmallImgCard({
  selectedProductDetails,
  selectedGroup,
  selectedSmallImageId,
  setSelectedSmallImageId,
  setSelectedImage,
  setSelectedGroup,
}: Props) {
  const smallScreen = useMediaQuery('(max-width:700px)');

  return (
    <Stack
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'hsla(0,0%,100%,.2)',
        borderRadius: '24px',
        padding: '10px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        right: smallScreen ? '10px' : '50px',
        top: smallScreen ? '150px' : ' 50px',
      }}
    >
      {selectedProductDetails &&
        selectedProductDetails.thumbnailImages.map((image, i) => {
          if (
            (selectedGroup === 0 && i < 3) ||
            (selectedGroup === 1 && i > 2 && i < 6)
            // ||(selectedGroup === 2 && i > 5 && i < 9)
          ) {
            return (
              <Image
                key={image.id}
                src={image.src}
                alt={image.id}
                width={60}
                height={60}
                style={{
                  borderRadius: '50%',
                  cursor: 'pointer',
                  border:
                    selectedSmallImageId === image.id
                      ? 'solid 2px #565656'
                      : 'none',
                  marginTop: '10px',
                }}
                onClick={() => {
                  setSelectedSmallImageId(image.id);
                  setSelectedImage(selectedProductDetails.images[i]);
                }}
              />
            );
          }
        })}

      <IconButton
        onClick={() =>
          setSelectedGroup(selectedGroup < 1 ? selectedGroup + 1 : 0)
        }
      >
        <ArrowDropDownIcon />
      </IconButton>
    </Stack>
  );
}
