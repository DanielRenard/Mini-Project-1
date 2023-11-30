const Camera1 = [
  {
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "Passe Partout",
  },
  {
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
];

const Camera2 = [
  {
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
];

const Camera3 = [
  {
    id: 1,
    name: "Home",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 306,
    name: "Wide Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 307,
    name: "2 Shot Center Desk",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
  },
  {
    id: 310,
    name: "Out of the Way",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 320,
    name: "1 Shot Left",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 321,
    name: "1 Shot Right",
    setPiece: "Desk A",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 340,
    name: "Alternative Weather Center",
    setPiece: "WX Center",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Chris Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
  {
    id: 345,
    name: "Heath Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
  },
  {
    id: 310,
    name: "Trevor Weather Wall WX",
    setPiece: "WX Wall",
    image: "./images/riker_at_play.jpg",
    show: "All",
  },
];

function addline(data) {
  data.forEach((item) => {
    const template = document
      .getElementById("line-template")
      .content.cloneNode(true);
    template.querySelector(".id").innerText = item.id;
    template.querySelector(".name").innerText = item.name;
    template.querySelector(".setPiece").innerText = item.setPiece;
    template.querySelector(".show").innerText = item.show;
    template.querySelector(".image").src = item.image;
    document.querySelector("#line-list").appendChild(template);
  });
}

addline(Camera1)