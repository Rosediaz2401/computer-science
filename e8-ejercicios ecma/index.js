const video = {
    id: 1,
    name: 'Pokemon Johto',
    metadata: { date: '14/03/2022', hour: '10:22', country: 'MX' },
    author: 'montoyitag',
    mediaInfo: { format: 'mp4', quality: 'media' },
    ranking: { likes: 0, comments: [], isPlatinum: true, isGolden: false },
    category: {
      name: 'Publico en general',
      type: {
         genre: 'anime',
      }
    }
  };
  
  console.log('Tiene placa platino?', video.ranking.isPlatinum)