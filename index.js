const camera1 = [
  {
    camera: 1,
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "Passe Partout",
  },
  {
    camera: 1,
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    camera: 1,
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
];

const camera2 = [
  {
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_ugh.jpg",
    show: "All",
  },
];

const camera3 = [
  {
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/data wallpaper.jpg",
  },
  {
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/data wallpaper.jpg",
  },
  {
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/data wallpaper.jpg",
    show: "All",
  },
];

function addline(data, number) {
  data.forEach((item) => {
    const template = document
      .getElementById("line-template")
      .content.cloneNode(true);
    template.querySelector(".id").innerText = item.id;
    template.querySelector(".name").innerText = item.name;
    template.querySelector(".setPiece").innerText = item.setPiece;
    template.querySelector(".show").innerText = item.show;
    template.querySelector(".image").src = item.image;
    document.querySelector(`#line-list-${number}`).appendChild(template);
    // Using string interpolation (aka backticks) we can dynamically insert variables
    // You'll need to update your <tbody id=""> to match the string created above
  });
}

addline(camera1, 1)
addline(camera2, 2)
addline(camera3, 3)
// How can you make this function reusuable for the other data sets (other cameras), perhaps a second parameter?