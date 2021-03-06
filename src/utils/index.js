const Rest_Api = process.env.REACT_APP_REST_API;
console.log(Rest_Api);

export const fetchRequest = async (username, password, setter) => {
  try {
    const response = await fetch(`https://lt-movieapp-backend.herokuapp.com`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setter(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (email, password, setter) => {
  try {
    const response = await fetch(
      "https://lt-movieapp-backend.herokuapp.com/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    await setter(data.user.username);
    localStorage.setItem("myToken", data.token);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const tokenLogin = async (setter) => {
  try {
    const token = localStorage.getItem("myToken");
    const response = await fetch(
      "https://lt-movieapp-backend.herokuapp.com/user",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    await setter(data.username ? data.username : "");
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (
  username,
  email,
  password,
  setter,
  setterTwo
) => {
  try {
    const response = await fetch(
      "https://lt-movieapp-backend.herokuapp.com/user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("myToken", data.token);
    setterTwo(data.message);
    setter(data.newUser.username);
  } catch (error) {
    console.log(error);
  }
};

export const addToList = async (props, user, setter) => {
  try {
    const response = await fetch(
      `https://lt-movieapp-backend.herokuapp.com/movies/${user}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: props.title,
          api_id: props.id,
          release_date: props.release_date,
          overview: props.overview,
          poster_path: props.poster_path,
          genre_ids: [...props.genres],
        }),
      }
    );
    const data = await response.json();
    setter(data.message);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserMovies = async (curUser, setter) => {
  try {
    const response = await fetch(
      `https://lt-movieapp-backend.herokuapp.com/movies/${curUser}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
    setter(data);
  } catch (error) {
    console.log(error);
  }
};

export const pickMovie = async (curUser, movieID) => {
  try {
    const response = await fetch(
      `https://lt-movieapp-backend.herokuapp.com/movies/${curUser}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    const ranMovie = Math.floor(Math.random() * data.length);
    return data[ranMovie].api_id;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (curUser, title, setter) => {
  try {
    const response = await fetch(
      `https://lt-movieapp-backend.herokuapp.com/movies/${title}/${curUser}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setter(data.message);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
