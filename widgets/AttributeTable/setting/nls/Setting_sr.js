// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AttributeTable/nls/strings":{_widgetLabel:"Atributna tabela",_featureAction_ShowRelatedRecords:"Prika\u017ei povezane zapise",_featureAction_ViewInTable:"Prika\u017ei u tabeli atributa",ok:"U redu",cancel:"Otka\u017ei",unsupportQueryWarning:"Sloj mora da podr\u017eava radnju upita da bi se prikazao u vid\u017eetu \u201eAtributna tabela\u201c. Postarajte se da je mogu\u0107nost izvr\u0161avanja upita u servisu uklju\u010dena.",exportMessage:"Izvezi podatke u CSV datoteku?",exportFiles:"Izvezi u CSV",
exportSelected:"Izvezi selektovano u CSV",exportAll:"Izvezi sve stavke u CSV",options:"Opcije",zoomto:"Uveli\u010daj na",highlight:"Istakni grafiku",selectAll:"Selektuj zapise na svim stranicama",selectPage:"Selektuj zapise na trenutnoj stranici",clearSelection:"Izbri\u0161i izbor",selectionHandleLabel:"Regulator izbora",selectionHandleDescription:"Pritisnite taster ENTER ili SPACE da biste istakli geoobjekat/geoobjekte na mapi",filter:"Filter",setFilterTip:"Pravilno postavite filtere.",noFilterTip:"Bez definisanih izraza filtera, ovaj zadatak upita \u0107e izlistati sve geoobjekte u odre\u0111enom izvoru podataka.",
filterByExtent:"Filtriraj po obuhvatu mape",showSelectedRecords:"Prika\u017ei selektovane zapise",showAllRecords:"Prika\u017ei sve zapise",showRelatedRecords:"Prika\u017ei povezane zapise",noRelatedRecords:"Nema prona\u0111enih povezanih zapisa",highlightAllRecords:"Istaknite sve zapise na mapi",attachmentColumn:"Fotografije i datoteke",refresh:"Osve\u017ei",features:"geoobjekti",records:"podaci",selected:"selektovano",transparent:"Re\u017eim prozirnosti",indicate:"Lociraj selektovano",columns:"Prika\u017ei/sakrij kolone",
selectionSymbol:"Simbol selekcije",closeMessage:"Sakrij tabelu (ponovo je pro\u0161iri od dna)",dataNotAvailable:"Podaci nisu dostupni!\x3cbr\x3eKliknite na dugme [Osve\u017ei] da biste ponovo poku\u0161ali.",openTableTip:"Otvori atributnu tabelu",closeTableTip:"Sakrij atributnu tabelu",sortAsc:"Sortiraj po rastu\u0107em redosledu",sortDes:"Sortiraj po opadaju\u0107em redosledu",statistics:"Statistika",attachments:"Prilozi",files:"datoteke",keepRichTextLabel:"Zadr\u017ei oboga\u0107eni tekst",whatsThis:"\u0160ta je ovo?",
richTextMessage:{explanatoryText:{line1:"${layerName} sadr\u017ei slede\u0107a polja oboga\u0107enog teksta: ",line2:" ovo mo\u017ee da uklju\u010di stilove formatiranja teksta, kao \u0161to su font, boja i veli\u010dine teksta.",line3:'Kada se izveze u CSV format, stilovi oblikovanja \u0107e biti sa\u010duvani u formi HTML oznaka. Mo\u017eete da izaberete da ne \u010duvate oboga\u0107eni tekst opozivanjem izbora opcije "Keep rich text format\u201c.'},example:{label:"Na primer:",scenarios:{first:"bi\u0107e podrazumevano izvezeno kao slede\u0107i tekst:",
second:"a slede\u0107i tekst bez oboga\u0107enog teksta:"}}},noTablesAvailable:"Nema raspolo\u017eivih tabela za prikaz.",checkConfigutationToSelectLayers:"Idite na stranicu za postavke vid\u017eeta kako biste izabrali slojeve.",checkLayerListToSelectLayers:"Tabela atributa se sinhronizuje sa vidljivim slojevima na mapi, mo\u017eete da koristite vid\u017eet poput Liste slojeva za uklju\u010divanje/isklju\u010divanje slojeva.",rowHeaderColumnTitle:"Red ${rowId} je ozna\u010den. Upravljanje izborom, pritisnite Enter da biste izabrali ozna\u010deni red",
rowHeaderColumnTitleMultiple:"Red ${rowId}, ${rowCount} redova je ozna\u010deno. Upravljanje izborom, pritisnite Enter da biste izabrali ozna\u010deni red.",_localized:{}},"widgets/AttributeTable/setting/nls/strings":{instruction:"Izaberi i konfiguri\u0161i slojeve koji \u0107e biti inicijalno prikazani u atributnoj tabeli.",label:"Sloj",show:"Prika\u017ei",actions:"Konfiguri\u0161ite polja sloja",field:"Polje",alias:"Pseudonim",url:"URL adresa",sortField:"Sortiraj polje",sortOrderTooltips:{toDescending:"Promeni na opadaju\u0107i raspored",
toAscending:"Promeni na rastu\u0107i raspored"},visible:"Vidljivo",linkField:"Link polja",noLayers:"Nema dostupnih slojeva geoobjekata",back:"Nazad",exportCSV:"Omogu\u0107i izvoz u CSV",expand:"Inicijalno pro\u0161iri vid\u017eet",filterByExtent:"Podrazumevano omogu\u0107i filter po obuhvatu mape",allowTextSelection:"Omogu\u0107i selekciju teksta",highlightColor:"Istakni boju",restore:"Vrati na podrazumevanu vrednost",ok:"U redu",cancel:"Otka\u017ei",includePoint:"Uklju\u010di koordinate ta\u010dke u izvezenu datoteku",
configureLayerFields:"Konfiguri\u0161ite polja sloja",result:"Uspe\u0161no sa\u010duvano",warning:"Najpre izaberite \u201ePrika\u017ei opcije\u201c.",fieldCheckWarning:"Bar jedno polje mora da bude izabrano.",unsupportQueryWarning:"Sloj mora da podr\u017eava radnju upita da bi se prikazao u vid\u017eetu \u201eAtributna tabela\u201c. Postarajte se da je mogu\u0107nost izvr\u0161avanja upita u servisu uklju\u010dena.",unsupportQueryLayers:"Slede\u0107i sloj mora da podr\u017eava radnju upita da bi se prikazao u vid\u017eetu \u201eAtributna tabela\u201c. Postarajte se da je mogu\u0107nost izvr\u0161avanja upita u servisu uklju\u010dena.",
fieldName:"Naziv",fieldAlias:"Pseudonim",fieldVisibility:"Vidljivost",fieldActions:"Radnje",showAttachments:"Prika\u017ei priloge",syncWithLayers:"Sinhronizuj sa vidljivostima slojeva",syncWithLayersHint:"Slojevi koji su prikazani u tabeli atributa se dinami\u010dki sinhronizuju sa vidljivostima slojeva.",_localized:{}}});