var tableValue = document.querySelectorAll(".js-value");
var setButton = document.querySelectorAll(".js-set-button");

var data = {
	series: [{data: []}
	]
};

var options = {
	fullWidth: true,
};

var chart = new Chartist.Line('.js-chart', data, options);

Array.prototype.forEach.call(setButton, function (child) {
	child.addEventListener("click", function () {

		for (var i = 0; i < setButton.length; i++) {
			setButton[i].classList.remove("active");
		}

		child.classList.add("active");

		data.series[0].data = [];
		chart.update(data, options, true);

		var dataValue = child.getAttribute("data-set");

		Array.prototype.forEach.call(tableValue, function (item) {
			var dataTable = item.getAttribute("data-set");
			if (dataTable == dataValue) {
				data.series[0].data.push(item.innerHTML);
			}
		});
		chart.update(data, options, true);
	})
});

setButton[0].click();
