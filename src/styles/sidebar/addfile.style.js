import styled from "styled-components";

const SidebarBtn = styled.div`
  button {
    background: transparent;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 5px 10px;
    box-shadow: 2px 2px 2px #ccc;
    margin-left: 20px;
    span {
      font-size: 16px;
      margin-right: 20px;
      margin-left: 10px;
    }

    @media screen and (max-width: 768px) {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      margin-left: 0;

      span {
        display: none;
      }
    }
  }
`;

export { SidebarBtn };
