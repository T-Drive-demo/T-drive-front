export const SignIn = (email, pw) => {
  const localUser = JSON.parse(localStorage.getItem("localUser"));

  if (email === "" || pw === "") {
    alert("이메일과 비밀번호를 모두 입력하세요.");
  } else if (localUser.userEmail === email && localUser.userPw === pw) {
    return true;
  } else {
    alert("일치하는 사용자가 없습니다.");
  }
};
