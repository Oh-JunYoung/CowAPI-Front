const url = process.env.REACT_APP_URL;
const Authorization = localStorage.getItem("jwt");

export const signUp = async (email, password) => {
  console.log(url);
  const res = await fetch(url + '/signup', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (res.status === 409) {
    alert("이미 존재하는 이메일입니다.")
  } else {
    const data = await res.json();
    alert("회원가입이 완료되었습니다. 로그인 후 이용가능합니다.");
  }
};

export const signIn = async (email, password) => {
  const res = await fetch(url + '/signin', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (res.status === 409) {
    alert("존재하지 않거나 비밀번호가 다릅니다.")
  } else {
    const data = await res.json();
    localStorage.setItem("jwt", data.authorization);
    const isAdmin = data.isAdmin ? 1 : 0;
    localStorage.setItem("admin", isAdmin);
    window.location.href = "/";
  }
};