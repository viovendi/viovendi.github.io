console.log('Start-Git');
  
  var categoriesNamesDe = {
	'Anlagenbau': ['Anlagenplanung', 'Bau Kälte- / Klima- / lufttechnischer Anlagen', 'Bau verfahrenstechnischer Anlagen', 'Engineering-Dienstleister Anlagenbau'],
	'Automatisierungstechnik / Instrumentierung': ['Antriebstechnik', 'Engineering-Dienstleister Automatisierungstechnik', 'Gebäudeautomation', 'Mess- / Test- / Prüftechnik', 'Prozess-/Fertigungsautomation', 'Robotik', 'Sicherheitstechnik', 'Software & Engineering', 'Steuerungs- und Regelungstechnik'],
	'Automobil- und Fahrzeugindustrie': ['Automobil-Hersteller', 'Automobil-Zulieferer', 'Automotive Engineering-Dienstleister', 'Bau von Bau- / Land- / Forstmaschinen', 'Bau von Militärfahrzeugen', 'Schienenfahrzeugbau', 'Schiff- / Bootbau', 'Verkehrstechnik'],
	'Banken/ Versicherungen / Finanzen': ['Bankwesen', 'Finanzdienstleistungen', 'Versicherung'],
	'Bauwesen / Baustoffe': ['Baugewerbe', 'Bauindustrie', 'Baustoffherstellung'],
	'Beratung und Consulting': ['Kommunikationsberatung', 'Marktforschung', 'Personalberatung', 'Unternehmensberatung'],
	'Bildung / Forschung / Wissenschaft': ['Berufsschule', 'Coaching / Fortbildung / E-Learning', 'Forschungsinstitut', 'Hochschule / Universität'],
	'Bio- / Nanotechnologie': ['Biotechnologie', 'Nanotechnologie'],
	'Chemische / Pharmazeutische Industrie': ['Hersteller Chemie', 'Herstellung Feinchemie/Spezialchemie', 'Herstellung Grundstoffchemie', 'Herstellung von Verbundwerkstoffen', 'Kosmetikindustrie', 'Kunststoffindustrie', 'Petrochemie', 'Pharmaindustrie'],
	'Consumer-Elektronik': ['Haushaltsgeräte', 'Unterhaltungselektronik'],
	'Distribution und Handel': ['Bauelementehandel', 'Chemiehandel', 'Einzelhandel', 'Elektronik-Distribution', 'Elektronik-Händler', 'Fulfillment', 'Getränkehandel', 'Glas und Keramik', 'Großhandel', 'Handel mit Maschinen / Fahrzeugen / technischem Bedarf', 'Handel mit Mode / Textilien', 'Import / Export', 'Lebens- / Nahrungsmittelhandel', 'Möbel- / Holzwarenhandel'],
	'Elektromechanik': ['Gehäuse und Schränke', 'Schalter und Eingabesysteme', 'Verbindungstechnik', 'Wärmemanagement'],
	'Elektronik / Mikroelektronik': ['Elektronik-Distribution', 'Elektronikfertigung / EMS', 'Elektronische Bauelemente', 'Elektronische Baugruppen', 'Embedded Boards', 'Halbleiter, ASIC, FPGA', 'Leiterplattenfertigung', 'Optoelektronik'],
	'Energie / Wasser / Umwelt': ['Abfälle und Recycling', 'Abwasseraufbereitung / -entsorgung', 'Energietechnik', 'Energiewirtschaft', 'Erneuerbare Energien', 'Kraftwerksbetrieb', 'Stadtwerke', 'Umwelttechnik', 'Wasserversorgung / -aufbereitung'],
	'Engineering-Dienstleister / Ingenieurbüros': ['Automotive Engineering Dienstleister', 'Engineering-Dienstleister Anlagenbau', 'Engineering-Dienstleister Automatisierungstechnik', 'Engineering-Dienstleister Elektronikr', 'Engineering-Dienstleister Luft- und Raumfahrt', 'Engineering-Dienstleister Medizintechnik', 'Engineering-Dienstleister Umwelttechnik', 'Ingenieurbüro für Maschinenbau', 'Ingenieurbüro für Tragwerksplanung'],
	'Gesundheit / Soziales': ['Alternative Medizin', 'Arztpraxis', 'Krankenhaus', 'Medizinischer Dienst', 'Veterinärmedizin', 'Zahnmedizin'],
	'IT / Internet / Kommunikation': ['Big Data', 'Cloud/Managed Service Provider', 'Computernetzwerke', 'Computerspiele', 'CRM Software', 'E Commerce Software', 'ERP  Software', 'Informationstechnik', 'Internet und Onlinemedien', 'ISV/Softwarehaus', 'IT-Dienstleister / IT-Beratung', 'IT-Distributor/Großhändler', 'IT-Fachhandel', 'IT-Freiberufler', 'IT-Hersteller (Hardware)', 'IT-Hersteller (Software)', 'IT-Rechenzentrum', 'IT-Sicherheit', 'IT-Systemhaus/VAR', 'Marketing Software', 'Medizinische Software', 'Netzwerk- / Datentechnik', 'Telekommunikations- / Internetprovider', 'Telekommunikationstechnik / HF / Wireless', 'Telemedizin', 'Versandhandel/E-Tailer'],
	'Kfz- und Karosseriegewerbe': ['Einzelhandel mit Kfz-Teilen / -Zubehör', 'Fahrzeug-Vermietung', 'Großhandel mit Kfz-Teilen / -Zubehör', 'Karosserieinstandsetzung', 'Kfz: Freie Werkstatt', 'Kfz: Markenbetrieb', 'Kfz: Mehrmarkenbetrieb', 'Kfz-Elektrik', 'Kfz-Sachverständige', 'Lackierbetrieb', 'Reifenfachbetrieb', 'Reparatur von Landmaschinen', 'Tankstelle', 'TÜV / Kfz-Prüfungsstelle', 'Zweirad: Freie Werkstatt', 'Zweirad: Markenbetrieb'],
	'Lebensmittel': ['Getränkehersteller', 'Nahrungs- / Genussmittelhersteller'],
	'Logistik / Transport': ['Bahnverkehr', 'Intralogistik', 'Lagerhaltung / -technik', 'Luft- / Raumfahrtlogistik', 'Luftverkehr', 'Personenverkehr', 'Schienen- / Eisenbahnindustrie', 'Schifffahrtindustrie', 'Spedition / Post'],
	'Luft- / Raumfahrt': ['Avionik', 'Engineering-Dienstleister Luft- und Raumfahrt', 'Flugzeugbau', 'Luftfahrt', 'Raumfahrt'],
	'Marketing / Werbung / PR': ['Design und Grafik', 'Digital-Agentur', 'Event-Agentur', 'Full Service-Agentur', 'Kommunikations-Agentur', 'Marketing-Agentur', 'Markt- und Meinungsforschung', 'Media-Agentur', 'Messe, Austellungen und Kongresse', 'PR-Agentur'],
	'Maschinen- / Apparatebau': ['Bau kunststoffverarbeitender Maschinen', 'Bau spanabhebender Metallbearbeitungsmaschinen', 'Bau spanloser Metallbearbeitungsmaschinen', 'Betriebstechnik', 'Engineering-Dienstleister Maschinenbau', 'Herstellung von Hebezeugen / Fördermitteln', 'Herstellung von Pumpen / Kompressoren', 'Prototyping / Modellbau'],
	'Medizintechnik / Diagnostik': ['Bestrahlungstherapiegeräte', 'Elektromedizinische / Elektrotherapiegeräte', 'Engineering-Dienstleister Medizintechnik', 'Labortechnik', 'Medizinische / Chirurgische Instrumente', 'Medizinische Apparate', 'Medizinische Software', 'Medizinisches Material', 'Medizinmöbel ', 'Medizinprodukteberatung', 'Ophthalmologie', 'Orthopädietechnik', 'Pharmazeutische Produkte und Arzneimittel', 'Rollstühle', 'Telemedizin', 'Veterinärmedizin', 'Wearables', 'Zahnmedizinische Apparate', 'Zahnmedizinisches Material'],
	'Metallverarbeitende Industrie': ['Blechbearbeitung', 'Eisen- / Stahl- / Metallerzeugung', 'Feinmechanik', 'Gießerei', 'Kessel- / Behälter- / Rohrleitungsbau', 'Metalldruck', 'Metall-Zerspanung', 'Oberflächenveredelung und Härtung', 'Press- / Zieh- und Stanzteile / Drahterzeugnisse', 'Rohrherstellung /-bearbeitung', 'Stahl- und Leichtmetallbau', 'Umformung von Metallen', 'Zahnräder / Getriebe'],
	'Öffentlicher Dienst / Verbände / Einrichtungen': ['Arbeitsagentur', 'Bundesbehörde', 'Bundeswehr', 'Finanzamt', 'Gemeinnützige Einrichtung / Verein', 'Gericht', 'Handwerkskammer', 'Industrie- und Handelskammer', 'Innung', 'Krankenkasse', 'Kreis- / Stadt- / Gemeindeverwaltung', 'Landesbehörde', 'Landesregierung', 'Landesversicherungsanstalt', 'Ministerium', 'Öffentliche Beschaffungsstelle', 'Rechenzentrum - Public Sector', 'Staatsarchive', 'Verband / Organisation / Vereinigung', 'Verteidigung / Justiz / Polizei'],
	'Rohstoffgewinnung': ['Bergbau und Metalle', 'Fördertechnik', 'Öl- und Gasindustrie', 'Stahlindustrie', 'Zementindustrie'],
	'Software / Entwicklungswerkzeuge': ['CRM-Software', 'E-Commerce-Software', 'Engineering-Werkzeuge', 'ERP-Software', 'Marketing-Software', 'Medical Software', 'Middleware / Software', 'Simulationstools', 'Softwareentwicklungstools / OS', 'Test / Verifikation']
};


