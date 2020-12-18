(() => {
	/*.............................................................
								Variable Declaration
		...............................................................*/
	let current_date, current_month, current_year, button_id, GetInputData, Split_GetInputData, modify_Split_GetInputData, Age_year, Age_Month, Age_Day, Distance, Upcomming_month, Upcomming_year, day, Upcomming_Birth_Day, Months, Upcomming_day, count = false, maintain_message, machine_year, machine_month, machine_day, reset_user_input, input_block;
	/*.............................................................
				Function for pushing elemen't
	...............................................................*/
	const push = () => {
		const success = () => {
			setTimeout(() => {
				let message1 = '<div class="w3-container w3-center w3-animate-left"><div class="alert alert-success alert-dismissible fade show" id="success-id"><strong>Success!</strong> Your input has been <span id="sent_success"> sent successfully.</span></div></div>';
				let access1 = document.getElementById('empty');
				access1.insertAdjacentHTML('afterbegin', message1);
			}, 500);
		}
		//your age interface
		const cu_final_age = () => {
			setTimeout(() => {
				let k1, k2, k3, k4, message2;
				k1 = '<div class="w3-container w3-center w3-animate-left" id="remove_age"><div class="alert alert-info" id="info-id"><strong>Info!</strong> Your Age Is:<em id="age_current"> %cur_year% Years %cur_months% Months %cur_day% Days </em</div</div>';
				k2 = k1.replace('%cur_year%', Age_year);
				k3 = k2.replace('%cur_months%', Age_Month);
				k4 = k3.replace('%cur_day%', Age_Day);
				message2 = document.getElementById('success-id');
				message2.insertAdjacentHTML('afterend', k4);


			}, 1000);
		}
		//upcomming
		const upcomming_birth_full = () => {
			setTimeout(() => {
				let kk1, kk2, kk3, kk4, kk5, message3;
				kk1 = '<div class="heart" id="info-id-b"><div class="w3-container w3-center w3-animate-left"><div class="alert alert-info" id="info-id"><strong>Upcomming</strong> Birthday:<em id="Upcomming_Birthday"> %up_date% %up_month%  %up_year% %up_day%</em></div></div></div>';
				kk2 = kk1.replace('%up_day%', Upcomming_day);
				kk3 = kk2.replace('%up_month% ', Upcomming_month);
				kk4 = kk3.replace('%up_year%', Upcomming_year);
				kk5 = kk4.replace('%up_date%', Upcomming_date1);
				message3 = document.getElementById('info-id');
				message3.insertAdjacentHTML('afterend', kk5);
				//stop animation after like 3 seconds. 
				stopani = () => {
					setTimeout(() => {
						document.getElementById('info-id-b').classList.toggle('heart');
						document.getElementById('info-id-b').removeAttribute('id', 'info-id-b');

					}, 2000);
				}
				stopani();
				count = true;

			}, 1500);
		}
		//for call to add the interface
		const call_message = () => {
			success();
			cu_final_age();
			upcomming_birth_full();
		}
		call_message();
	}
	/*.............................................................
			   Disable some DOM element's
   ...............................................................*/
	document.getElementsByClassName('section-two-class-span-2')[0].style.display = 'none';
	//warn id stop
	warntog1 = () => {
		setTimeout(() => {
			document.getElementById('id_warn').classList.toggle('heart');
		}, 2000);
	}
	warntog1();

	/*.............................................................
					Final calculation machine function
	...............................................................*/
	const Machine = () => {
		if (count) {
			document.getElementById('success-id').style.display = 'none';
			document.getElementById('remove_age').style.display = 'none';
			document.getElementById('info-id').style.display = 'none';
			//function
			push();
			count = false;
		}
		else {
			GetInputData = document.getElementById('input-id').value;
			Split_GetInputData = GetInputData.split('-');
			modify_Split_GetInputData = Split_GetInputData.map(e => parseInt(e));
			//Checking if we submitted the all input field and year can't cross the current year also current months and current date. 
			if (modify_Split_GetInputData[0] > current_year) {
				document.getElementById('ops').innerHTML = '<b><em>Ops!</em></b>';
				document.getElementById('warn-aa').innerHTML = '<em> You can\'t cross the current year.</em>';

				let submit = document.getElementById('button-cls');
				submit.style.backgroundColor = 'red';
				let radio = document.getElementsByClassName('Select-one')[0];
				radio.innerHTML = '<em>Selected</em>';
				radio.style.color = '#2ed42e';
				document.getElementById('id_warn').classList.toggle('heart');
				//warn id stop
				warntog1();
			}

			else if (current_year === modify_Split_GetInputData[0] && modify_Split_GetInputData[1] === current_month && modify_Split_GetInputData[2] > current_date) {
				document.getElementById('ops').innerHTML = '<b><em>Ops!</em></b>'
				document.getElementById('warn-aa').innerHTML = '<em> You can\'t cross the current date.</em>';
				let submit = document.getElementById('button-cls');
				submit.style.backgroundColor = 'red';
				let radio = document.getElementsByClassName('Select-one')[0];
				radio.innerHTML = '<em>Selected</em>';
				radio.style.color = '#2ed42e';
				document.getElementById('id_warn').classList.toggle('heart');
				//warn id stop
				warntog1();
			}
			else if (current_year === modify_Split_GetInputData[0] && modify_Split_GetInputData[1] > current_month) {
				document.getElementById('ops').innerHTML = '<b><em>Ops!</em></b>'
				document.getElementById('warn-aa').innerHTML = '<em> You can\'t cross the current month.</em>';
				let submit = document.getElementById('button-cls');
				submit.style.backgroundColor = 'red';
				let radio = document.getElementsByClassName('Select-one')[0];
				radio.innerHTML = '<em>Selected</em>';
				radio.style.color = '#2ed42e';
				document.getElementById('id_warn').classList.toggle('heart');
				//warn id stop
				warntog1();
			}
			else {
				if (modify_Split_GetInputData[0] && modify_Split_GetInputData[1] && modify_Split_GetInputData[2] && (current_year >= modify_Split_GetInputData[0])) {
					//Some DOM effect's
					let radio = document.getElementsByClassName('Select-one')[0];
					radio.innerHTML = '<em>Selected</em>';
					radio.style.color = '#2ed42e';
					document.getElementById('button-cls').style.backgroundColor = '#198754';
					let first_warn_remove = document.getElementById('id_warn');
					first_warn_remove.style.display = 'none';
					document.getElementsByClassName('section-two-class-span-2')[0].style.display = 'block'
					maintain_message = document.getElementsByClassName('section-two-class-span-2')[0];
					maintain_message.innerHTML = "<em> Good you successfully maintained the format </em>";
					maintain_message.style.color = '#2ed42e';
					document.getElementsByClassName('last-one-span')[0].innerHTML = "<em>This results based on your input</em>";
					document.getElementsByClassName('last-one-span')[0].style.color = '#2ed42e';



					//Here to machine making
					if (modify_Split_GetInputData[2] === current_date && modify_Split_GetInputData[0] === current_year && modify_Split_GetInputData[1] === current_month - 1) {
						Age_Month = 1;
						Age_year = 0;
						Age_Day = 0;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (modify_Split_GetInputData[2] > current_date && modify_Split_GetInputData[1] === current_month && modify_Split_GetInputData[0] === current_year - 1) {
						Age_year = 0;
						Age_Month = 12 - 1;
						Day = modify_Split_GetInputData[2] - current_date;
						Age_Day = (30 - Day);
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (modify_Split_GetInputData[2] === current_date && modify_Split_GetInputData[1] > current_month && modify_Split_GetInputData[0] === current_year - 1) {
						Age_year = 0;
						Age_Day = 0;
						Distance = modify_Split_GetInputData[1] - current_month;
						Age_Month = 12 - Distance;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (modify_Split_GetInputData[2] === current_date && current_year > modify_Split_GetInputData[0] && modify_Split_GetInputData[0] !== current_year - 1 && modify_Split_GetInputData[1] > current_month) {
						Age_Day = 0;
						Distance = modify_Split_GetInputData[1] - current_month;
						Age_Month = 12 - Distance;
						Age_year = (current_year - modify_Split_GetInputData[0]) - 1;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (modify_Split_GetInputData[0] === current_year && modify_Split_GetInputData[2] === current_date && current_month > modify_Split_GetInputData[1] && modify_Split_GetInputData[1] !== current_month - 1) {
						Age_Day = 0;
						Age_Month = current_month - modify_Split_GetInputData[1];
						Age_year = 0;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (current_date === modify_Split_GetInputData[2] && modify_Split_GetInputData[1] === current_month && (modify_Split_GetInputData[0] === current_year || current_year > modify_Split_GetInputData[0])) {
						Age_Day = 0;
						Age_Month = 0;
						Age_year = current_year - modify_Split_GetInputData[0];
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (modify_Split_GetInputData[2] === current_date && modify_Split_GetInputData[0] !== current_year && current_year > modify_Split_GetInputData[0] && modify_Split_GetInputData[1] === current_month - 1) {
						Age_year = current_year - modify_Split_GetInputData[0];
						Age_Day = 0;
						Age_Month = 1;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if (current_date === modify_Split_GetInputData[2] && modify_Split_GetInputData[1] < current_month && current_year !== modify_Split_GetInputData[0] && current_year - 1 !== modify_Split_GetInputData[0]) {
						Age_Day = 0;
						Age_Month = current_month - modify_Split_GetInputData[1];
						Age_year = current_year - modify_Split_GetInputData[0];
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					//here
					else if (current_date === modify_Split_GetInputData[2] && modify_Split_GetInputData[1] < current_month && modify_Split_GetInputData[1] !== current_month - 1 && current_year !== modify_Split_GetInputData[0] && current_year - 1 === modify_Split_GetInputData[0]) {
						Age_year = 1;
						Age_Month = current_month - modify_Split_GetInputData[1];
						Age_Day = 0;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}


					else if (modify_Split_GetInputData[2] !== current_date && current_year >= modify_Split_GetInputData[0]) {
						if ((current_date > modify_Split_GetInputData[2]) && (modify_Split_GetInputData[1] === current_month)) {
							Age_Day = current_date - modify_Split_GetInputData[2];
							Age_Month = 0;
							Age_year = current_year - modify_Split_GetInputData[0];
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
						}
						if (current_date > modify_Split_GetInputData[2] && modify_Split_GetInputData[1] > current_month && modify_Split_GetInputData[0] !== current_year) {
							Age_Day = current_date - modify_Split_GetInputData[2];
							Distance = modify_Split_GetInputData[1] - current_month;
							Age_Month = 12 - Distance;
							Age_year = current_year - modify_Split_GetInputData[0] - 1;
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
						}
						else if (current_date > modify_Split_GetInputData[2] && modify_Split_GetInputData[1] < current_month) {

							Age_Day = current_date - modify_Split_GetInputData[2];
							Age_year = current_year - modify_Split_GetInputData[0];
							Age_Month = current_month - modify_Split_GetInputData[1];
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
						}

						else if (current_date < modify_Split_GetInputData[2] && modify_Split_GetInputData[1] === current_month && modify_Split_GetInputData[0] !== current_year && modify_Split_GetInputData[0] !== current_year - 1) {
							Day = modify_Split_GetInputData[2] - current_date;
							Age_Day = (30 - Day);
							Age_Month = current_month - 1;
							Age_year = current_year - modify_Split_GetInputData[0] - 1;
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
						}
						else if (current_date < modify_Split_GetInputData[2] && modify_Split_GetInputData[1] !== current_month && (modify_Split_GetInputData[0] !== current_year || modify_Split_GetInputData[0] === current_year)) {
							if ((current_month > modify_Split_GetInputData[1]) && (modify_Split_GetInputData[0] === current_year) && (current_month - 1 === modify_Split_GetInputData[1])) {
								Day = modify_Split_GetInputData[2] - current_date;
								Age_Day = (30 - Day);
								Age_Month = 0;
								Age_year = 0;

								console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
							}
							else if (current_month > modify_Split_GetInputData[1] && modify_Split_GetInputData[0] === current_year && current_month - 1 !== modify_Split_GetInputData[1]) {
								Day = modify_Split_GetInputData[2] - current_date;
								Age_Day = (30 - Day);
								Age_Month = current_month - modify_Split_GetInputData[1] - 1;
								Age_year = 0;
								console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
							}
							else if (current_month > modify_Split_GetInputData[1] && modify_Split_GetInputData[0] !== current_year) {
								Day = modify_Split_GetInputData[2] - current_date;
								Age_Day = (30 - Day);
								Age_Month = current_month - modify_Split_GetInputData[1] - 1;
								Age_year = current_year - modify_Split_GetInputData[0];
								console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
							}
							else if (modify_Split_GetInputData[1] > current_month && modify_Split_GetInputData[0] < current_year) {
								Day = modify_Split_GetInputData[2] - current_date;
								Age_Day = (30 - Day) + 1;
								Distance = modify_Split_GetInputData[1] - current_month;
								Age_Month = (12 - Distance) - 1;
								Age_year = current_year - modify_Split_GetInputData[0] - 1;
								console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);


							}
						}
					}
					//Results in Age_year,Age_Month,Age_Day



					//Upcomminng birth day calculation
					Upcomming_month1 = modify_Split_GetInputData[1];
					Upcomming_date1 = modify_Split_GetInputData[2];
					//its ok not required any changes
					Upcomming_year = current_year + 1;

					//For Months
					Months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

					Upcomming_Birth_Day = new Date(`${Months[Upcomming_month1 - 1]} ${Upcomming_date1} ${Upcomming_year}`);
					//For Days
					day = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thrusday', 'Friday', 'Saturday'];
					Upcomming_day = day[Upcomming_Birth_Day.getDay()];
					Upcomming_year = current_year + 1;
					Upcomming_month = Months[Upcomming_month1 - 1];
					console.log(Upcomming_date1, Upcomming_day, Upcomming_month, Upcomming_year);
					//Results in Upcomming_day,Upcomming_month,Upcomming_year,Upcomming_date1

					//Machine for code block
					let code_block = false;
					if (machine_day === modify_Split_GetInputData[2] && machine_month === modify_Split_GetInputData[1] && machine_year === modify_Split_GetInputData[0]) {
						code_block = true;
					}

					if (code_block === false) {
						//Machine for code block
						machine_year = modify_Split_GetInputData[0];
						machine_month = modify_Split_GetInputData[1];
						machine_day = modify_Split_GetInputData[2];

						push();
					}
				}
				else {
					let submit = document.getElementById('button-cls');
					submit.style.backgroundColor = 'red';
					document.getElementsByClassName('section-two-class-span-2')[0].style.display = 'block';
					document.getElementById('ops').innerHTML = '*Sorry! ';
					document.getElementById('warn-aa').innerHTML = 'Your date of birth is required.';
					document.getElementById('id_warn').classList.toggle('heart');
					//warn id stop
					warntog1();

				}
			}
		}
		if (modify_Split_GetInputData[0] && modify_Split_GetInputData[1] && modify_Split_GetInputData[2]) {

			reset_user_input = true;
		}
	}//here our main function machine end 

	//when we click the date input field(reset everything like normal)
	document.getElementById('input-id').addEventListener('click', () => {
		if (reset_user_input) {

			modify_Split_GetInputData[0] = 0;
			modify_Split_GetInputData[1] = 0;
			modify_Split_GetInputData[2] = 0;
		}
		count = false;
		let date_after = document.getElementsByClassName('section-two-class-span-2')[0];
		date_after.innerHTML = '(*Please maintain the format like dd-mm-year)';
		date_after.style.color = 'red';
		let gender_next = document.getElementsByClassName('Select-one')[0];
		gender_next.innerHTML = '(*Select&mdash;one)';
		gender_next.style.color = 'red';
		document.getElementsByClassName('section-two-class-span-2')[0].style.display = 'none';
		let submit = document.getElementById('button-cls');
		submit.style.backgroundColor = '#198754';
		document.getElementsByClassName('last-one-span')[0].innerHTML = "(*This result based on your input)";
		document.getElementsByClassName('last-one-span')[0].style.color = 'red';
		document.getElementById('id_warn').classList.toggle('heart');
		//warn id stop
		warntog1 = () => {
			setTimeout(() => {
				document.getElementById('id_warn').classList.toggle('heart');
			}, 2000);
		}
		warntog1();


		//for success message remove
		if (Age_year >= 0 && Age_Month >= 0 && Age_Day >= 0) {
			document.getElementsByClassName('w3-container w3-center w3-animate-left')[0].style.display = 'none';
			document.getElementById('remove_age').style.display = 'none';
			document.getElementById('info-id').style.display = 'none';
			first_warn_remove2 = document.getElementById('id_warn');
			first_warn_remove2.style.display = 'block';
			machine_year = false;
			machine_month = false;
			machine_day = false;
			document.getElementById('input-id').value = 'yyyy-MM-dd';

		}
		console.log(Age_year, Age_Month, Age_Day);
		document.getElementById('ops').innerHTML = 'Warning! '
		document.getElementById('warn-aa').innerHTML = ' Please enter you date of birth.';
	});




	//for current date
	current_date = new Date().getDate();
	//for current month
	current_month = new Date().getMonth() + 1;
	//for current year
	current_year = new Date().getFullYear();

	//for submit button
	button_id = document.getElementById('button-cls');
	button_id.addEventListener('click', Machine);
	//For enter key press
	document.addEventListener('keypress', (e) => {
		if (e.keyCode === 13) {
			Machine();
		}
	});


})();
