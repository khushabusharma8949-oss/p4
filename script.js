```javascript
const books = [

    {
        title: "Code & Coffee",
        author: "Mira Shah",
        price: 399,
        cat: "tech",
        tag: "TECH"
    },

    {
        title: "The Blue Window",
        author: "Aarav Mehta",
        price: 349,
        cat: "story",
        tag: "STORY"
    },

    {
        title: "Start Small",
        author: "Riya Kapoor",
        price: 429,
        cat: "business",
        tag: "BUSINESS"
    },

    {
        title: "Data Made Simple",
        author: "N. Verma",
        price: 499,
        cat: "study",
        tag: "STUDY"
    },

    {
        title: "Midnight Letters",
        author: "Ishita Rao",
        price: 379,
        cat: "story",
        tag: "STORY"
    },

    {
        title: "The Smart Semester",
        author: "K. Arora",
        price: 459,
        cat: "study",
        tag: "STUDY"
    }

];


const grid = document.getElementById("bookGrid");

const count = document.getElementById("bagCount");

const result = document.getElementById("resultText");

const toast = document.getElementById("toast");


let bag = 0;



function showBooks(filter = "all") {

    const list =
        filter === "all"
            ? books
            : books.filter(book => book.cat === filter);


    grid.innerHTML = list.map(book => `

        <article class="book">

            <div class="cover">

                <span>
                    BOOKNEST • ${book.tag}
                </span>

                <strong>
                    ${book.title}
                </strong>

                <span>
                    ${book.author}
                </span>

            </div>


            <div class="book-info">

                <h3>
                    ${book.title}
                </h3>

                <div class="meta">
                    ${book.author} · ★ 4.9
                </div>

                <div class="buy-row">

                    <span class="price">
                        ₹${book.price}
                    </span>

                    <button
                        class="buy"
                        onclick="addToBag('${book.title}')">

                        Add to bag

                    </button>

                </div>

            </div>

        </article>

    `).join("");


    result.textContent =
        `${list.length} book${list.length !== 1 ? "s" : ""}`;
}



function addToBag(title) {

    bag++;

    count.textContent = bag;


    toast.textContent =
        `"${title}" added to your bag`;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}



document.querySelectorAll(".moods button")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".moods button")
                .forEach(btn => {
                    btn.classList.remove("active");
                });


            button.classList.add("active");


            showBooks(button.dataset.filter);

        });

    });



document
    .getElementById("surpriseBtn")
    .addEventListener("click", () => {

        const pick =
            books[Math.floor(Math.random() * books.length)];


        toast.textContent =
            `Your surprise pick: ${pick.title} — ₹${pick.price}`;


        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 2400);

    });



document
    .getElementById("offerBtn")
    .addEventListener("click", () => {

        toast.textContent =
            "Offer unlocked: buy any 2 books and save 15%!";


        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

    });



document
    .getElementById("bagBtn")
    .addEventListener("click", () => {

        if (bag > 0) {

            toast.textContent =
                `You have ${bag} item${bag > 1 ? "s" : ""} in your bag.`;

        } else {

            toast.textContent =
                "Your reading bag is empty.";

        }


        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 1800);

    });



showBooks();
```
