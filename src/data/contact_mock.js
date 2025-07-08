const mock_data = {
  contacts: [
    {
      id: 1,
      name: 'Maira UTN',
      last_time_connected: '14:19',
      img: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/0d/articulos/perfil-resilencia.jpg.web",
      last_message: {
        id: 7,
        text: 'Dale, te aviso cualquier cosa.'
      },
      unread_messages: 1,
      messages: [
        {
          id: 1,
          emisor: 'Maira',
          hora: '13:50',
          texto: 'Hola Ariel! ¿Ya terminaste el TP?',
          status: 'leído'
        },
        {
          id: 2,
          emisor: 'Yo',
          hora: '13:52',
          texto: 'Hola! Me falta un poco, pero voy bien.',
          status: 'leído'
        },
        {
          id: 3,
          emisor: 'Maira',
          hora: '13:54',
          texto: 'Buenísimo 👌 Cualquier duda avisame.',
          status: 'leído'
        },
        {
          id: 4,
          emisor: 'Yo',
          hora: '13:55',
          texto: 'Gracias! 😄',
          status: 'leído'
        },
        {
          id: 7,
          emisor: 'Maira',
          hora: '14:10',
          texto: 'Dale, te aviso cualquier cosa.',
          status: 'no-visto'
        }
      ]
    },
    {
      id: 2,
      name: 'Tincho laburo',
      last_time_connected: '15:19',
      img: "https://fundaciontem.org/wp-content/uploads/2016/04/sinay-segun-veronica-1.jpg",
      last_message: {
        id: 12,
        text: 'Genial! A meterle entonces 🚀'
      },
      unread_messages: 2,
      messages: [
        {
          id: 10,
          emisor: 'Tincho',
          hora: '10:15',
          texto: 'Che, cómo vas con React?',
          status: 'leído'
        },
        {
          id: 11,
          emisor: 'Yo',
          hora: '10:18',
          texto: 'Hoy aprendí sobre estados, me costó un poco jaja',
          status: 'leído'
        },
        {
          id: 12,
          emisor: 'Tincho',
          hora: '10:20',
          texto: 'Genial! Yo estoy con React',
          status: 'no-visto'
        },
        {
          id: 13,
          emisor: 'Tincho',
          hora: '10:22',
          texto: 'A meterle entonces 🚀',
          status: 'no-visto'
        }
      ]
    },
    {
      id: 3,
      name: 'Carlos',
      last_time_connected: '17:19',
      img: "https://images.ecestaticos.com/dZ32Hrir1OYW3FBCGrs_er-PGEM=/369x0:1727x1019/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa06%2F7a2%2Fef8%2Fa067a2ef8c3d2ab71bbfdd68f38fc918.jpg",
      last_message: {
        id: 20,
        text: '¿Querés que lo charlemos por Discord?'
      },
      messages: [
        {
          id: 17,
          emisor: 'Carlos',
          hora: '09:10',
          texto: '¿Pudiste entender el useEffect?',
          status: 'leído'
        },
        {
          id: 18,
          emisor: 'Yo',
          hora: '09:13',
          texto: 'Más o menos, lo básico sí. Pero los efectos secundarios me marean 😵',
          status: 'leído'
        },
        {
          id: 19,
          emisor: 'Carlos',
          hora: '09:15',
          texto: '¿Querés que lo charlemos por Discord?',
          status: 'no-visto'
        },
        {
          id: 20,
          emisor: 'Yo',
          hora: '09:16',
          texto: 'Dale! Estoy libre a las 18:00.',
          status: 'no-visto'
        }
      ]
    }
  ]
};

export default mock_data;