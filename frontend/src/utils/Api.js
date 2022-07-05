const url = process.env.REACT_APP_URL;
const Authorization = 'Bearer ' + localStorage.getItem("jwt");

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
    localStorage.setItem("user", email);
    window.location.href = "/";
  }
};

export const getQnaList = async (page) => { 
  const res = await fetch(url + '/qna/list/' + page, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  const data = await res.json();
  return data;
}

export const getNoticeList = async (page) => { 
  const res = await fetch(url + '/notice/list/' + page, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  const data = await res.json();
  return data;
}

export const getQnaDetail = async (id) => { 
  const res = await fetch(url + '/qna/' + id, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  const data = await res.json();
  return data;
}

export const getNoticeDetail = async (id) => { 
  const res = await fetch(url + '/notice/' + id, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  const data = await res.json();
  return data;
}

export const updateQna = async (id, title, content) => { 
const res = await fetch(url + '/qna/' + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    },
    body: JSON.stringify({
      title,
      content
    })
  });
  if (res.status === 401) {
    alert("권한이 없습니다.");
  } else {
    window.location.href = "/qna-list/1";
  }
}

export const updateNotice = async (id, title, content) => { 
const res = await fetch(url + '/notice/' + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    },
    body: JSON.stringify({
      title,
      content
    })
  });
  if (res.status === 401) {
    alert("권한이 없습니다.");
  } else {
    window.location.href = "/notice-list/1";
  }
}


export const createQna = async (title, content) => { 
const res = await fetch(url + '/qna', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    },
    body: JSON.stringify({
      title,
      content
    })
  });
  if (res.status === 401) {
    alert("권한이 없습니다.");
  } else {
    window.location.href = "/qna-list/1";
  }
}

export const createNotice = async (title, content) => { 
const res = await fetch(url + '/notice', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    },
    body: JSON.stringify({
      title,
      content
    })
  });
  if (res.status === 401) {
    alert("권한이 없습니다.");
  } else {
    window.location.href = "/notice-list/1";
  }
}

export const deleteQna = async (id) => { 
  const res = await fetch(url + '/qna/' + id, {
    method: "DELETE",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.state === 401) {
    alert("권한이 없습니다.");
  } else { 
    window.location.href = "/qna-list/1";
  }
}

export const deleteNotice = async (id) => { 
  const res = await fetch(url + '/notice/' + id, {
    method: "DELETE",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.state === 401) {
    alert("권한이 없습니다.");
  } else { 
    window.location.href = "/notice-list/1";
  }
}