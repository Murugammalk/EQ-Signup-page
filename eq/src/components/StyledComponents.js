import styled ,{ keyframes } from 'styled-components';



export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
   
    
`;

export const LeftContainer = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: #333; /* Adjust text color for visibility */
    text-align: center;
   ; /* Add padding to control spacing */
    
 `;
 

 export const RightInnerContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        /* Background color for the inner container */
        padding: 90px;
        border-radius: 0px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        width: 100%; /* Adjust width as needed */
        max-width: 500px;
        height: 780px; /* Ensure it doesn’t exceed the max width */
        position: relative;
        z-index: 3;
        background: rgb(233,0,5);
        background: linear-gradient(323deg, rgba(233,0,5,0.5522584033613445) 30%, rgba(55,177,240,0.5438550420168067) 70%);
        animation: ${({ slideIn }) => (slideIn ? slideInRight : slideInLeft)} 0.6s ease;
      
`;   

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;   
    height: 100%;
    background: linear-gradient(135deg, rgba(111, 115, 210, 0.6), rgba(195, 207, 226, 0.6));
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 1;
`;

export const RightContainer = styled.div`
   position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #333; /* Adjust text color for visibility */
    text-align: center;
   ; /* Add padding to control spacing */
   
    
`;
export const Logo = styled.div`
    margin-bottom: 20px;
    
    img {
        width: 340px;
        height: auto;
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    margin: 0;
    z-index: 2;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    margin: 10px 0 30px;
    z-index: 2;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 30px;
    border-radius: 0px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    width: 500px;
    position: relative;
    z-index: 3; /* Fix z-index value */
    min-height: 780px; 
    max-width: 500px;
    animation: ${({ slideIn }) => (slideIn ? slideInLeft : slideInRight)} 0.6s ease;
`;


export const HeightContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 40px;
    border-radius: 0px;
    width: 500px;
    position: relative; 
    max-width: 500px;
    margin-top: 50px;
`;


export const FormTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;


export const Button = styled.button`
    background: linear-gradient(323deg, rgba(233,0,5,0.5522584033613445) 30%, rgba(55,177,240,0.5438550420168067) 70%);
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    color: black;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.3s ease;
    
    &:hover {
        background: linear-gradient(135deg, #5766cc, #a9bed8);
    }
`;




export const Links = styled.div`
    margin-top: 15px;
    
    a {
        color: #6f73d2;
        text-decoration: none;
        font-weight: bold;
        
        &:hover {
            text-decoration: none;
        }
    }
`;

export const Footer = styled.div`
    text-align: center;
    padding: 3px;
    width: 100%;
    p {
        color: #333;

        a {
            color: #6f73d2;
            text-decoration: none;

            &:hover {
                text-decoration: none;
            }
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 10px solid #ddd;
    line-height: 0.1em;
    margin: 20px 0;

    span {
        background: #fff;
        padding: 0 10px;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 14px 0;
    font-size : 20px;
   font-weight: 500; 
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 12px 12px 40px; /* Add padding to the left for the icon */
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
`;

export const InputIcon = styled.div`
    position: absolute;
   right: 12px; /* Position the icon inside the input */
    top: 50%;
    transform: translateY(-20%);
    color: black; /* Match icon color with theme */
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    transform: ${props => props.isLoginActive ? 'translateY(0)' : 'translateY(-100%)'};
`;

