const mock_data = {
  contacts: [
    {
      id: 1,
      name: 'Maira UTN',
      last_time_connected: '14:10',
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
      last_time_connected: '10:21',
      img: "https://fundaciontem.org/wp-content/uploads/2016/04/sinay-segun-veronica-1.jpg",
      last_message: {
        id: 12,
        text: 'A meterle entonces 🚀'
      },
      unread_messages: 2,
      messages: [
        {
          id: 10,
          emisor: 'Tincho',
          hora: '10:15',
          texto: 'Che, cómo vas con el proyecto de React?',
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
          hora: '10:21',
          texto: 'A meterle entonces 🚀',
          status: 'no-visto'
        }
      ]
    },
    {
      id: 3,
      name: 'Charlie Eee',
      last_time_connected: '09:16',
      img: "https://images.ecestaticos.com/dZ32Hrir1OYW3FBCGrs_er-PGEM=/369x0:1727x1019/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa06%2F7a2%2Fef8%2Fa067a2ef8c3d2ab71bbfdd68f38fc918.jpg",
      last_message: {
        id: 20,
        text: 'Dale! Estoy libre a las 18:00'
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
          status: 'leído'
        },
        {
          id: 20,
          emisor: 'Yo',
          hora: '09:16',
          texto: 'Dale! Estoy libre a las 18:00',
          status: 'leído'
        }
      ]
    },
    {
      id: 4,
      name: 'Laura UX',
      last_time_connected: '10:15',
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      last_message: {
        id: 36,
        text: 'Por ahora nada. Daleeeee, hablamos mañana!!'
      },
      unread_messages: 0,
      messages: [
        {
          id: 32,
          emisor: 'Laura',
          hora: '10:00',
          texto: 'Hola! Te mandé el diseño nuevo para la landing',
          status: 'leído'
        },
        {
          id: 33,
          emisor: 'Yo',
          hora: '10:05',
          texto: 'Lo vi recién! Me gusta, pero cambiaría el header',
          status: 'leído'
        },
        {
          id: 34,
          emisor: 'Laura',
          hora: '10:08',
          texto: 'Dale, después vemos juntos cómo hacerlo 😉',
          status: 'leído'
        },
        {
          id: 35,
          emisor: 'Yo',
          hora: '10:10',
          texto: 'Buenísimo! Contame si querés que haga algo antes',
          status: 'leído'
        },
        {
          id: 36,
          emisor: 'Laura',
          hora: '10:15',
          texto: 'Por ahora nada. Daleeeee, hablamos mañana!',
          status: 'leído'
        }
      ]
    },
    {
      id: 5,
      name: 'Facu laburo',
      last_time_connected: '14:25',
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      last_message: {
        id: 59,
        text: 'Si podés nos juntamos media horita y lo vemos ahora'
      },
      messages: [
        {
          id: 50,
          emisor: 'Alex',
          hora: '14:00',
          texto: 'Che Arielo, tenés un rato para repasar el proyecto?',
          status: 'leído'
        },
        {
          id: 51,
          emisor: 'Yo',
          hora: '14:03',
          texto: 'Hola bestia! Sí, estoy libre un rato. ¿Por dónde querés arrancar?',
          status: 'leído'
        },
        {
          id: 52,
          emisor: 'Alex',
          hora: '14:05',
          texto: 'Estuve viendo el form de nuevos mensajes. Lo manejás con estado local o global?',
          status: 'leído'
        },
        {
          id: 53,
          emisor: 'Yo',
          hora: '14:07',
          texto: 'Con estado local. Pero lo paso al contexto si lo necesita otro componente.',
          status: 'leído'
        },
        {
          id: 54,
          emisor: 'Alex',
          hora: '14:10',
          texto: 'Bien ahí. Acordate de limpiar el input después de enviar 😉',
          status: 'leído'
        },
        {
          id: 55,
          emisor: 'Yo',
          hora: '14:12',
          texto: 'Sí! Me faltaba eso, ya lo agrego.',
          status: 'leído'
        },
        {
          id: 59,
          emisor: 'Yo',
          hora: '14:25',
          texto: 'Si podés nos juntamos media horita y lo vemos ahora',
          status: 'no-recibido'
        }
      ]
    },
    {
      id: 7,
      name: 'Agus Amigo',
      last_time_connected: '18:40',
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      last_message: {
        id: 64,
        text: 'Listo papá, los esperamos el sábado 🍻🍻🍻'
      },
      messages: [
        {
          id: 61,
          emisor: 'Agus',
          hora: '18:30',
          texto: 'Che, ¿qué onda el asado del finde?',
          status: 'leído'
        },
        {
          id: 62,
          emisor: 'Yo',
          hora: '18:35',
          texto: 'Re si amigo... Yo puedo sábado o domingo',
          status: 'leído'
        },
        {
          id: 63,
          emisor: 'Agus',
          hora: '18:38',
          texto: 'Dale, le metemos sábado entonces. Me viene mejor!',
          status: 'leído'
        },
        {
          id: 64,
          emisor: 'Yo',
          hora: '18:40',
          texto: 'Listo papá, los esperamos el sábado 🍻🍻🍻',
          status: 'leído'
        }
      ]
    }
  ]
};

export default mock_data;