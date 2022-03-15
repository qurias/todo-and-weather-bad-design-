import React from 'react'
import styled from 'styled-components'
import StyledFlex from '../styled/StyledFlex'

interface OptionsContainer {
  openMenu: boolean ;
}

const StyledOptionsContainer = styled(StyledFlex)<OptionsContainer>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: #000000b3;
  display: ${(props) => (props.openMenu ? 'flex' : 'none')};

  & > p, input, h2 {
    margin: 10px 0px;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  margin: 10px 0px;
`

const StyledCloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 3%;
  cursor: pointer;
`

const Options = ({ setColorApp }: any) => {
  const colorRef = React.useRef<HTMLInputElement>(null);

  const [openCloseMenu, setOpenCloseMenu] = React.useState<boolean>(false);

  const handleOpenCloseMenu = () => {
    setOpenCloseMenu((prev) => !prev);
  };

  const applySettings = () => {
    setColorApp(colorRef.current!.value);
  };

  return (
    <>
      <div onClick={handleOpenCloseMenu}>Настройки</div>
      <StyledOptionsContainer openMenu={openCloseMenu} direction="column" justify="center" items="center">
        <h2>Настройки 🤡</h2>
        <StyledCloseButton onClick={handleOpenCloseMenu}>Х</StyledCloseButton>
        <p>Выберите цвет приложения:</p>
        <input type="color" ref={colorRef} />
        <StyledButton onClick={applySettings}>Применить</StyledButton>
      </StyledOptionsContainer>
    </>
  );
};

export default Options;