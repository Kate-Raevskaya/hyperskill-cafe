let commentTitle = document.getElementById("reviewTitle");
let comment = document.getElementById("reviewText");
let nickname = document.getElementById("reviewName");
let reviewForm = document.getElementById("reviewForm");
let reviewsField = document.getElementById("reviewsRow");

reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = nickname.value;
    if (username === "") {
        username = "Anonymous";
    }
    reviewsField.insertAdjacentHTML('beforeend',  `
    <div class="col col-12 col-md-6 col-lg-4 py-3">
        <div class="card h-100">
            <div class="card-body">
                <h4 class="card-title">${commentTitle.value}</h4>
                <blockquote class="blockquote mb-0">
                    <p>${comment.value}</p>
                    <footer class="blockquote-footer text-end fst-italic"><I>${username}</I></footer>
                </blockquote>
            </div>
        </div>
    </div>`);
})