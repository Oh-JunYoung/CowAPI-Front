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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
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
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  } else { 
    window.location.href = "/notice-list/1";
  }
}

export const getMyInfo = async () => { 
  const res = await fetch(url + '/mypage', {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  const data = await res.json();
  return data;
}

export const updateMyInfo = async (password) => { 
  const res = await fetch(url + '/user', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    },
    body: JSON.stringify({
      password
    })
  });
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  } else {
    window.location.href = "/";
  }
}

export const deleteMyInfo = async () => { 
  const res = await fetch(url + '/user', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  } else {
    localStorage.clear();
    window.location.href = "/";
  }
}

export const updateSecretKey = async () => { 
  const res = await fetch(url + '/reissuance', {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
  const data = await res.json();
  return data;
}

export const getAiList = async () => { 
  const res = await fetch(url + '/ais', {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
  const data = await res.json();
  return data;
}

export const getAiOne = async (name) => { 
  const res = await fetch(url + '/ai/' + name, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization" : `${Authorization}`
    }
  });
  if (res.status % 100 == 4) {
    alert(await res.json().message);
  }
  const data = await res.json();
  return data;
}