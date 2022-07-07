import NextImage from "next/image";
import styled from "styled-components";
import { getMedia } from "../lib/media";

const Image = ({ image, className }) => {
  const { placeholder, alternativeText, width, height } =
    image?.data?.attributes ?? {};

  return (
    <ImageElement className={className}>
      {image?.data && (
        <NextImage
          className={className}
          layout="responsive"
          width={width || "100%"}
          height={height || "100%"}
          objectFit="contain"
          src={getMedia(image)}
          alt={alternativeText || ""}
          blurDataURL={placeholder}
          placeholder="blur"
        />
      )}
    </ImageElement>
  );
};
const ImageElement = styled.div`
  width: 100%;
`;
export default Image;
