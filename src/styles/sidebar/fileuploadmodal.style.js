import styled from "styled-components";

const ModalPopup = styled.div`
  top: 50%;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  position: relative;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
  position: relative;

  span {
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
    color: #5f6368;
  }
`;
const ModalHeading = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
  height: 40px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  input.modal__submit {
    width: 100%;
    background: #0066da;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #034fa7;
    }
  }

  .file-input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  .modal__file {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box; /* padding과 border가 전체 크기에 포함되도록 */
    color: #000;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    ${(props) =>
      props.$dragOver
        ? `border: 2px dashed #0066da; background-color: rgba(0, 102, 218, 0.2);`
        : `border: 2px dashed gray;`}

    p {
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      width: 100%;
    }

    label {
      cursor: pointer;
      border-radius: 8px;
      border: 1px dashed #302f2f;
      padding: 8px 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      color: #1a1a1a;

      svg {
        color: #1a1a1a;
      }
    }

    input {
      display: none;
    }
  }
`;

const UploadingPara = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ModalProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 100%;
    background-color: #0066da;
    width: ${(props) => props.$progress}%;
    transition: width 0.4s ease-in-out;
  }
`;

const ProgressText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #0066da;
`;

export {
  ModalPopup,
  ModalHeading,
  ModalBody,
  UploadingPara,
  ModalProgress,
  ProgressBar,
  ProgressText,
};
