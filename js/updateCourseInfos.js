function updateCourseInfos() {
    var select = document.getElementById('evens');
    var infoDiv = document.getElementById('course');
    var selectedValue = select.value;
    
    var courses = {
      'salomon': {
        title: 'Cours à pied des Pyrénées',
        status: 'Préparation',
        details: 'Préparez-vous pour le marathon des Pyrénées. Les inscriptions sont ouvertes!'
      },
      'decathlon': {
        title: 'Cours à pied des Alpes',
        status: 'En cours',
        details: 'Le marathon des Alpes est actuellement en cours. Suivez les résultats en direct!'
      },
      'hoka': {
        title: 'Cours à pied des Cévennes',
        status: 'À venir',
        details: 'Le marathon des Cévennes approche! Les détails seront disponibles bientôt.'
      }
    };
    
    if (courses[selectedValue]) {
      var course = courses[selectedValue];
      infoDiv.innerHTML = `
        <h4>${course.title}</h4>
        <p>Status: ${course.status}</p>
        <p>${course.details}</p>
      `;
    } else {
      infoDiv.innerHTML = '<p>Sélectionnez une sortie pour voir les détails de la course.</p>';
    }
  }