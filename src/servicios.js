const servicios = [
  {
    id: 2,
    title: "Educación Nutricional",
    description:
      "Mi objetivo es brindarte herramientas y el conocimiento necesario, a través de distintas estrategias educativas, que puedan ayudarte a adoptar ciertas elecciones y conductas nutricionales que apunte a mejorar tus hábitos alimentarios, estado nutricional y de salud, a largo plazo.¡Juntos, trabajaremos en la construcción de hábitos alimentarios saludables que se adapten a tu estilo de vida único!",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1708902048/istockphoto-1184422521-612x612_vsvpcw.jpg",

    imageDetail:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1708902213/istockphoto-1171734838-612x612_jy6egh.jpg",
  },

  // {
  //   id: 3,
  //   title: "Planificación Alimentaria",
  //   description:
  //     " En esta etapa, no solo recibirás un plan alimentario personalizado, sino que también te proporcionaré una profunda comprensión de los fundamentos de la nutrición. Aprenderás acerca de los grupos de alimentos, nutrientes esenciales y estrategias para tomar decisiones alimentarias informadas. Mi objetivo es brindarte las herramientas y el conocimiento necesarios para que puedas tomar el control de tu alimentación, mejorar tu salud y lograr un bienestar duradero. Juntos, trabajaremos en la construcción de hábitos alimentarios saludables que se adapten a tu estilo de vida único.",
  //   image:
  //     "https://media.istockphoto.com/id/1129664861/es/foto/escribir-un-plan-de-dieta-en-la-mesa-llena-de-comida-saludable.jpg?s=612x612&w=0&k=20&c=d4hma88x0J_swnfPvVR5GVKayjA7SAvH80xrvpECTXo=",
  //   imageDetail:
  //     "https://media.istockphoto.com/id/1479491964/es/foto/la-tecnolog%C3%ADa-de-la-salud-en-la-vida-cotidiana.jpg?s=612x612&w=0&k=20&c=ol1TwhdplF-FgbeLGeTcV_sPKZ6JCDrm1RcHkP7U2cU=",
  // },

  {
    id: 4,
    title: "Nutrición Deportiva",
    description:
      "La nutrición deportiva busca mejorar el rendimiento con un plan nutricional personalizado y completo adaptado al tipo de deporte y objetivo de cada uno.Te ayudo a optimizar tu rendimiento deportivo y recuperación para que puedas rendir al máximo.",

    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REVQT1JURVN8ZW58MHx8MHx8fDI%3D",
    imageDetail:
      "https://media.istockphoto.com/id/1164255818/es/foto/mujer-fitness-relajante-despu%C3%A9s-del-ejercicio-con-una-prote%C3%ADna-de-suero-de-leche-y-mancuerna.jpg?s=612x612&w=0&k=20&c=V6KPnGkkaRdjUdx88LruvA4fcpKmOcH0Glw5AYo-OWo=",
  },

  {
    id: 7,
    title: `Evaluación de la Composición Corporal`,
    description:
      "A través de la antropometría, evaluamos y trabajamos sobre tu composición corporal, realizando mediciones antropométricas que nos van a permitir diferencia tu peso de balanza en las distintas masas corporales. Con el objetivo de realizar un seguimiento longitudinal más exhaustivo orientado a mejorar tu calidad de vida y rendimiento deportivo.",
    image:
      "https://media.istockphoto.com/id/1452595743/es/foto/doctora-nutricionista-en-su-consultorio-durante-una-consulta-m%C3%A9dica-midiendo-la-espalda-de-su.jpg?s=612x612&w=0&k=20&c=jQNdoosF4_6C3D6O2-i4MTF4xyfv53yeQr1u_5Surzc=",
    imageDetail:
      "https://media.istockphoto.com/id/1453227795/es/foto/escritorio-nutricionista-con-instrumentos-de-medici%C3%B3n-antropom%C3%A9tricos-planes-nutricionales.jpg?s=612x612&w=0&k=20&c=apY6pyP8QMxKB8Jj8GPLJiZW5atnUKRa5CObWh-bEGY=",
  },
  {
    id: 8,
    title: "Consulta Online Personalizada",
    description:
      "Asesoramiento nutricional online, te acompaño a alcanzar tus objetivos, no solo con un plan de alimentación personalizado, si no también brindándote herramientas y el conocimiento necesario para adoptar hábitos saludables que busquen mejorar tu salud y bienestar.  Aprenderás acerca de los grupos de alimentos, nutrientes esenciales, hidratación, distribución del plato, armado de menús semanales saludables, etc.¡Juntos, trabajaremos en la construcción de hábitos saludables que se adapten a tu estilo de vida único!",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1708903205/istockphoto-1127348018-612x612_ipp397.jpg",
    imageDetail:
      "https://media.istockphoto.com/id/1457889029/es/foto/grupo-de-alimentos-con-alto-contenido-de-fibra-diet%C3%A9tica-dispuestos-uno-al-lado-del-otro.jpg?s=612x612&w=0&k=20&c=fGmnVlAU6yDfG29kEMoNZg28DWA5I_CjprvK2L1HhT8=",
  },
  {
    id: 9,
    title: "Talleres y Charlas",
    description:
      "Dentro de mi oferta de servicios, brindo talleres y charlas interactivas especializadas en nutrición y hábitos alimentarios saludables, adaptadas tanto para equipos deportivos como para empresas. Estas sesiones están diseñadas para proporcionar conocimientos valiosos y prácticos que permitirán a los participantes tomar decisiones informadas sobre su alimentación.Ya sea que formes parte de un equipo deportivo en busca de optimizar su rendimiento o una empresa interesada en promover la salud y el bienestar de sus empleados, estos eventos están diseñados para adaptarse a las necesidades específicas de cada grupo. Únete a estas experiencias educativas para fortalecer la comprensión de la nutrición y mejorar la calidad de vida tanto en el ámbito deportivo como en el empresarial.",
    image:
      "https://media.istockphoto.com/id/1300014142/es/foto/computadora-port%C3%A1til-escuela-y-libros-en-la-mesa-escuela-en-l%C3%ADnea-concepto-de-e-learning.webp?b=1&s=170667a&w=0&k=20&c=LkFJEpCA6-OTOhF0gakRSZWQM8bwt93YkwjpE1lipro=",
    imageDetail:
      "https://media.istockphoto.com/id/1468586532/es/foto/primer-plano-del-equipo-de-f%C3%BAtbol-femenino-apilando-las-manos-en-el-campo.jpg?s=612x612&w=0&k=20&c=5rhq87ee0W4Q9_rMDA7OKg46bBgYNs_VMVau08U7Nnk=",
  },
];

export default servicios;
