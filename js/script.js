let eventsData, userInput;

const $name = $('#name');
const $date = $('#date');
const $url = $("#url");
const $input = $('input[type="text"]');

const API_KEY = "gcHbvLNj3DZv8Yomjo6t7WjqsJ56pDG3"
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US"



$('form').on('submit', handleGetData);

function handleGetData(evt) {
    evt.preventDefault(); 

    userInput = $input.val();

        $.ajax(BASE_URL + "&keyword=" + userInput + "&apikey=" + API_KEY)
        .then(function (eventsData) {
                console.log(eventsData);
                $name.text(eventsData._embedded.events[0].name);
                $date.text(eventsData._embedded.events[0].dates.start.localDate);
                $url.html(`<a href ="${eventsData._embedded.events[0].url}">${eventsData._embedded.events[0].url}</a>`);
                // render(eventsData)
                // Parse the response.
                // Do other things.
            }, function(error) {
                console.log(error);
            });
    }

// function render() {
//         $name.text(eventsData.events.name);
//         $date.text(eventsData.events.date);
//         $url.text(eventsData.events.url);
// }


// function render() {
//         $name.text(eventsData.events[0].name);
//         $date.text(eventsData.events[0].dates.start.localDate);
//         $url.text(eventsData.events[0].url);
// }
