export const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGFubUBnbWFpbC5jb20iLCJpYXQiOjE2ODMxNzkzNTEsImV4cCI6MTY4MzIwMzM1MX0.lfiwkcYD8019i_7ZRctJT21gd6wbL2tIaGXyPoNMzsI"
        ),
      250
    );
  });
