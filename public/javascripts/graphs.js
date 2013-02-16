var chart = new Charts.LineChart('chart1');
var i = 0;

var wards = [];

for (data in dataset) {
  
    chart.add_line ({
      data: dataset[data],
      options: {
        // line_color: "#ffee33",
        // dot_color: "#ffee33",
        fill_area: false,
        line_width: 1,
        dot_size: 2,
        label_max: false,
        label_min: false
      }
    })

    wards.push(data);

}
/*console.log(chart);
console.log(chart.line_options[0].line_color)
console.log(wards)
*/
$('a').click(wardSelect);

var currentSelected = [];

function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function wardSelect (e) {
  var id = $(this).attr('data-id');
  var colour;
  var line_width;

  if(currentSelected.indexOf(id) === -1) {
    colour = get_random_color(); //'#FF73DB';
    currentSelected.push(id);
    line_width = 3;
  } else {
    colour = '#00B7FF';
    currentSelected.splice(currentSelected.indexOf(id),1);
    line_width = 1;
  }
  $(this).css('color', colour);
  
  chart.line_options[id].line_color = colour;
  chart.line_options[id].line_width = line_width;

  chart.draw();

}


chart.draw();