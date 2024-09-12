function updateSubCategorys() {
    var mainSelect = document.getElementById('main');
    var subSelect = document.getElementById('sub');
    
    var subCategories = {
      'salomon': [
        { text: 'Veste', value: 'https://www.salomon.com/fr-fr/shop-emea/men/tops/jackets.html?CMPID=ps%7Csb%7Cgoogle%7CFR_FR_GOO_SEA_PERF_BRA_Apparel+%26+Gear%7CFR_FR_BRA_Apparel%26Gear_Jackets%7Csalomon%20veste%7C599358612188&gad_source=1&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwCb2nGS4900li5fTKeltQnkU9gaqZ2XX4Wwj8G6FfcU-AdxNhAqWZxoC2skQAvD_BwE&gclsrc=aw.ds' },
        { text: 'Veste running', value: 'https://www.salomon.com/fr-fr/shop-emea/men/shoes/running-shoes.html' }
      ],
      'decathlon': [
        { text: 'Chaussures de running', value: 'https://www.decathlon.fr/tous-les-sports/running-route/chaussures-running' },
      ],
      'hoka': [
        { text: 'Chaussures de running', value: 'https://www.hoka.com/en/us/mens-race-day-training-gear/' },
        { text: 'Chaussures de trail', value: 'https://www.hoka.com/en/us/mens-trail-running-gear/' }
      ],
      'asics': [
        { text: 'Chaussures de running', value: 'https://www.asics.com/fr/fr-fr/mens-running-shoes/c/as10201000/' },
        { text: 'Chaussures de trail', value: 'https://www.asics.com/fr/fr-fr/mens-trail-running-hiking-shoes/c/as10201010/' }
      ]
    };
    
    // Clear the existing options
    subSelect.innerHTML = '<option value="">Sélectionnez une sous-catégorie</option>';

    var selectedCategory = mainSelect.value;
    if (subCategories[selectedCategory]) {
      subCategories[selectedCategory].forEach(function(item) {
        var option = document.createElement('option');
        option.text = item.text;
        option.value = item.value;
        subSelect.add(option);
      });
    }
  }

  function redirect() {
    var subSelect = document.getElementById('sub-category');
    var selectedValue = subSelect.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }