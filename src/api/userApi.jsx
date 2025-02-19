export const SignIn = (email, pw) => {
  const localUser = {
    id: 0,
    userName: "윤선경",
    userEmail: "test1234@thinkfree.com",
    userPw: "1234",
    photoURL: "assets/img/profile_test.jpg",
  };
  localStorage.setItem("loginUser", JSON.stringify(localUser));

  if (email === "" || pw === "") {
    alert("이메일과 비밀번호를 모두 입력하세요.");
  } else if (localUser.userEmail === email && localUser.userPw === pw) {
    return localUser;
  } else {
    alert("일치하는 사용자가 없습니다.");
  }
};

export const SignOut = () => {
  console.log("로그아웃");
};
