$('document').ready(function() {
	var newLi = '<li></li>';
	var closeBtn = '<button class="ui-button ui-corner-all delete-btn">Delete</button>';
	var taskListArr = [];

	$("#todoList").sortable();
	$("#todoList").disableSelection();
	$('#addBtn').on('click', examineTaskData);
	$('#todoList').on('click', 'button', deleteTask);

	checkLocalStorage()

	function checkLocalStorage() {
		if (localStorage.storedTasks) {
			taskListArr = JSON.parse(localStorage.getItem('storedTasks'));
			for (var i = 0; i < taskListArr.length; i++){
				appendLocalStorage(taskListArr[i]);
			}
		}
	}
	function appendLocalStorage(task) {
		$('#todoList').append(newLi);
		$('#todoList li:last-child').append(task + closeBtn);
	}
	function examineTaskData() {
		event.preventDefault();
		// was unable to pass this thru to updateLocalStorage()
		var taskToAdd = $('#nextEntry');
		// alerts user if trying to enter blank field
		
		if (taskToAdd.val() === '') {
			alert('cannot add blank');
			return;
		}
		
		appendToList(taskToAdd.val());
		taskListArr.push(taskToAdd.val()); //would be in updateLocalStorage if not for my bug
		updateLocalStorage();
		
		//clears the entry field
		taskToAdd.val('');
	}
	function invalidEntry(enteredTask) {
	}

	function appendToList(taskToAdd) {
		//could not pass original takToAdd as a parameter, breaks this function
		//var taskToAdd = $('#nextEntry').val();
		$('#todoList').append(newLi);
		$('#todoList li:last-child').append(taskToAdd + closeBtn);
	}
	function updateLocalStorage() {
		localStorage.setItem('storedTasks', JSON.stringify(taskListArr));
	}
	function deleteTask() {
		var toRemove = ( $(this).parent().text() );
		taskListArr.splice(taskListArr.indexOf(toRemove), 1);
		updateLocalStorage();
		$(this).parent().remove();
	}


})

