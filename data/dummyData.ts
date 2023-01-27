export const cardsData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Eco Challenge n°1",
    text: "Description de l'éco gestes",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Eco Challenge n°2",
    text: "Description de l'éco gestes",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    title: "Eco Challenge n°3",
    text: "Description de l'éco gestes",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    title: "Eco Challenge n°4",
    text: "Description de l'éco gestes",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Eco Challenge n°5",
    text: "Description de l'éco gestes",
  },
];

export const playersData = [
  {
    id: 1,
    name: "Le Grinch",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jim-carey-the-grinch-1665564473.jpg?crop=0.969xw:0.664xh;0,0.0444xh&resize=640:*",
    mail: "thegrinch@northpole.com",
  },
  {
    id: 2,
    name: "Toto",
    image:
      "https://idata.over-blog.com/3/04/75/17/R-pertoire--1/tete_a_toto164.jpg",
    mail: "toto@titi.tutu",
  },
  {
    id: 3,
    name: "DarkSasuke",
    image:
      "https://pbs.twimg.com/profile_images/1220452744579948544/SXcvaAYp_400x400.jpg",
    mail: "sasuke@tropsombre.jp",
  },
];

export const challengesData = [
  {
    id: 1,
    name: "Green 2023",
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/yfqf8crndjypzgwepgqk.png",
    playersList: playersData,
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    ecoGesturesList: cardsData,
  },
  {
    id: 2,
    name: "Le mois du Bio",
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/yfqf8crndjypzgwepgqk.png",
    playersList: playersData,
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    ecoGesturesList: cardsData,
  },
];
