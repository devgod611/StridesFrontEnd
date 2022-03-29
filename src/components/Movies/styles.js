import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
    ${tw`
        my-8
    `}

    margin-top: 60px;
    margin-bottom: 30px;
`;

export const MoviesTitle = styled.h2`
    ${tw`
        text-2xl
        font-bold
        uppercase
        mx-8
        hover:cursor-pointer
    `}
`;

export const MoviesRow = styled.div`
    ${tw`
        flex-1
        mt-4
        p-4
    `}

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MoviesPoster = styled.div`
    ${tw`
        m-2
        mb-9
        w-40
    `}

    width: 200px;
    display: inline-block
`;

export const MoviesTitlePoster = styled.a`
    ${tw`
        m-2
        w-40
        text-white
        hover:cursor-pointer
    `}

    &:hover {
        color: green
    }
`;

export const MoviesContextPoster = styled.img`
    ${tw`
        m-2
        w-40
    `}

    transition: all 0.2s;
    &:hover {
        transform: scale(1.09);
    }
    
    display: inline-block
`;