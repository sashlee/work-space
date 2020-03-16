$(function() {
	// Success
	document.querySelector('.sweet-success').onclick = function(){
		swal("Good job!", "You clicked the button!", "success");
	};

	document.querySelector('.save-space').onclick = function(){
		swal("Space Saved!", "This space has been added to your saved spaces.", "success");
	};

	// Confirm Warning
	document.querySelector('.confirm-success').onclick = function(){
		swal({
			title: "Are you sure?",
			text: "You are about to perform an action that needs your confirmation.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-danger',
			confirmButtonText: 'Yes, proceed',
			closeOnConfirm: false,
	          //closeOnCancel: false
	      },
	      function(){
	      	swal("Confirmed!", "Your action was taken successfully!", "success");
	      });
	};
});

$(function() {
	feather.replace();
});
