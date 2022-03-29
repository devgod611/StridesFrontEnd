import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.h1`
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    w-full
    transition-all
    z-10
    text-black
  `}

  ${(props) => (props.green ? tw`bg-red-100` : tw`bg-gray-100`)}

  img {
    ${tw`
      h-8
    `}
  }
`;