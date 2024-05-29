import styled from "styled-components";

const Frame = styled.div`
  position: absolute;
  top: 2%;
  left: 40%;
  height: 90vh;
  width: 22%;
  border-radius: 40px 40px;
  background: linear-gradient(
    45deg,
    rgba(240, 183, 161, 1) 0%,
    rgba(140, 51, 16, 1) 29%,
    rgba(117, 34, 1, 1) 62%,
    rgba(191, 110, 78, 1) 100%
  );
  display: flex;
  flex-direction: column;
  -webkit-box-reflect: below 0px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const Display = styled.div`
  margin: auto;
  height: 40vh;
  width: 95%;
  border-radius: 5px 5px;
  border: 4px solid black;
  display: flex;
`;
const LeftDisplay = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  padding-left: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RightDisplay = styled.div`
  height: 100%;
  width: 50%;
  background: url("https://getwallpapers.com/wallpaper/full/f/b/7/301522.jpg");
  background-size: cover;
`;
const Menu = styled.div`
  margin: auto;
  height: 35vh;
  width: 70%;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Div = styled.div`
  padding: 10px;
`;
const Icon = styled.span`
  font-size: x-large;
  color: rgb(255, 0, 106);
`;
const Play = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #782403;
`;
const Button = styled.button`
  border: none;
  background-color: rgb(245, 245, 245);
`;
export {
  Frame,
  Display,
  Menu,
  LeftDisplay,
  RightDisplay,
  Play,
  Div,
  Icon,
  Button,
};
