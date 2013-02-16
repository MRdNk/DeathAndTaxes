
/*
 * GET home page.
 */

 var wards = ["Ashley", "Avonmouth", "Bedminster", "Bishopston", "Bishopsworth", "Brislington East", "Brislington West", "Cabot", "Clifton", "Clifton East", "Cotham", "Easton", "Eastville", "Filwood", "Frome Vale", "Hartcliffe", "Henbury", "Hengrove", "Henleaze", "Hillfields", "Horfield", "Kingsweston", "Knowle", "Lawrence Hill", "Lockleaze", "Redland", "St George East", "St George West", "Southmead", "Southville", "Stockwood", "Stoke Bishop", "Westbury-on-Trym", "Whitchurch Park", "Windmill Hill", "Bristol (City of)"];

exports.index = function(req, res){
  res.render('index', { 
      title: 'Death and Taxes'
    , quote: 'Our new Constitution is now established, and has an appearance that promises permanency; but in this world nothing can be said to be certain, except death and taxes.'
    , auth: 'Benjamin Franklin'
    , wards: wards
  });
};