$(document).ready(function () {
	addVoidForLinks($("a"));

	(function () {
		var fileItem = document.querySelectorAll('.js-item');

		if(!fileItem.length){
			return false;
		}

		var fileList = document.querySelector('.js-file-list');
		var addButton = document.querySelector(".js-file-add-item");
		var fileDelete = document.querySelectorAll(".js-file-delete");

		Array.prototype.forEach.call(fileItem, function (child) {
			var input = child.querySelector(".js-file");
			var imageName = child.querySelector(".js-file-name");

			input.addEventListener('change', function () {
				if (input.files && input.files[0]) {
					if (input.files[0].type.match('image.*')) {
						var reader = new FileReader();
						reader.onload = function () {
							imageName.innerHTML = input.files[0].name;
						};
						reader.readAsDataURL(input.files[0]);
					} else console.log('is not image mime type');
				} else console.log('not isset files data or files API not supordet');
			});


		});

		addButton.addEventListener("click", function () {
			var parent = document.querySelector('.js-file-list');
			var elem = parent.querySelector('.js-item');

			var clone = elem.cloneNode(true);
			var newBannerName = clone.querySelector(".js-file-name");
			newBannerName.innerHTML = "Banner name";
			parent.appendChild(clone);

			Array.prototype.forEach.call(fileDelete, function (child) {
				child.addEventListener("click", function () {
					var elem = $(child).parents(".js-item");
					elem.remove();
				})
			});

			var fileItem = document.querySelectorAll('.js-item');

			Array.prototype.forEach.call(fileItem, function (child) {
				var input = child.querySelector(".js-file");
				var imageName = child.querySelector(".js-file-name");

				input.addEventListener('change', function () {
					if (input.files && input.files[0]) {
						if (input.files[0].type.match('image.*')) {
							var reader = new FileReader();
							reader.onload = function () {
								imageName.innerHTML = input.files[0].name;
							};
							reader.readAsDataURL(input.files[0]);
						} else console.log('is not image mime type');
					} else console.log('not isset files data or files API not supordet');
				});


			});
		});

		fileList.addEventListener("click", function (e) {
			if (e.target.classList.contains("js-file-delete")) {
				var elem = $(e.target).parents(".js-item");
				elem.remove();
			}
		})

	})();
});