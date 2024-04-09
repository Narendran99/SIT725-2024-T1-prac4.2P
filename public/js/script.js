$(document).ready(function(){
    console.log("Document ready!");

    $('.materialboxed').materialbox();
    $('#clickMe').click(function() {
        alert("Thanks for clicking me. Hope you have a nice day!");
    });

    const cardList = [
        {
            title: "Guitar 1",
            image: "images/Guitar.jpg",
            link: "About Guitar 2",
            description: "The Gibson Les Paul was first made in 1952 and is still considered one of the best musical instrument created"
        },
        {
            title: "Guitar 2",
            image: "images/Guitar.jpg",
            link: "About Guitar 3",
            description: "The Gibson Les Paul was first made in 1952 and is still considered one of the best musical instrument created"
        },
        {
            title: "Guitar 3",
            image: "images/Guitar.jpg",
            link: "About Guitar 3",
            description: "The Gibson Les Paul was first made in 1952 and is still considered one of the best musical instrument created"
        }
    ];

    const addCards = (items) => {
        console.log("Adding cards...");
        items.forEach(item => {
            let itemToAppend = `
                <div class="col s4 center-align">
                    <div class="card medium">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${item.image}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more</i></span>
                            <p><a href="#">${item.link}</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
            $("#card-section").append(itemToAppend);
        });
    };

    $(document).on('click', '#formSubmit', function() {
        console.log("Form submit button clicked!");
        let formData = {};
        formData.first_name = $('#first_name').val();
        formData.last_name = $('#last_name').val();
        formData.password = $('#password').val();
        formData.email = $('#email').val();
        console.log("Form Data Submitted:", formData);
    });

    addCards(cardList);
    $('#modal1').modal();
    $('#modal1').modal('open'); // Changed this line
});
