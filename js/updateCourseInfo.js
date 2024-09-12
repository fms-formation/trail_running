function updateCourseInfo() {
    var select = document.getElementById('evens');
    var infoDiv = document.getElementById('course-info');
    var selectedValue = select.value;
    
    var courses = {
      'salomon': {
        title: 'Trail des Pyrénées',
        status: 'Préparation',
        details: 'Préparez-vous pour le grand défi des Pyrénées. Inscriptions ouvertes bientôt!'
      },
      'decathlon': {
        title: 'Trail des Alpes',
        status: 'En cours',
        details: 'La course des Alpes est actuellement en cours. Suivez les résultats en direct!'
      },
      'hoka': {
        title: 'Trail des Cévennes',
        status: 'À venir',
        details: 'Ne manquez pas le trail des Cévennes! Les détails seront bientôt disponibles.'
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