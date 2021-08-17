const shopItems = () => {
  const items = [
    {
      id: 11,
      itemName: 'Jurassic Park T-Shirt',
      price: 18.99,
      description: 'The last shirt you will ever need.',
      img: 'assets/images/shopItems/jpT.jfif',
      alt: 'Heather Grey Jurassic Park T-Shirt',
    },
    {
      id: 12,
      itemName: 'Jurassic World 5-Movie Collection',
      price: 31.99,
      description: 'The last collection of movies you will ever need.',
      img: 'assets/images/shopItems/jpBluRay.jpg',
      alt: 'Blu-Ray collection cover art for the 5 Jurassic World Movies',
    },
    {
      id: 13,
      itemName: 'Jurassic World Pajama Pants',
      price: 21.99,
      description: 'The last pair of pants you will ever need.',
      img: 'assets/images/shopItems/jpPants.jpg',
      alt: 'Pajama Pants with Jurassic Park logo',
    },
    {
      id: 14,
      itemName: 'Jurassic Park: A Novel',
      price: 14.99,
      description: 'The last novel you will ever need.',
      img: 'assets/images/shopItems/jpBookCover.jpg',
      alt: 'Jurassic Park Novel Cover Art',
    },
    {
      id: 15,
      itemName: 'Jurassic Park Mask',
      price: 27.99,
      description: 'The last mask you will ever need.',
      img: 'assets/images/shopItems/jpmask.jpg',
      alt: 'Tyrannosaurus Rex Mask',
    },

  ];

  return items;
}

module.exports = shopItems;