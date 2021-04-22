import styled from "styled-components";


export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:20px 0px;
    flex-direction:${({ column }) => (column ? 'column' : 'row')}
`;

export const ControlContainer = styled(Container)`
    gap:20em;

    @media screen and (max-width: 768px) {
		gap: 10em;
	}
`;
export const ScreenSelectContainer = styled(Container)`

    justify-content:flex-start;
    @media screen and (max-width: 768px) {
		justify-content:center;
	}
`;

export const Video = styled.video`
    background-color:black;
    aspect-ratio:16/9;
    width:clamp(480px,70vw,1080px);

`;

const boxShadowPrimary = `2px 2px 5px 1px hsl(248, 100%, 69%,0.7),-2px -2px 5px 1px hsl(248, 100%, 69%,0.7),2px -2px 5px 1px hsl(248, 100%, 69%,0.7),-2px 2px 5px 1px hsl(248, 100%, 69%,0.7)`;
const boxShadowNonPrimary = `2px 2px 5px 1px hsl(0, 91%, 58%, 0.4),-2px -2px 5px 1px hsl(0, 91%, 58%, 0.4),2px -2px 5px 1px hsl(0, 91%, 58%, 0.4),-2px 2px 5px 1px hsl(0, 91%, 58%, 0.4)`;
const boxShadowInfo = `2px 2px 5px 1px hsl(216, 100%, 55%, 0.4),-2px -2px 5px 1px hsl(216, 100%, 55%, 0.4),2px -2px 5px 1px hsl(216, 100%, 55%, 0.4),-2px 2px 5px 1px hsl(216, 100%, 55%, 0.4)`;
export const Button = styled.button`
    padding: 10px 6px;
    color:#fff;
    background-color:hsl(220, 13%, 31%);
    opacity:0.8;
    border:0;
    border-radius:3px;
    text-transform:uppercase;
    font-weight:800;
    cursor: pointer;
    transition:all .3s ease-in-out ;

    &:hover {
        opacity:1;
        box-shadow:${({ primary, info }) => (primary ? boxShadowPrimary : info ? boxShadowInfo : boxShadowNonPrimary)}

    }
    &:active {
        background-color:${({ primary, info }) => (primary ? `hsl(243, 55%, 55%)` : info ? `hsl(216, 100%, 55%)` : `hsl(0, 91%, 58%)`)};
    }
`;
