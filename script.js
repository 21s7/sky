const api =
  "http://api.weatherstack.com/current?access_key=3d6edc660a69c47b57fa385575ff4d1b";

const залутатьИнфу = async () => {
  const город = await fetch(`${api}&query=Sochi`);
  const инфа = await город.json();

  const {
    current: {
      feelslike,
      cloudcover,
      humidity,
      is_day,
      precip,
      pressure,
      temperature,
      uv_index,
      visibility,
      weather_code,
      weather_descriptions,
      wind_speed,
      wind_degree,
    },
    location: { country, localtime, name, region },
  } = инфа;

  const вставлятель = () => {
    document.getElementById("1").innerHTML = `погода ${temperature}°C`;
    document.getElementById("2").innerHTML = `чувствуется как ${feelslike}°C`;
    document.getElementById("3").innerHTML = `скорость ветра ${wind_speed}m/s`;
    document.getElementById("4").innerHTML = `влажность ${humidity}%`;
    document.getElementById(
      "5"
    ).innerHTML = `преимущественно ${weather_descriptions}`;
    document.getElementById("6").innerHTML = `страна ${country}`;
    document.getElementById("7").innerHTML = `регион ${region}`;
    document.getElementById("8").innerHTML = `город ${name}`;
    document.getElementById("9").innerHTML = `дата ${localtime}`;
    document.getElementById("10").innerHTML = `сейчас день ? ${is_day}`;
  };
  function деньИлиНочь(is_day) {
    const body = document.body;

    if (is_day === "yes") {
      body.style.backgroundImage = "url('img/sochi.jpg')";
    } else {
      body.style.backgroundImage = "url('img/sochi_night.jpg')";
    }
  }

  деньИлиНочь(is_day);
  вставлятель();

  console.log(инфа);
  console.log("кто открыл консоль тот лошок");
};

залутатьИнфу();