var categoriesNamesEn = {'Plant Engineering': ['Plant Design', 'Refrigeration / Air Conditioning / Ventilation Systems', 'Construction of Process Plants', 'Plant Engineering Service Provider'],
	'Automation Technology / Instrumentation': ['Drive Technology', 'Automation Engineering Service Provider', 'Building Automation', 'Measurement / Testing Technology', 'Process / Production Automation', 'Robotics', 'Safety Engineering', 'Software / Engineering', 'Control and Regulation Technology'],
	'Automotive and automotive industry': ['Automotive Manufacturing', 'Automotive Supply', 'Automotive Engineering Service Provider', 'Manufacture of construction / agricultural / forestry machinery', 'Construction of Military Vehicles', 'Rail Vehicle Construction', 'Ship / Boat Building', 'Traffic Engineering'],
	'Banks / Insurances / Finances': ['Banking', 'Financial Services', 'Insurance'],
	'Building Industry / Building Materials': ['Building Trade', 'Building Industry', 'Building Material Production'],
	'Consulting': ['Communication Consulting', 'Market Research', 'Personnel Consulting', 'Management / Business Consulting'],
	'Education / Research / Science': ['Vocational School', 'Coaching / Training / E-Learning', 'Research Institute', 'College / University / Academy', ],
	'Bio- / Nanotechnology': ['Biotechnology', 'Nanotechnology'],
	'Chemical / Pharmaceutical Industry': ['Manufacturer chemistry', 'Maufacture of Fine / Specialty Chemicals', 'Manufacture of Basic Chemicals', 'Manufacture of Composite Materials', 'Cosmetics Industry', 'Plastics Industry', 'Petrochemistry', 'Pharmaceutical Industry'],
	'Consumer Electronics': ['Household Electronics', 'Entertainment Electronics'],
	'Distribution and Trade': ['Construction Elements Trade', 'Chemical Trade', 'Retail', 'Electronics Distribution', 'Electronics Retail', 'Fulfillment', 'Beverage Trade', 'Glass and ceramics', 'Wholesale', 'Trade in Machinery / Vehicles / Technical Equipment', 'Fashion / Textile Trade', 'Import / Export', 'Food / Grocery Trade', 'Furniture / Wooden Goods Trade'],
	'Electromechanics': ['Housings / Cabinets', 'Switches / Input Devices', 'Connection Technology', 'Thermal Management'],
	'Electronics / Microelectronics': ['Electronics Distribution', 'Electronics Manufacturing / EMS', 'Electronic Components', 'Electronic Assemblies', 'Embedded Boards', 'Semiconductors / ASIC / FPGA', 'PCB Manufacturing', 'Optoelectronics'],
	'Energy / Water / Environment': ['Waste Management / Recycling', 'Waste Water Treatment / Disposal', 'Power Engineering', 'Power Industry', 'Renewable Energy', 'Power Plant Operation', 'Public Utilities', 'Environmental Engineering', 'Water Supply / Treatment'],
	'Engineering Service Provider': ['Automotive Engineering Service Provider', 'Plant Engineering Service Provider', 'Automation Engineering Service Provider', 'Electronics Engineering Service Provider', 'Aerospace Engineering Service Provider', 'Medical Engineering Service Provider', 'Environmental Engineering Service Provider', 'Engineering office for mechanical engineering', 'Engineering office for structural engineering'],
	'Health / Social Affairs': ['Alternative Medicine', 'Medical Practice', 'Hospital', 'Medical Service', 'Veterinary Medicine', 'Dentistry'],
	'IT / Internet / Communication': ['Big Data', 'Cloud / Managed Service Provider', 'Computer Networks', 'Computer Games', 'CRM Software', 'E-Commerce Software', 'ERP Software', 'Information Technology', 'Internet / Online Media', 'ISV / Software Company', 'IT Service Provider / Consulting', 'IT Distributor / Wholesaler', 'IT Specialised Trade', 'IT Freelancer', 'Hardware Manufacturer', 'Software Manufacturer', 'Data Center', 'IT Security', 'VAR / IT System House', 'Marketing Software', 'Medical Software', 'Network / Data Technology', 'Internet / Telecommunication Provider', 'Telecommunication / HF / Wireless', 'Telemedicine', 'Mail order/e-tailer'],
	'Automotive and Bodywork Trade': ['Parts and Accessories Retailer', 'Motor Vehicle Rental', 'Parts and Accessories Wholesaler', 'Bodywork Repair', 'Independent Car Workshop', 'Brand Retailer Cars', 'Multi-Brand Retailer Cars', 'Automotive Electrics', 'Automotive Experts', 'Paint Shop', 'Tyre Specialist', 'Agricultural Machinery Repair', 'Petrol Station', 'Technical Inspection Agency / TÜV', 'Independent Bike Workshop', 'Brand Retailer Bikes'],
	'Food Industry': ['Beverage Producer', 'Food Manufacturer'],
	'Logistics / Transportation': ['Rail Transport', 'Intralogistics', 'Warehousing / Warehouse Technology', 'Aerospace Logistics', 'Air Traffic', 'Passenger Traffic', 'Railway Industry', 'Shipping Industry', 'Forwarding / Post'],
	'Aerospace': ['Avionics', 'Aerospace Engineering Service Provider', 'Aircraft Construction', 'Aviation', 'Aerospace'],
	'Marketing / Advertising / Public Relations': ['Design / Graphics', 'Digital Agency', 'Event Agency', 'Full Service Agency', 'Communication Agency', 'Brand Agency', 'Market / Opinion Research', 'Media Agency', 'Trade Fairs / Exhibitions / Congresses', 'Public Relations Agency'],
	'Mechanical / Apparatus Engineering': ['Plastics Processing Machines', 'Metal Cutting Machines', 'Non-Cutting Metalworking Machines', 'Industrial Engineering', 'Mechanical Engineering Service Provider', 'Lifting / Conveying Equipment', 'Pumps / Compressors', 'Prototyping / Model Construction'],
	'Medical Technology / Diagnostics': ['Radiation Therapy Devices', 'Electromedical / Electrotherapy Devices', 'Medical Engineering Service Provider', 'Laboratory Technology', 'Medical / Surgical Instruments', 'Medical Devices', 'Medical Software', 'Medical Material', 'Medical Furniture', 'Medical Device Consulting', 'Ophthalmology', 'Orthopaedic Technology', 'Pharmaceutical Products', 'Wheelchairs', 'E-Health', 'Veterinary Medicine', 'Wearables', 'Dental Apparatuses', 'Dental Material'],
	'Metal Processing Industry': ['Sheet Metal Processing', 'Iron / Steel / Metal Production', 'Precision Engineering', 'Foundry', 'Boiler / Tank / Pipeline Construction', 'Metal Printing', 'Metal Cutting', 'Surface Refinement / Hardening', 'Pressed / Drawn / Punched Parts / Wire Products', 'Pipe Production / Processing', 'Steel / Light Metal Construction', 'Metal Forming', 'Gear Wheels / Gearboxes'],
	'Public Service / Associations / Institutions': ['Employment Agency', 'Federal Authority', 'Armed Forces', 'Tax Office', 'Non Profit Institution / Association', 'Court', 'Chamber of Crafts', 'Chamber of Industry and Trade', 'Guild', 'Health Insurance', 'District / City / Municipal Administration', 'State Authority', 'State Government', 'State Insurance Institution', 'Ministry', 'Public Procurement', 'Data Center in the Public Sector', 'State Archives', 'Association / Organization', 'Police / Defence / Judiciary'],
	'Raw Materials': ['Mining / Metals', 'Materials Handling', 'Oil / Gas Industry', 'Steel Industry', 'Cement Industry'],
	'Development Tools / Software': ['CRM Software', 'E-Commerce Software', 'Engineering Tools', 'ERP Software', 'Marketing Software', 'Medical Software', 'Middleware / Software', 'Simulation Tools', 'Software Development Tools / OS', 'Test / Verification']
};
  
 
  var childCatNames;
  var parentCatNameHiddenLang;
  var childCatNamesHiddenLang;
  var parentCatNameCurrLang;
  var errorMssge;
  var selectBaseText;
  
  if($('html').attr('lang') == 'en'){
    childCatNames = categoriesNamesEn;
    parentCatNameCurrLang = 'Sub-Industry';
    parentCatNameHiddenLang = 'Branche';
    parentCatNameVisibleLang = 'Industries';
    errorMssge = 'Please fill in all mandatory fields';
    selectBaseText = 'Please select';
    
  }else{
    childCatNames = categoriesNamesDe;
    parentCatNameCurrLang = 'Unterbranche';
    parentCatNameHiddenLang = 'Industries';
    parentCatNameVisibleLang = 'Branche';
    errorMssge = 'Bitte füllen Sie alle Pflichtfelder aus';
    selectBaseText = 'Bitte auswählen';
  }
  
  hideShowField('Sub-Industry', 'hide');
  hideShowField('Unterbranche', 'hide');
  hideShowField(parentCatNameHiddenLang, 'hide');
  removeOptional(parentCatNameVisibleLang);
  changeParentCat(parentCatNameVisibleLang);
  
  
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      hideShowField('Sub-Industry', 'hide');
      hideShowField('Unterbranche', 'hide');
      
      hideShowField(parentCatNameHiddenLang, 'hide');
      changeParentCat(parentCatNameVisibleLang);
    }
  }
  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari
  
  function removeOptional(filedLabel){
	 console.log("function:removeOptional");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
      var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
      
      if( labelText.indexOf(filedLabel) != -1 ){
        
        $(this).find('vv-optional-text').remove();
        
      }
    });
  }
  
  function hideShowField(fieldName, action){
	  console.log("function:hideShowField");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
      var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
      
      if( labelText.indexOf(fieldName) != -1 ){
        if(action === 'hide'){
          $(this).removeClass('show').addClass('hide');
        }else{
          $(this).removeClass('hide').addClass('show');
        }
      }
      
    }); 
  }
  
  function changeParentCat(parentCatNameVisibleLang){
	  console.log("function:changeParentCat");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
      var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
      var currParentCat;
      
      if( labelText.indexOf(parentCatNameVisibleLang) != -1){
        console.log("function:changeParentCat -> if ");
        $(this).find('select').not('#childCatSelect').on('change', function(){
          addValToHiddenField();
          
          currParentCat = $(this).children("option:selected").val();
          
          addErrorState(currParentCat);
          checkIsFormFilledIn();
          
          $('#selectMainContainer').remove();
          if(currParentCat !='' ){
            $(this).closest('.vv-nl-mb-lg').addClass('parentElem');
            createChildCatOptions('parentElem', currParentCat);
            //createChildCatOptions($(this).closest('.vv-nl-mb-lg'), currParentCat);
          }else{
		  console.log("function:changeParentCat -> else");
            clearSubInduxtryField();
		 
          }
        });
      }
    });
  }
  
  function checkIfChildSelected(parentCatNameVisibleLang){
	  console.log("function:checkifChildselected");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
      var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
      var currParentCat;
      if( labelText.indexOf(parentCatNameVisibleLang) != -1){
        currParentCat = $(this).children("option:selected").val();
        if(currParentCat !='' ){
          $(this).closest('.vv-nl-mb-lg').addClass('parentElem1');
	  console.log("parentElem1 added");
          createChildCatOptions('parentElem1', currParentCat);
          //createChildCatOptions($(this).closest('.vv-nl-mb-lg'), currParentCat);
        }else{
          clearSubInduxtryField();
        }
      }
    });
  }

  
  //function createChildCatOptions(elem, parentCatName){
  function createChildCatOptions(elemId, parentCatName){
	  console.log("function:createChildCatOptions");
    
    var childCategories = childCatNames[parentCatName];
    
    if(childCategories.length > 0){
    
    var select = document.createElement('select');
    select.id = 'childCatSelect';
    select.classList.add('vv-simple-select__control', 'customization2_attendee_further-data_custom-question_dropdown');
    console.log("function:createChildCatOptions -> select created");
	    
    var selectLabel = document.createElement("div");
    selectLabel.id = 'selectMainContainer';
    selectLabel.innerHTML ='<label class="vv-simple-select"><span class="vv-control-label vv-control-label--regular customization2_attendee_further-data_custom-question_label">'+parentCatName+'</span><vv-optional-text><vv-text color="grey-light" inline=""><span class="vv-text vv-text__size--md vv-text__weight--regular vv-color--grey-light"> (optional)</span></vv-text></vv-optional-text><div class="vv-simple-select__control-container" id="selectContainer"><i name="dropdown" class="vv-simple-select__dropdown-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="vv-icon vv-icon__size--sm"><path d="M11.357 14.228c.355.426.926.432 1.286 0l3.082-3.698C16.43 9.685 16.113 9 15 9H9c-1.105 0-1.426.688-.725 1.53l3.082 3.698z" fill="currentColor"></path></svg></i></div></label>';
      console.log("function:createChildCatOptions -> select label created");
	    
      document.getElementsByClassName(elemId)[0].appendChild(selectLabel);      
      document.getElementById('selectContainer').appendChild(select);
	    console.log("function:createChildCatOptions -> select container added");
      
    var optionEmpty = document.createElement("option");
      optionEmpty.value = '';
      optionEmpty.text = selectBaseText;
    select.appendChild(optionEmpty);
    
    for (var i = 1; i < childCategories.length; i++) {
      var option = document.createElement("option");
        option.value = childCategories[i];
        option.text = childCategories[i];
        select.appendChild(option);
    }
    
    childCatChange();
    }
  }
  
  function childCatChange(){
    $('#childCatSelect').on('change', function(){
      var childCat = $(this).children("option:selected").val();
      addValToHiddenField(childCat);
    });
  }
  
  function addValToHiddenField(childCat){
	  console.log("function:addValToHiddenField");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
        var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
        if( labelText.indexOf(parentCatNameCurrLang) != -1 ){

          var that = $(this);
          
          var elemLabel = that.find('label')[0];
          
            var evt = new CustomEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            elemLabel.dispatchEvent(evt);
          
        setTimeout(function(){
          
          if(childCat){
            that.find('input').val(childCat);
          }else{
            that.find('input').val('');
          }
          
          var elemInput = that.find('input')[0];
          
          
            var evtInput = new CustomEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            elemInput.dispatchEvent(evtInput);
          
          
        }, 100);
        }
    });
    
  }
  
  function addErrorState(val){
	  console.log("function:addErrorState");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
        var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
        if( labelText.indexOf(parentCatNameVisibleLang) != -1 ){
          if(!val){
            $(this).addClass('empty-select-value');
            $('.customization2_attendee_edit-action_save').prop('disabled', true);
            if($('.error-message').length < 1){
              $('.customization2_attendee_edit-action_save').before('<span class="error-message">'+errorMssge+'</span>'); 
            }
          }else{
            $(this).removeClass('empty-select-value');
            $('.customization2_attendee_edit-action_save').prop('disabled', false);
            $('div.customization2_attendee_edit-action').find('.error-message').remove();
          }
        }
    });
  }
  addErrorState();
  
  function clearSubInduxtryField(){
	  console.log("function:clearSubInduxtryField");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
        var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
        if( labelText.indexOf(parentCatNameCurrLang) != -1 ){
          $(this).find('input').val('');
        }
    });
  }
  
  function checkIsFormFilledIn(event){
	  console.log("function:checkIsFormFilledIn");
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(){
        var labelText = $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
        if( labelText.indexOf(parentCatNameVisibleLang) != -1 ){
          
          if($('.empty-select-value').length > 0){
            $(this).find('.vv-simple-select__control-container').addClass('error-state');
          }else{
            $(this).find('.vv-simple-select__control-container').removeClass('error-state');
          }
          
        }
    });
  }
  
  
  $('.customization2_attendee_edit-action_save').on('click', function(event){
    checkIsFormFilledIn(event);
  });
  
  /* polyfill for IE custom event support*/
(function () {
  if ( typeof window.CustomEvent === "function" ) return false; //If not IE

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();
  
