'use client';
import { IconButton, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import { Product } from '@/app/lib/producthero/constants';
type Props = {
  selectedProductDetails?: Product;
  selectedGroup: number;
  selectedSmallImageId: number;
  setSelectedSmallImageId: (id: number) => void;
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
        right: '50px',
        top: ' 50px',
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
                key={image}
                src={image}
                alt={image}
                width={60}
                height={60}
                style={{
                  borderRadius: '50%',
                  cursor: 'pointer',
                  border:
                    selectedSmallImageId === i ? 'solid 2px #565656' : 'none',
                  marginTop: '10px',
                }}
                onClick={() => {
                  setSelectedSmallImageId(i);
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
