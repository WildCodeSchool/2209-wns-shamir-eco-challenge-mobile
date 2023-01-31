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
    text: "Description de l'éco gestes et donc on peut voir que ça s'étend si il y a une description plus grand juste pour tester, oui ne je sais plus quoi dire",
  },
];

export const playersData = [
  {
    id: 1,
    name: "LeGrinch",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jim-carey-the-grinch-1665564473.jpg?crop=0.969xw:0.664xh;0,0.0444xh&resize=640:*",
    mail: "thegrinch@northpole.com",
    color: "#F87060",
  },
  {
    id: 2,
    name: "Toto",
    image:
      "https://idata.over-blog.com/3/04/75/17/R-pertoire--1/tete_a_toto164.jpg",
    mail: "toto@titi.tutu",
    color: "#FCFC62",
  },
  {
    id: 3,
    name: "DarkSasukePseudoLong",
    image:
      "https://pbs.twimg.com/profile_images/1220452744579948544/SXcvaAYp_400x400.jpg",
    mail: "sasuke@tropsombre.jp",
    color: "#AB87FF",
  },
];

// Date au format "dd/mm/yyyy" => new Date().toLocaleDateString();

export const challengesData = [
  {
    id: 1,
    name: "Green 2023",
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/yfqf8crndjypzgwepgqk.png",
    playersList: playersData,
    startDate: "01/01/2023",
    endDate: "01/04/2023",
    status: "ACTIVE",
    ecoGesturesList: cardsData,
  },
  {
    id: 2,
    name: "Le mois du Bio",
    image: "https://natural-food.asia/wp-content/uploads/2021/07/26.jpg",
    playersList: playersData,
    startDate: "01/01/2023",
    endDate: "01/02/2023",
    status: "ACTIVE",
    ecoGesturesList: cardsData,
  },
  {
    id: 3,
    name: "Web Développement Durable",
    image:
      "https://cdn.sanity.io/images/hgftikht/production/e9697ba81c24857d041035de729cd174c4b04b4f-2800x1200.png?w=1400&h=600&fit=crop",
    playersList: playersData,
    startDate: "25/01/2023",
    endDate: "17/02/2023",
    status: "UPCOMING",
    ecoGesturesList: cardsData,
  },
  {
    id: 4,
    name: "Mobility Challenge",
    image:
      "https://secuvelo.fr/wp-content/uploads/2022/12/velotaf-aller-au-travail-en-velo.jpg",
    playersList: playersData,
    startDate: "07/03/2023",
    endDate: "15/05/2023",
    status: "UPCOMING",
    ecoGesturesList: cardsData,
  },
  {
    id: 5,
    name: "Nettoie ton kilomètre",
    image:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2019/03/11/0a5e2c6e-c501-4087-b01b-bb40cef713b7/thumbnail/1200x630/a99b3023f0d785c821842e89c169862a/gettyimages-137416248-594x594.jpg",
    playersList: playersData,
    startDate: "01/11/2022",
    endDate: "01/12/2022",
    status: "ENDED",
    ecoGesturesList: cardsData,
  },
];
