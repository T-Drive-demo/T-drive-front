import styled from "styled-components";

const DataListRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1fr;
  border-bottom: 1px solid #ccc;
  padding: 10px;

  div:last-child {
    justify-self: flex-end;
    padding-right: 10px;
    font-size: 13px;
    position: relative;
  }

  div,
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
    b {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 22px;
      margin: 10px;
    }

    .starr {
      color: #ffc700;
    }
  }

  div {
    text-decoration: none;

    a {
      color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      span {
        color: #000;
        font-weight: 600;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        width: 20ch;

        @media screen and (max-width: 768px) {
          width: 10ch;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    .modified {
      display: none;
    }
  }

  @media screen and (max-width: 319px) {
    grid-template-columns: 2fr 1fr;
    .fileSize {
      display: none;
    }
  }
`;

const OptionsContainer = styled.span`
  cursor: pointer;
`;

export { DataListRow, OptionsContainer };
