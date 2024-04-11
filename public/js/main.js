async function demoFunction() {
    try {
        const overviewHolder = document.getElementsByClassName('row')[0]; // Selecting the container element where the data   will be displayed
        const temp = await fetch("../data/content.json"); // I am taking the data from the json file
        const data = await temp.json();

        data.info_cards.forEach(infoCard => {
            let cardElement = document.createElement('div');  // im making a div element for each of the info card
            cardElement.classList.add('info-card');   // I am adding a class to the card elements

            let titleElement = document.createElement('h2');  // the heading!
            titleElement.textContent = infoCard.title;

            let descriptionElement = document.createElement('p');
            descriptionElement.textContent = infoCard.description;   // a small description of what the info card 

            //Appending the title and descriptions 
            cardElement.appendChild(titleElement);
            cardElement.appendChild(descriptionElement);


            overviewHolder.appendChild(cardElement);
        });
    } catch (error) {
        console.log('error', error);  // this is to log errors
    }
}

demoFunction();
