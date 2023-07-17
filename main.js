const reviews = [{id:0, name: "Helen D.", job: "Java Developer", image: "img/wom-1.jpg", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit iure aspernatur dicta ducimus tenetur officia perferendis suscipit dignissimos et neque illo ullam in facere nostrum molestias ut inventore, iste est?"}, 
                 {id:1, name: "Sophie L.", job: "Computer Science Student", image: "img/wom-3.jpg", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel accusamus quas alias nihil perferendis a ipsum, ipsam dolorum dignissimos ratione numquam consequatur pariatur enim dolor fugit quisquam ea ex quidem!"}, 
                 {id:2, name: "Lila R.", job: "AI Engineer", image: "img/wom-2.jpg", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium ab, eveniet, harum magni odio suscipit dolores aliquam voluptas soluta molestiae perspiciatis amet fuga iusto iure deleniti! Ipsum, officiis quis?"}, 
                 {id:3, name: "Mario S.", job: "Full Stack Developer", image: "img/man.jpg", descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi libero voluptatem amet quos quam necessitatibus corrupti officia ratione vero possimus odit quas, accusantium ipsa facilis eaque cum est! Vitae, magni?"}
]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function() {
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevBtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextBtnClicked()
    })
})

function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const { name, job, image, descr } = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = name
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDescr').innerHTML = descr
}

/* Controllers */

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClicked() {
    showPrevPersona()
}

/* 
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked() {
    showNextPersona()
}

/**
 * Circularly finds the previous persona id and shows the persona.
 */
function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

/**
 * Circularly finds the next persona id and shows the persona.
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId)
}